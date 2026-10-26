export interface SocialLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  location: string;
  availability: string;
  resumeUrl: string;
  socials: SocialLink[];
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

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  featured: boolean;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  architectureNotes: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: {
    paragraphs: string[];
    focusAreas: string[];
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
    name: "Alex Rivera",
    title: "Staff Frontend Engineer",
    tagline:
      "I build resilient, high-performance web systems and intuitive digital experiences.",
    summary:
      "Staff Frontend Engineer specializing in Next.js, TypeScript, and design systems. Previously scaled mission-critical interfaces and component libraries across product orgs.",
    email: "alex@rivera.dev",
    location: "Remote · Pacific Time",
    availability: "Open to advisory & select contracts",
    resumeUrl: "/resume.pdf",
    socials: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Email", href: "mailto:alex@rivera.dev" },
    ],
  },
  about: {
    paragraphs: [
      "I sit at the intersection of engineering precision and product craft. Over the past decade my work has centered on turning fragmented frontends into coherent, high-velocity systems — the kind that make complex workflows feel effortless.",
      "Day to day I focus on React Server Components, edge-friendly rendering, and design-token discipline. I believe latency is a design defect, and that accessibility and performance budgets belong in the same conversation as visual polish.",
      "When I’m not shipping product, I mentor engineers, contribute to open-source UI tooling, and write about rendering performance and streaming layout patterns.",
    ],
    focusAreas: [
      "Distributed frontend architecture",
      "Design systems & tokens",
      "Core Web Vitals & observability",
      "Accessible interaction design",
    ],
  },
  experience: [
    {
      id: "exp-vercel",
      company: "Northstar Labs",
      role: "Staff Frontend Engineer",
      location: "Remote",
      startDate: "2022",
      endDate: "Present",
      description:
        "Lead frontend architecture for a real-time observability platform serving 1M+ daily active workspaces.",
      highlights: [
        "Designed edge-rendered streaming layouts that cut TTFB by 42%.",
        "Established org-wide bundle analysis and regression gates.",
        "Mentored a team of eight engineers across design-system and product squads.",
      ],
      technologies: [
        "Next.js",
        "React Server Components",
        "TypeScript",
        "Tailwind CSS",
        "GraphQL",
      ],
    },
    {
      id: "exp-stripe",
      company: "FinScale",
      role: "Senior Frontend Engineer",
      location: "San Francisco, CA",
      startDate: "2020",
      endDate: "2022",
      description:
        "Owned modular checkout surfaces and the shared component platform used across international payment flows.",
      highlights: [
        "Shipped a Figma-to-code token pipeline that lifted mobile conversion by 14%.",
        "Authored 90+ battle-tested primitives with visual regression coverage.",
        "Partnered with design to certify WCAG AA across critical checkout paths.",
      ],
      technologies: ["React", "Radix UI", "Storybook", "Jest", "Webpack"],
    },
    {
      id: "exp-agency",
      company: "Lumen Digital",
      role: "Frontend Engineer",
      location: "Austin, TX",
      startDate: "2018",
      endDate: "2020",
      description:
        "Built marketing sites and product UIs for Series A–C startups across fintech and developer tools.",
      highlights: [
        "Delivered 20+ production launches with consistent design-system reuse.",
        "Introduced component-driven development and shared Storybook docs.",
      ],
      technologies: ["React", "Next.js", "SCSS", "Contentful", "Netlify"],
    },
    {
      id: "exp-intern",
      company: "CloudNest",
      role: "Software Engineering Intern",
      location: "Seattle, WA",
      startDate: "2017",
      endDate: "2017",
      description:
        "Contributed to the developer console and internal design-system documentation site.",
      highlights: [
        "Implemented accessible table and filter patterns used by three product teams.",
      ],
      technologies: ["JavaScript", "React", "CSS Modules"],
    },
  ],
  education: [
    {
      id: "edu-berkeley",
      institution: "University of California, Berkeley",
      degree: "B.S.",
      field: "Computer Science",
      startDate: "2014",
      endDate: "2018",
      details: [
        "Magna Cum Laude",
        "Concentration in Systems & Human-Computer Interaction",
        "Dean's Honor List",
      ],
    },
    {
      id: "edu-hackreactor",
      institution: "Hack Reactor",
      degree: "Certificate",
      field: "Full-Stack Engineering",
      startDate: "2016",
      endDate: "2016",
      details: ["Immersive software engineering fellowship"],
    },
  ],
  projects: [
    {
      id: "proj-hyperscale",
      slug: "hyperscale-cms",
      title: "HyperScale CMS",
      description:
        "Ultra-fast headless content engine with live previews and collaborative block editing.",
      longDescription:
        "HyperScale CMS is a headless content platform built for editorial teams that need instantaneous previews and schema-safe migrations. It streams draft updates over the edge, keeps a collaborative TipTap block tree in sync, and ships a typed content SDK for Next.js App Router sites.",
      technologies: [
        "Next.js",
        "TipTap",
        "Shadcn UI",
        "PostgreSQL",
        "Edge Functions",
        "TypeScript",
      ],
      featured: true,
      year: "2025",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      architectureNotes:
        "Edge-cached draft previews · Collaborative Yjs document store · Schema migration worker · Typed content SDK",
    },
    {
      id: "proj-pulse",
      slug: "pulse-observability",
      title: "Pulse Observability",
      description:
        "High-throughput telemetry UI rendering 250k+ live trace points per second.",
      longDescription:
        "Pulse visualizes infrastructure traces at extreme scale. A custom WebGL canvas streams WebSocket batches into GPU buffers, while React owns the chrome, filters, and incident workflows around the canvas.",
      technologies: ["React", "Three.js", "WebSockets", "Tailwind", "Zustand"],
      featured: true,
      year: "2024",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      architectureNotes:
        "WebGL particle pipeline · Binary WS framing · Worker-thread decode · Incident timeline overlays",
    },
    {
      id: "proj-omni",
      slug: "omnidesign-system",
      title: "OmniDesign System",
      description:
        "Multi-brand accessible design system with automated Figma-to-code token export.",
      longDescription:
        "OmniDesign synchronizes Figma variables into CSS custom properties and Tailwind presets, then publishes a Radix-based component library consumed by 40+ internal apps with WCAG AAA targets on critical flows.",
      technologies: [
        "TypeScript",
        "Radix Primitives",
        "Tailwind",
        "Rollup",
        "Storybook",
      ],
      featured: true,
      year: "2023",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      architectureNotes:
        "Token pipeline · Multi-brand themes · Visual regression CI · Accessibility lint gates",
    },
    {
      id: "proj-atlas",
      slug: "atlas-docs",
      title: "Atlas Docs",
      description:
        "Product documentation platform with MDX, versioning, and search-as-you-type.",
      longDescription:
        "Atlas Docs powers versioned product documentation with MDX content collections, Algolia-backed search, and a themable shell that matches the OmniDesign system.",
      technologies: ["Next.js", "MDX", "Algolia", "Tailwind", "Vercel"],
      featured: false,
      year: "2023",
      githubUrl: "https://github.com",
      architectureNotes:
        "Contentlayer collections · Incremental static regen · Faceted search · Version switcher",
    },
    {
      id: "proj-signal",
      slug: "signal-board",
      title: "Signal Board",
      description:
        "Lightweight status and incident board for on-call teams with Slack-native workflows.",
      longDescription:
        "Signal Board gives on-call engineers a calm status surface: service health cards, incident timelines, and Slack slash-command hooks — all static-friendly with optional live SSE updates.",
      technologies: ["Next.js", "SSE", "Slack API", "Zod", "SQLite"],
      featured: false,
      year: "2022",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      architectureNotes:
        "SSE health feed · Slack command bridge · SQLite incident store · Static fallback shell",
    },
    {
      id: "proj-canvas",
      slug: "canvas-kit",
      title: "Canvas Kit",
      description:
        "Composable diagram primitives for architecture docs embedded in MDX.",
      longDescription:
        "Canvas Kit provides React primitives for embedding architecture diagrams in documentation — nodes, edges, and swimlanes with keyboard-accessible focus management.",
      technologies: ["React", "SVG", "Framer Motion", "TypeScript"],
      featured: false,
      year: "2022",
      githubUrl: "https://github.com",
      architectureNotes:
        "Declarative node graph · Focus rings · Motion-safe transitions · MDX shortcodes",
    },
  ],
  contact: {
    heading: "Get in touch",
    subheading:
      "Whether you need staff-level frontend leadership, a design-system engagement, or a technical advisory conversation — my inbox is open.",
  },
};
