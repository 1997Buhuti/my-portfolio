export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "email" | "medium";
}

export interface PersonalInfo {
  name: string;
  monogram: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  location: string;
  availability: string;
  resumeUrl: string;
  avatarUrl: string;
  socials: SocialLink[];
}

export interface Stat {
  value: string;
  label: string;
  accent: "primary" | "secondary";
}

export interface Competency {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  accent: "primary" | "secondary";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
  accent: "primary" | "secondary";
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export type ProjectAccent = "primary" | "secondary" | "tertiary";

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface TopologyNode {
  index: string;
  title: string;
  detail: string;
}

export interface StackGroup {
  title: string;
  runtime: string;
  items: { label: string; accent?: ProjectAccent }[];
}

export interface CaseStudyFeature {
  id: string;
  title: string;
  icon: "terminal" | "shield" | "webhook";
  body: string;
}

export interface CaseStudy {
  badge: string;
  version: string;
  status: string;
  role: string;
  timeline: string;
  client: string;
  coverImage: string;
  coverCaption: string;
  metrics: ProjectMetric[];
  topology: TopologyNode[];
  telemetry: {
    lighthouse: string;
    ttfb: string;
    cls: string;
    uptime: string;
  };
  stackGroups: StackGroup[];
  problem: string;
  solution: string;
  codeSnippet: {
    filename: string;
    label: string;
    lines: string[];
  };
  outcomes: string[];
  features: CaseStudyFeature[];
  gallery: { src: string; alt: string }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  versionLabel?: string;
  description: string;
  longDescription: string;
  technologies: string[];
  featured: boolean;
  year: string;
  accent: ProjectAccent;
  coverImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  architectureNotes: string;
  caseStudy?: CaseStudy;
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: Stat[];
  about: {
    paragraphs: string[];
    philosophy: string;
    competencies: Competency[];
  };
  experience: Experience[];
  education: Education[];
  projects: Project[];
  contact: {
    heading: string;
    subheading: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Buhuti Manakal",
    monogram: "<B/M>",
    title: "AWS Community Builder & Full-Stack Software Engineer",
    tagline:
      "I engineer scalable production web applications, serverless architectures, and agentic AI automations.",
    summary:
      "Full-stack engineer specializing in Node.js, TypeScript, Angular, and AWS serverless systems. Recent focus includes AI-assisted CRM workflows, agentic automations, and Synthflow AI voice operators that improve operational efficiency.",
    email: "dp.manakal82@gmail.com",
    location: "Sri Lanka · Remote",
    availability: "Open to opportunities & collaborations",
    resumeUrl: "/resume.pdf",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHVLxSGvN9vAdaqAiYeI-7ZcAmrLzjtealSiqLB0KZpfZYkW_NK59Wmzbis3NTTkd4lrh_ak6dcRNOzBwZI_7hjItfEfnI6AMp501btDH7SIPVS5qaeIoDLDVAasOwaHNfR-nggr5aZr8fC8aCwAMMvIiDjIJYLjvqQDYJWUDbJW1rElUxdSCayV3A5t_s5-kt0OXfHKdfyyriApU6ZC9fa47WPaScwPk_J5ajPinuCZA3TPIFOsqp",
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/1997Buhuti",
        icon: "github",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/dpbmanakal",
        icon: "linkedin",
      },
      {
        label: "Email",
        href: "mailto:dp.manakal82@gmail.com",
        icon: "email",
      },
    ],
  },
  stats: [
    { value: "4+", label: "Yrs Experience", accent: "primary" },
    { value: "44k+", label: "Daily Lambda Invokes", accent: "secondary" },
    { value: "AWS", label: "Community Builder", accent: "primary" },
    { value: "18/19", label: "Angular Migration", accent: "secondary" },
  ],
  about: {
    paragraphs: [
      "I am an AWS Community Builder & Full-Stack Software Engineer with over 4 years of experience engineering scalable production web applications, microservices, and serverless architectures. My recent focus has been on AI-assisted CRM workflows, developing agentic automations (Cursor AI/Grok Bot), and integrating AI voice operators (Synthflow AI) to significantly enhance operational efficiency.",
      "I am highly adept at building responsive, declarative UIs using modern frameworks like Angular and React, managing end-to-end database migrations, and configuring automated CI/CD pipelines across diverse cloud environments.",
    ],
    philosophy:
      "Ship production systems that scale under real load — serverless event flows, declarative UIs, and AI automations that remove operational friction.",
    competencies: [
      {
        index: "01 / SERVERLESS",
        title: "AWS Serverless",
        subtitle: "Architecture",
        description:
          "Lambda, API Gateway, SQS, SNS, and EventBridge workflows processing tens of thousands of daily invocations.",
        accent: "primary",
      },
      {
        index: "02 / AI WORKFLOWS",
        title: "Agentic AI",
        subtitle: "Automations",
        description:
          "Cursor AI, custom bugbot CI integrations, and Synthflow AI voice agents wired into CRM via webhooks.",
        accent: "secondary",
      },
      {
        index: "03 / FULL-STACK",
        title: "Angular & Node",
        subtitle: "Product Engineering",
        description:
          "Signal-based Angular UIs, Node.js APIs, hybrid MySQL/MongoDB/Redis data stores, and CI/CD observability.",
        accent: "primary",
      },
    ],
  },
  experience: [
    {
      id: "exp-1",
      company: "Random Software Ltd (BodyShop Booster)",
      role: "Software Engineer",
      location: "Remote",
      startDate: "May 2023",
      endDate: "Present",
      description:
        "Engineering AI-assisted CRM workflows, Synthflow voice integrations, and modular AWS serverless APIs that process 44k+ daily Lambda invocations.",
      highlights: [
        "Engineered AI-assisted CRM workflows utilizing Cursor AI, Kilo, and custom bugbot integrations for CI/CD pipeline automation.",
        "Integrated Synthflow AI voice agents into the CRM via webhooks to orchestrate a fully automated call-answering system.",
        "Architected modular serverless APIs and event-driven workflows using Serverless Framework, AWS Lambda, API Gateway, SQS, SNS, and EventBridge, processing 44k+ daily invocations.",
        "Spearheaded the migration of the core CRM application to Angular 18/19, leveraging standalone components and a reactive Signal-based architecture.",
        "Managed hybrid data stores utilizing MySQL/TypeORM for relational data, MongoDB/Mongoose for documents, and Redis for caching.",
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "Angular 18",
        "AWS Lambda",
        "Serverless",
        "MySQL",
        "MongoDB",
        "Synthflow AI",
      ],
      accent: "primary",
    },
    {
      id: "exp-2",
      company: "Random Software Ltd (BodyShop Booster)",
      role: "Associate Software Engineer",
      location: "Remote",
      startDate: "Oct 2022",
      endDate: "May 2023",
      description:
        "Built Node.js serverless REST APIs and Angular UI components, migrated modules to Angular 16, and established CloudWatch, Sentry, and Mixpanel observability.",
      highlights: [
        "Developed and maintained Node.js serverless REST API endpoints alongside dynamic Angular UI components.",
        "Successfully executed the migration of frontend modules from Angular 15 to 16, resolving deprecations.",
        "Established comprehensive application observability by integrating AWS CloudWatch, Sentry for error tracking, and Mixpanel.",
      ],
      technologies: [
        "Node.js",
        "Angular 16",
        "AWS CloudWatch",
        "Sentry",
        "REST APIs",
      ],
      accent: "secondary",
    },
    {
      id: "exp-3",
      company: "Random Software Ltd",
      role: "Software Engineering Intern",
      location: "Sri Lanka",
      startDate: "Jan 2022",
      endDate: "Oct 2022",
      description:
        "Contributed to full-stack C#/.NET and Angular development, fixing critical bugs and optimizing SQL Server workflows.",
      highlights: [
        "Contributed heavily to full-stack development utilizing C#/.NET, ASP.NET Core, and Angular to fix critical bugs and deploy features.",
        "Assisted in developing and optimizing SQL Server database objects, queries, and integration workflows.",
      ],
      technologies: ["C#", ".NET Core", "Angular", "SQL Server"],
      accent: "primary",
    },
    {
      id: "exp-4",
      company: "Soft Vessel (Pvt) Ltd",
      role: "Industrial Trainee (React)",
      location: "Sri Lanka",
      startDate: "Apr 2021",
      endDate: "Oct 2021",
      description:
        "Completed intensive React training and built an e-commerce app with TypeScript, Redux, and declarative UI patterns.",
      highlights: [
        "Completed an intensive training program focused on React-based web development, TypeScript, and modern frontend practices.",
        "Developed an E-commerce application applying declarative UI concepts using React and Redux for state management.",
      ],
      technologies: ["React", "TypeScript", "Redux", "SCSS", "Bootstrap"],
      accent: "secondary",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "University of Kelaniya, Sri Lanka",
      degree: "BA (Hons)",
      field: "Computer Studies",
      startDate: "2018",
      endDate: "2022",
      details: ["Graduated with a GPA of 3.54/4.00."],
    },
    {
      id: "edu-2",
      institution: "Institute of Java and Software Engineering (IJSE)",
      degree: "CMJD",
      field: "Comprehensive Master Java Developer",
      startDate: "2020",
      endDate: "2021",
      details: [
        "Comprehensive training in Java development and software engineering principles.",
      ],
    },
    {
      id: "cert-1",
      institution: "Amazon Web Services",
      degree: "AWS Community Builder",
      field: "Certified Cloud Practitioner",
      startDate: "2023",
      endDate: "Present",
      details: [
        "Recognized as an AWS Community Builder (2025).",
        "Holds active AWS Certified Cloud Practitioner credential.",
      ],
    },
  ],
  projects: [
    {
      id: "proj-ai-crm",
      slug: "ai-crm-automations",
      title: "AI-Assisted CRM & Voice Workflows",
      category: "Enterprise CRM · Agentic AI",
      description:
        "Agentic AI automations and Synthflow AI voice integrations for enterprise CRM.",
      longDescription:
        "Engineered robust AI-assisted CRM workflows for BodyShop Booster, utilizing Cursor AI, Kilo, and custom bugbot integrations. A major feature included orchestrating a fully automated call-answering system using Synthflow AI voice agents connected via webhooks. The backend runs on a highly scalable, event-driven AWS serverless architecture processing over 44,000 Lambda invocations daily.",
      technologies: [
        "Node.js",
        "TypeScript",
        "AWS Lambda",
        "Synthflow AI",
        "EventBridge",
        "Serverless Framework",
      ],
      featured: true,
      year: "2025",
      accent: "primary",
      coverImage: "/dummy-project-1.jpg",
      liveUrl: "https://example.com/crm-demo",
      githubUrl: "https://github.com/1997Buhuti/dummy-crm-repo",
      architectureNotes:
        "Event-driven Lambda · Synthflow webhooks · SQS/SNS/EventBridge · Serverless Framework",
    },
    {
      id: "proj-react-ecommerce",
      slug: "react-ecommerce-platform",
      title: "React E-Commerce Platform",
      category: "Frontend · Training Capstone",
      description:
        "A declarative, state-managed e-commerce training application.",
      longDescription:
        "A comprehensive e-commerce frontend built to apply declarative UI concepts and rigorous state management techniques. It uses React with Redux for global state, strictly typed with TypeScript, and styled responsively using SCSS and Bootstrap. This project served as the capstone for an intensive industrial training program.",
      technologies: ["React", "Redux", "TypeScript", "SCSS", "Bootstrap"],
      featured: true,
      year: "2021",
      accent: "secondary",
      coverImage: "/dummy-project-2.jpg",
      githubUrl: "https://github.com/1997Buhuti/dummy-ecommerce-repo",
      architectureNotes:
        "Redux global store · Typed React components · SCSS + Bootstrap responsive layout",
    },
  ],
  contact: {
    heading: "Let's build something remarkable.",
    subheading:
      "Whether you need serverless architecture, Angular/React product engineering, or AI-assisted workflow automation, my inbox is open.",
  },
};

export function getProjectBySlug(slug: string): Project | undefined {
  return portfolioData.projects.find((project) => project.slug === slug);
}

export function getNextFeaturedProject(slug: string): Project | undefined {
  const featured = portfolioData.projects.filter((project) => project.featured);
  const index = featured.findIndex((project) => project.slug === slug);
  if (index < 0) return featured[0];
  return featured[(index + 1) % featured.length];
}
