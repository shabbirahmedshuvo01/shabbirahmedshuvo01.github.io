import { ProfileData } from "@/types";

export const PROFILE_DATA: ProfileData = {
  name: "Shabbir Ahmed Shuvo",
  title: "Full-Stack Developer",
  eyebrow: "IMMEDIATE JOINER • OPEN TO FULL-STACK, FRONTEND & BACKEND ROLES",
  headline: "Full-Stack Developer building reliable web apps with React, Next.js, and Node.js.",
  subheadline:
    "I build clean, responsive frontends and resilient backend APIs. With over 2 years of commercial experience, I've delivered 9+ web apps and client platforms from Figma design to production deployment.",
  about:
    "I'm a full-stack developer who genuinely enjoys turning ideas and Figma wireframes into polished, production-ready web products. On the frontend, I focus on clean component structure, responsive UI with Tailwind CSS, and snappy user experiences using React and Next.js (App Router). On the backend, I write maintainable Node.js and Express services with JWT authentication, role-based permissions, and MongoDB databases. I've also integrated payment gateways like Stripe and SSLCommerz, wired up telemetry with Google Tag Manager, and set up Linux servers with PM2 and Nginx reverse proxies to keep apps running smoothly.",
  location: "Dhaka, Bangladesh",
  email: "sabbirshuvo006@gmail.com",
  phone: "+880 1762-583535",
  resumeUrl: "/Shabbir_Ahmed_Shuvo_Resume.pdf",
  githubUrl: "https://github.com/shabbirahmedshuvo01",
  linkedinUrl: "https://linkedin.com/in/shabbir-ahmed-shuvo",
  metrics: [
    {
      value: "9+",
      label: "Client & Production Apps Delivered",
      detail: "Shipped to production",
    },
    {
      value: "2+ Years",
      label: "Commercial Full-Stack Experience",
      detail: "Client and team delivery",
    },
    {
      value: "Full-Stack",
      label: "Next.js, TypeScript & Node.js",
      detail: "Core technical stack",
    },
  ],
};

export const ABOUT_PILLARS = [
  {
    title: "Frontend Architecture",
    description:
      "Building accessible, responsive user interfaces with Next.js (App Router), React, and Tailwind CSS faithfully matching Figma designs.",
    iconName: "layout",
  },
  {
    title: "State & Data Layer",
    description:
      "Managing client state and caching with Redux Toolkit and RTK Query to eliminate unnecessary requests and keep screens fast.",
    iconName: "database",
  },
  {
    title: "Backend & Security",
    description:
      "Writing secure RESTful APIs in Node.js and Express with JWT authentication, role-based access control, and WebSocket events.",
    iconName: "shield",
  },
  {
    title: "DevOps & Deployments",
    description:
      "Deploying and maintaining applications across Vercel, Netlify, and Linux VPS environments configured with Nginx and PM2.",
    iconName: "cloud",
  },
];
