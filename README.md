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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Deployment to S3 + CloudFront

### Prerequisites
1. AWS CLI installed and configured (`aws configure`)
2. AWS account with permissions for:
   - S3 (Create bucket, upload files)
   - CloudFront (Create distribution)
   - IAM (Create roles/policies if using Lambda@Edge)

### Quick Deployment Steps

#### Option 1: Manual Deployment
```bash
# 1. Build the project
npm run export

# 2. Create S3 bucket (one-time)
aws s3 mb s3://YOUR_BUCKET_NAME

# 3. Upload files
aws s3 sync ./out s3://YOUR_BUCKET_NAME --delete

# 4. Create CloudFront distribution (one-time)
# Use AWS Console or CLI to create distribution pointing to S3 bucket

# 5. Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

#### Option 2: Using the Deployment Script
```bash
# First, edit deploy.config.js with your AWS details
# Then run:
node deploy.js
```

#### Option 3: Infrastructure as Code (Terraform)
```bash
cd infra/terraform
terraform init
terraform plan
terraform apply
```

### Configuration Details

#### 1. Next.js Configuration (`next.config.ts`)
- Enabled `output: "export"` for static export
- Set `images.unoptimized: true` for S3 compatibility
- Removed turbopack for production builds

#### 2. S3 Bucket Setup
- Enable static website hosting:
  ```bash
  aws s3 website s3://YOUR_BUCKET_NAME \
    --index-document index.html \
    --error-document 404.html
  ```
- Set bucket policy for CloudFront access
- Block public access (only allow CloudFront via OAI)

#### 3. CloudFront Configuration
- Origin: S3 bucket
- Behaviors: Custom cache settings
- Error pages: Configured for 404/403
- Security: HTTPS only, security headers via Lambda@Edge

#### 4. Custom Domain (Optional)
1. Get SSL certificate from AWS Certificate Manager
2. Create Route 53 records
3. Update CloudFront distribution with custom domain and certificate

### Important Notes
- Your app uses route groups `(site)` which are compatible with static export
- Client components work fine with static export
- No server-side features (API routes, server components, middleware) will work
- Image optimization is disabled; consider using a CDN service like Imgix

### Testing Locally
```bash
# Test the static export
npm run export
npx serve ./out
```