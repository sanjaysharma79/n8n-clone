# N8N-Clone

## Versions

```
node: 22.20.0
create-next-app@15.5.4
shadcn@3.3.1
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## DB Setup

https://www.prisma.io/docs/guides/nextjs

```
npm install prisma tsx --save-dev
npm install @prisma/client
npx prisma init
npx prisma migrate dev --name init
npx prisma studio
```

## tRPC setup

https://trpc.io/docs/client/tanstack-react-query/server-components

```
npm install @trpc/server @trpc/client @trpc/tanstack-react-query @tanstack/react-query@latest zod client-only server-only
```

## Authentication

https://www.better-auth.com/docs/installation

```
npm install better-auth
npx @better-auth/cli generate
```

```
npx prisma migrate reset
npx prisma migrate dev --name better-auth-setup
```

## Background Job

https://www.inngest.com/docs/getting-started/nextjs-quick-start

```
npx prisma migrate dev --name workflows-table
```

```
npm install inngest
npm install -D inngest-cli
```

Start Inngest Dev server locally in one Terminal window and let it run.

```
npm run inngest:dev
```

Now, in Seperate Terminal window, Run the Application

```
npm run dev
```

# AI

https://ai-sdk.dev/

```
npm i ai
npm install @ai-sdk/google
npm install @ai-sdk/openai
npm install @ai-sdk/anthropic
```

# Error Handling - Sentry

https://docs.sentry.io/platforms/javascript/guides/nextjs/

https://docs.sentry.io/platforms/javascript/guides/nextjs/logs/

```
npx @sentry/wizard@latest -i nextjs
```

To test, click on button "Throw Sample Error" on this Link:
http://localhost:3000/sentry-example-page

# Payment Setup - Polar

https://polar.sh/  
https://sandbox.polar.sh/  
https://polar.sh/docs/integrate/sdk/adapters/better-auth

```
npm install @polar-sh/better-auth @polar-sh/sdk
```

.env:  
POLAR_ACCESS_TOKEN=  
POLAR_SUCCESS_URL=http://localhost:3000

Reset the Database:

```
npx prisma migrate reset
```

Re Signup and verify the signed up user exist in App Database and in Polar as well:

```
npx prisma studio
```

Click on "Upgrade to Pro", then use this card details to proceed with Subscription purchase:  
Payment Test Card:  
4242 4242 4242 4242  
Expiry: 05/55 (any date in future)  
Security Code: 555 (any 3 digit number)

Test premium features by going to this link and click the button:  
http://localhost:3000/subscription
