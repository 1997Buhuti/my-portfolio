export interface Article {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  tags: string[];
}

// Latest Medium stories. Cards link straight to Medium.
export const articles: Article[] = [
  {
    id: "durable-functions-api-gateway",
    title: "Run Long Serverless Workflows Behind an API Gateway With Durable Functions",
    url: "https://medium.com/@dp.manakal82/run-long-serverless-workflows-behind-an-api-gateway-with-durable-functions-cb536f4eff98",
    publishedAt: "2026-03-30",
    tags: ["AWS Lambda", "API Gateway", "Durable Functions"],
  },
  {
    id: "cdk-part-3",
    title: "Getting Started with AWS CDK: Part 3, Multiple Stacks and Resource Sharing",
    url: "https://medium.com/@dp.manakal82/getting-started-with-aws-cdk-part-3-multiple-stacks-and-resource-sharing-f47f24ef7fbe",
    publishedAt: "2026-01-03",
    tags: ["AWS CDK", "Lambda", "S3"],
  },
  {
    id: "cdk-part-2",
    title: "Getting Started With AWS CDK: Part 2, Lambda, Multiple Stacks, and Resource Sharing",
    url: "https://medium.com/@dp.manakal82/getting-started-with-aws-cdk-part-2-lambda-multiple-stacks-and-resource-sharing-31e4197bf360",
    publishedAt: "2025-12-30",
    tags: ["AWS CDK", "Lambda", "TypeScript"],
  },
  {
    id: "cdk-intro",
    title: "Getting Started with AWS CDK: Infrastructure as Code for Developers",
    url: "https://aws.plainenglish.io/getting-started-with-aws-cdk-infrastructure-as-code-for-developers-bdd8a9355710",
    publishedAt: "2025-08-12",
    tags: ["AWS CDK", "Infrastructure as Code", "TypeScript"],
  },
  {
    id: "s3-security-part-2",
    title: "Securing Your AWS S3 Buckets: A Hands-On Guide, Part 2",
    url: "https://medium.com/@dp.manakal82/securing-your-aws-s3-buckets-a-hands-on-guide-part-2-6e2bdec6b787",
    publishedAt: "2024-10-27",
    tags: ["S3", "Cloud Security"],
  },
  {
    id: "angular-dynamic-components",
    title: "Dynamic Components in Angular: Using the createComponent API",
    url: "https://medium.com/@dp.manakal82/dynamic-components-in-angular-using-createcomponent-api-68feec278446",
    publishedAt: "2024-10-01",
    tags: ["Angular", "Design Patterns"],
  },
];
