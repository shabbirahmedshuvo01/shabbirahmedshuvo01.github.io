import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend-architecture",
    title: "Frontend Architecture",
    description: "Component systems, SSR/SSG rendering patterns, and pixel-perfect design system realization.",
    iconName: "layout",
    skills: [
      "Next.js (App Router, SSR, SSG)",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: "state-data-layer",
    title: "State & Data Layer",
    description: "Predictable state machines, intelligent client caching, optimistic UI, and API orchestration.",
    iconName: "layers",
    skills: [
      "Redux Toolkit",
      "RTK Query",
      "TanStack Query",
      "Axios Interceptors",
      "Context API",
      "RESTful APIs",
    ],
  },
  {
    id: "backend-security",
    title: "Backend & Security",
    description: "High-concurrency services, event-driven sockets, JWT token security, and granular permission systems.",
    iconName: "shield",
    skills: [
      "Node.js",
      "Express.js",
      "WebSockets",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
    ],
  },
  {
    id: "databases-devops-tools",
    title: "Databases, DevOps & Tools",
    description: "Cloud database architectures, payment gateway integrations, telemetry, and automated production pipelines.",
    iconName: "database",
    skills: [
      "MongoDB",
      "Firebase",
      "Supabase",
      "Stripe",
      "SSLCommerz",
      "Google Tag Manager",
      "Git",
      "Linux (PM2, Nginx)",
      "Vercel",
      "Netlify",
    ],
  },
];
