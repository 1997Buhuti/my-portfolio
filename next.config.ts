import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Required for static export to S3
  },
  // Base path for S3/CloudFront deployment if using custom domain
  // basePath: "/my-portfolio",
  // For route groups, ensure proper handling
  skipTrailingSlashRedirect: true,
  // Note: turbopack is not compatible with static export
  // Remove turbopack config for production build
};

export default nextConfig;
