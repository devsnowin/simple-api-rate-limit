# Simple redis cache demo using nextjs

Basic rate limit implementation with redis and nextjs. Rate limiting the user by using there ip address.

## Steps

-   Set a expire time and allow hits for the api
-   Using the redis increment method increase and cache the ip address
-   Check wheater it is a fisrt request or not
-   create ttl based on the request
-   Expire the ip using redis expire method
