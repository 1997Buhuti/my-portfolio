#!/bin/bash
# CloudFormation deployment script for Next.js portfolio

set -e

# Configuration
STACK_NAME="my-portfolio"
TEMPLATE_FILE="template.yaml"
PARAMETERS_FILE="parameters.json"
REGION="us-east-1"
PROJECT_NAME="my-portfolio"

echo "🚀 Deploying Next.js portfolio to AWS using CloudFormation"
echo "=========================================================="

# Check if stack exists
if aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION >/dev/null 2>&1; then
  echo "📋 Updating existing stack: $STACK_NAME"
  OPERATION="update-stack"
  WAIT_OPERATION="stack-update-complete"
else
  echo "📋 Creating new stack: $STACK_NAME"
  OPERATION="create-stack"
  WAIT_OPERATION="stack-create-complete"
fi

# Create parameters file if it doesn't exist
if [ ! -f "$PARAMETERS_FILE" ]; then
  echo "📝 Creating default parameters file..."
  cat > "$PARAMETERS_FILE" << EOF
[
  {
    "ParameterKey": "ProjectName",
    "ParameterValue": "$PROJECT_NAME"
  }
]
EOF
fi

echo "📦 Deploying CloudFormation stack..."
aws cloudformation $OPERATION \
  --stack-name $STACK_NAME \
  --template-body file://$TEMPLATE_FILE \
  --parameters file://$PARAMETERS_FILE \
  --capabilities CAPABILITY_IAM \
  --region $REGION \
  --tags Key=Project,Value=Portfolio Key=Environment,Value=Production

echo "⏳ Waiting for stack deployment to complete..."
aws cloudformation wait $WAIT_OPERATION \
  --stack-name $STACK_NAME \
  --region $REGION

echo "✅ Stack deployment completed!"

# Get outputs
echo "📋 Stack outputs:"
aws cloudformation describe-stacks \
  --stack-name $STACK_NAME \
  --region $REGION \
  --query "Stacks[0].Outputs" \
  --output table

echo ""
echo "🚀 Next steps:"
echo "1. Build your Next.js project: npm run export"
echo "2. Upload to S3:"
echo "   aws s3 sync ./out s3://\$(aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION --query \"Stacks[0].Outputs[?OutputKey=='S3BucketName'].OutputValue\" --output text) --delete"
echo "3. Your site will be available at:"
echo "   https://\$(aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION --query \"Stacks[0].Outputs[?OutputKey=='CloudFrontDomainName'].OutputValue\" --output text)"
echo ""
echo "🔄 To update CloudFront cache after deployment:"
echo "   aws cloudfront create-invalidation --distribution-id \$(aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION --query \"Stacks[0].Outputs[?OutputKey=='PortfolioDistribution'].OutputValue\" --output text) --paths \"/*\""