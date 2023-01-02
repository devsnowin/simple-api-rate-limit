import { redis } from './redis';

const ALLOWEDHITS = parseInt(process.env.ALLOWEDHITS);
const EXPIRESIN = parseInt(process.env.EXPIRESIN);

/**
 *
 * @param {import('next').NextApiHandler} handler
 * @returns Function
 */
export const rateLimiter = (handler) => {
    /**
     * @param {import('next').NextApiRequest} req
     * @param {import('next').NextApiResponse} res
     */
    return async function (req, res) {
        // grap the IP Address
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        if (ip) {
            try {
                const requestCount = await redis.incr(ip);

                let ttl;
                if (requestCount === 1) {
                    // Reset the subcription
                    await redis.expire(ip, EXPIRESIN);
                    ttl = EXPIRESIN;
                } else {
                    ttl = await redis.ttl(ip);
                }

                // Catch rate limit
                if (requestCount >= ALLOWEDHITS) {
                    return res
                        .status(503)
                        .json({ message: 'Too many request', ttl });
                }

                const remainingCall = ALLOWEDHITS - requestCount;

                return handler(req, res, ttl, remainingCall);
            } catch (e) {
                return res
                    .status(400)
                    .json({ message: 'Something went wrong' });
            }
        }
    };
};
