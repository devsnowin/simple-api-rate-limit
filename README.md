# Simple redis cache demo using nextjs

Basic rate limit implementation with redis and nextjs. Rate limiting the user by using their ip address.

## Steps

-   Set an expiration time and allow hits for the API.
-   Using the redis increment method, increase and cache the IP address.
-   Check to see if it is a first request.
-   create ttl based on the request
-   Using the redis expire method, expire the IP address.

## To get started

`git clone https://github.com/im-snowin/simple-api-rate-limit.git`

and install the dependencies

`npm i`

### Vist the project

👉🏼 https://simple-rate-limit.vercel.app
