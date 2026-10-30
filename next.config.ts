import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML for S3 + CloudFront (incompatible with Cache Components / PPR).
  output: "export",
  trailingSlash: true,
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
