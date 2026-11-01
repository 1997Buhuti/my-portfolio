#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const config = require('./deploy.config');

console.log('🚀 Starting Next.js S3 + CloudFront deployment\n');

// Step 1: Build the project
console.log('📦 Building Next.js project...');
try {
  execSync('npm run export', { stdio: 'inherit' });
  console.log('✅ Build completed successfully\n');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

// Step 2: Check if build output exists
const buildDir = config.buildDir;
if (!fs.existsSync(buildDir)) {
  console.error(`❌ Build directory ${buildDir} not found`);
  process.exit(1);
}

// Step 3: Upload to S3 with proper cache headers
console.log('📤 Uploading to S3...');

// Helper function to get cache control header
function getCacheControl(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  for (const [type, patterns] of Object.entries(config.filePatterns)) {
    for (const pattern of patterns) {
      const regex = new RegExp(pattern.replace('**/*', '.*').replace('*', '[^/]*'));
      if (regex.test(filePath) || filePath.endsWith(ext)) {
        return config.cacheControl[type];
      }
    }
  }
  
  return 'public, max-age=300';
}

// Upload function
function uploadToS3() {
  const awsCommand = `aws s3 sync ${config.buildDir} s3://${config.bucketName} --delete`;
  
  try {
    console.log(`Executing: ${awsCommand}`);
    execSync(awsCommand, { stdio: 'inherit' });
    console.log('✅ S3 upload completed\n');
  } catch (error) {
    console.error('❌ S3 upload failed');
    process.exit(1);
  }
}

uploadToS3();

// Step 4: Invalidate CloudFront cache
console.log('🔄 Invalidating CloudFront cache...');
const invalidationCommand = `aws cloudfront create-invalidation --distribution-id ${config.distributionId} --paths "/*"`;
try {
  execSync(invalidationCommand, { stdio: 'inherit' });
  console.log('✅ CloudFront invalidation completed\n');
} catch (error) {
  console.error('❌ CloudFront invalidation failed');
  process.exit(1);
}

// Step 5: Optional - Enable S3 website hosting
console.log('💡 Optional: To enable S3 static website hosting, run:');
console.log(`aws s3 website s3://${config.bucketName} --index-document index.html --error-document 404.html`);

console.log('\n🎉 Deployment completed successfully!');
console.log(`🌐 Your site should be available at:`);
console.log(`   https://${config.distributionId}.cloudfront.net`);
console.log(`   or your custom domain if configured`);