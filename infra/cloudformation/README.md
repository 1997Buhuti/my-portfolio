# CloudFormation Deployment for Next.js Portfolio

## Overview
This CloudFormation template deploys a complete S3 + CloudFront infrastructure for hosting a static Next.js portfolio website.

## Cost Analysis

### **Free Components:**
- ✅ **CloudFormation** - Free AWS service
- ✅ **CloudFormation templates** - Free to use
- ✅ **AWS CLI** - Free tool

### **Paid Components (AWS Resources):**
- **S3 Storage**: ~$0.023/GB per month (portfolio ~0.1GB = $0.0023/month)
- **CloudFront**: 
  - Data transfer: ~$0.085/GB (first 10TB/month)
  - Requests: ~$0.009/10,000 HTTPS requests
  - **Estimated cost**: ~$0.50-2.00/month for low traffic
- **Route 53** (optional): $0.50/month per hosted zone

### **Total Estimated Monthly Cost: $1-3** for low-traffic portfolio

## Deployment Steps

### 1. Prerequisites
```bash
# Install AWS CLI
# Configure AWS credentials
aws configure
```

### 2. Deploy Infrastructure
```bash
cd infra/cloudformation

# Make script executable (Linux/Mac)
chmod +x deploy.sh

# Run deployment
./deploy.sh

# Windows (PowerShell)
powershell -ExecutionPolicy Bypass -File deploy.sh
```

### 3. Deploy Next.js Application
```bash
# Build your Next.js project
npm run export

# Upload to S3 (replace with actual bucket name from outputs)
aws s3 sync ./out s3://[bucket-name-from-outputs] --delete
```

### 4. Invalidate CloudFront Cache
```bash
# Get distribution ID from outputs
aws cloudfront create-invalidation \
  --distribution-id [distribution-id-from-outputs] \
  --paths "/*"
```

## Template Features

### **Infrastructure Created:**
1. **S3 Bucket** - Static website hosting with proper permissions
2. **CloudFront Distribution** - Global CDN with HTTPS
3. **Origin Access Identity** - Secure S3 access
4. **Caching Policies** - Optimized for static sites
5. **Error Handling** - Custom 404 pages

### **Custom Domain Setup (Optional):**
1. **Request SSL Certificate** in AWS Certificate Manager
2. **Create Route 53 Hosted Zone** for your domain
3. **Update parameters** in `parameters.json`:
```json
[
  {
    "ParameterKey": "ProjectName",
    "ParameterValue": "my-portfolio"
  },
  {
    "ParameterKey": "DomainName", 
    "ParameterValue": "portfolio.yourdomain.com"
  },
  {
    "ParameterKey": "CertificateArn",
    "ParameterValue": "arn:aws:acm:us-east-1:123456789012:certificate/xxxxxx"
  }
]
```

## Maintenance

### **Update Stack:**
```bash
./deploy.sh  # Automatically detects create vs update
```

### **Delete Stack:**
```bash
aws cloudformation delete-stack \
  --stack-name my-portfolio \
  --region us-east-1

aws cloudformation wait stack-delete-complete \
  --stack-name my-portfolio \
  --region us-east-1
```

### **Monitor Costs:**
- Use AWS Cost Explorer
- Set up billing alerts
- Enable S3/CloudFront access logs if needed

## Security Best Practices

1. **S3 Bucket** - Private with CloudFront OAI access only
2. **CloudFront** - HTTPS enforcement
3. **No Public Access** - Block all public S3 access
4. **WAF** (optional) - Add Web Application Firewall for additional protection

## Troubleshooting

### **Common Issues:**

1. **Stack Creation Fails**
   - Check IAM permissions
   - Verify region supports all services
   - Ensure bucket name is globally unique

2. **403 Forbidden on S3**
   - Verify CloudFront OAI is properly configured
   - Check bucket policy

3. **Caching Issues**
   - Invalidate CloudFront cache
   - Check cache behavior settings

4. **Custom Domain Not Working**
   - Verify SSL certificate is in us-east-1 region
   - Check Route 53 DNS records
   - Wait for DNS propagation (up to 48 hours)