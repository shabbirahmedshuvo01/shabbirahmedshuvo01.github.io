import { ProfileData } from "@/types";

export const PROFILE_DATA: ProfileData = {
  name: "Shabbir Ahmed Shuvo",
  title: "Full-Stack Software Engineer",
  eyebrow: "AVAILABLE FOR FULL-STACK & FRONTEND ROLES",
  headline: "Building High-Performance Web Applications & Scalable Systems",
  subheadline:
    "Full-Stack Software Engineer specializing in React, Next.js (App Router), TypeScript, and Node.js. Experienced in architecting end-to-end commercial platforms with complex RBAC security, state orchestration via RTK Query, and real-time WebSocket infrastructure.",
  about:
    "I am a Full-Stack Software Engineer with a primary focus on modern frontend architecture and reliable backend APIs. I specialize in turning complex Figma design systems into pixel-perfect, accessible web platforms using Next.js (App Router), TypeScript, and Tailwind CSS. My backend expertise centers around Node.js, Express, and MongoDB, designing secure RESTful services with granular role-based access control (RBAC) and real-time state synchronization.",
  location: "Dhaka, Bangladesh",
  email: "sabbirshuvo006@gmail.com",
  phone: "+88 01762-583535",
  resumeUrl: "/Shabbir_Ahmed_Shuvo_Resume-f.pdf",
  githubUrl: "https://github.com/shabbirahmedshuvo01",
  linkedinUrl: "https://linkedin.com/in/shabbir-ahmed-shuvo",
  metrics: [
    {
      value: "9+",
      label: "Client Platforms & Full-Stack Apps Shipped",
      detail: "Commercial production releases",
    },
    {
      value: "2+",
      label: "Years Commercial Engineering Experience",
      detail: "Industry & commercial delivery",
    },
    {
      value: "100%",
      label: "Production-Tested Web Architectures",
      detail: "Type-safe & resilient builds",
    },
  ],
};

export const ABOUT_PILLARS = [
  {
    title: "Frontend Architecture",
    description:
      "Enterprise Next.js (App Router) implementations, SSR/SSG caching strategies, and accessible, responsive Tailwind CSS layouts built strictly to Figma design systems.",
    iconName: "layout",
  },
  {
    title: "State & Data Layer",
    description:
      "Normalized global state caches using Redux Toolkit and RTK Query, automated cache invalidation, and custom Axios interceptor pipelines.",
    iconName: "database",
  },
  {
    title: "Backend & RBAC Security",
    description:
      "Scalable RESTful microservices in Node.js and Express, JWT token lifecycle management, granular multi-tenant RBAC, and real-time WebSocket synchronization.",
    iconName: "shield",
  },
  {
    title: "DevOps & Cloud Reliability",
    description:
      "Continuous integration, production deployments across Vercel, Netlify, and Linux self-hosted servers with Nginx reverse proxy and PM2 process managers.",
    iconName: "cloud",
  },
];
