# N8N-Clone

## Versions

```
node: v20.10.0
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
