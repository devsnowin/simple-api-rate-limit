import Redis from 'ioredis';

export const redis = new Redis({
    username: process.env.REDIS_CLIENT_username,
    port: process.env.REDIS_CLIENT_PORT,
    password: process.env.REDIS_CLIENT_password,
    host: process.env.REDIS_CLIENT_host,
});
