This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the public home page by modifying `app/(site)/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment variables

The admin area (`/admin`) is protected by a single password and a signed session cookie. Both values are read from environment variables:

| Variable | Description |
| --- | --- |
| `ADMIN_PASSWORD` | Password for the admin login. |
| `ADMIN_SESSION_SECRET` | Secret used to sign the session cookie. Use a random string of 32+ characters. |

For local development, put them in `.env.local` (git-ignored):

```bash
ADMIN_PASSWORD=your-password
ADMIN_SESSION_SECRET=a-long-random-string-of-32-or-more-characters
```

To generate a secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```

## Deploy on Vercel

This app needs a server runtime (middleware, server actions and cookies in the admin area), so it is deployed on [Vercel](https://vercel.com) rather than as a static export.

1. Push the repository to GitHub.
2. In Vercel, choose **Add New > Project** and import the repository. Vercel detects Next.js and uses the default build settings (`npm run build`).
3. Under **Environment Variables**, add `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` for the Production environment (and Preview, if you want the admin area to work on preview deployments).
4. Deploy. Later pushes to the production branch redeploy automatically, and other branches get preview URLs.

To deploy from the command line instead:

```bash
npx vercel          # preview deployment
npx vercel --prod   # production deployment
```

A custom domain can be added in the project's **Settings > Domains**.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
