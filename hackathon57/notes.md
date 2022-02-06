## NextJS Docs on github
[NextJS Docs](https://github.com/auth0/nextjs-auth0)

## AUTH0_ISSUER_BASE_URL
- got 301 error and was due to base url not having "https"

## Auth0 secret
- use the code
```
node -e "console.log(crypto.randomBytes(32).toString('hex'))"
```

## <a> tags instead of Link for api routes
The Link component is meant to perform client-side transitions between pages. As the links point to an API route and not to a page, login and logout links should be kept as anchor tags.