import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages-frontend",
    title: "Languages & Frontend",
    description: "Modern typed frontend engineering, SSR/SSG architectures, and responsive design systems.",
    iconName: "layout",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js (App Router, SSR)",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: "state-data-layer",
    title: "State & Data Layer",
    description: "Predictable state orchestration, client-side caching, and resilient API communication pipelines.",
    iconName: "layers",
    skills: [
      "Redux Toolkit",
      "RTK Query",
      "TanStack Query",
      "Axios Interceptors",
      "Context API",
      "REST APIs",
    ],
  },
  {
    id: "backend-auth",
    title: "Backend & Auth",
    description: "Scalable backend APIs, real-time bi-directional protocols, and multi-tenant security.",
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
    id: "databases-devops",
    title: "Databases & DevOps",
    description: "Cloud database persistence, payment gateways, telemetry tracking, and continuous server deployments.",
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
