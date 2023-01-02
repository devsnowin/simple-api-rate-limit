import { rateLimiter } from '../../lib/rateLimit';

export default rateLimiter(
    /**
     *
     * @param {import('next').NextApiRequest} req
     * @param {import('next').NextApiResponse} res
     * @param {number} ttl
     * @param {number} remainingCall
     */
    async (req, res, ttl, remainingCall) => {
        res.status(200).json({
            message: 'Hello',
            ttl,
            remainingCall,
        });
    }
);
