// Deployment configuration for S3 + CloudFront
const config = {
  // S3 Bucket Name
  bucketName: 'YOUR_BUCKET_NAME',
  
  // CloudFront Distribution ID
  distributionId: 'YOUR_DISTRIBUTION_ID',
  
  // AWS Region
  region: 'us-east-1',
  
  // Build output directory
  buildDir: './out',
  
  // Cache control settings
  cacheControl: {
    html: 'public, max-age=0, must-revalidate',
    static: 'public, max-age=31536000, immutable',
    fonts: 'public, max-age=31536000, immutable',
    images: 'public, max-age=604800, stale-while-revalidate=86400',
  },
  
  // File patterns for different cache settings
  filePatterns: {
    html: ['**/*.html', '**/*.json'],
    static: ['**/*.js', '**/*.css', '**/*.map'],
    fonts: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.eot'],
    images: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.webp', '**/*.svg', '**/*.ico'],
  },
};

module.exports = config;