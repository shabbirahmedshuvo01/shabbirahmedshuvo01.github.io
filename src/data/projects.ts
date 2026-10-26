import { ProjectItem } from "@/types";

export const PROJECTS: ProjectItem[] = [
  {
    id: "underground-arena",
    title: "Underground Arena",
    subtitle: "Real-Time Esports Tournament Platform",
    description:
      "Real-time esports tournament platform featuring WebSocket-driven bracket state synchronization across concurrent participants without manual page reloads.",
    role: "Full-Stack Engineer & Architect",
    metrics: "Sub-50ms bracket sync, concurrent live tournament management",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "WebSockets",
      "MongoDB",
    ],
    architectureHighlights: [
      "WebSocket event orchestration for real-time match progression and tournament bracket broadcast.",
      "Optimistic UI updates with instant state reflection across client views.",
      "Granular role-based permissions separating tournament organizers, referees, and competitors.",
      "High-throughput MongoDB aggregation pipelines for leaderboard computation.",
    ],
    liveUrl: "https://underground-arena.org",
    isFeatured: true,
  },
  {
    id: "activequest",
    title: "ActiveQuest",
    subtitle: "Class Discovery & Booking Ecosystem",
    description:
      "High-performance class discovery and booking platform featuring multi-parameter filtering, recurring schedule management, role-based dashboards, and a 7-day token-expiring trial funnel.",
    role: "Lead Frontend Engineer",
    metrics: "Complete booking lifecycle, dynamic scheduling & trial funnel conversion",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST APIs",
      "Google Tag Manager",
    ],
    architectureHighlights: [
      "Deeply filtered search architecture handling complex calendar schedules and geo-availability.",
      "Token-expiring 7-day customer acquisition funnel with automated session recovery.",
      "Multi-tenant role-based dashboards for instructors, studio operators, and end consumers.",
      "Integrated Google Tag Manager data-layer telemetry for conversion funnel attribution.",
    ],
    liveUrl: "https://activequest.co.za",
    isFeatured: true,
  },
  {
    id: "dev-utils-pocs",
    title: "Dev-Utils & Architecture POCs",
    subtitle: "Modular TypeScript Utility & Systems Toolkit",
    description:
      "Modular collection of reusable TypeScript utility libraries and architectural patterns for high-throughput frontend state and API consumption.",
    role: "Open Source Creator",
    metrics: "Zero-dependency utilities, strict type safety & reusable hooks",
    technologies: ["TypeScript", "Node.js", "Tailwind CSS"],
    architectureHighlights: [
      "Type-safe HTTP interceptor templates and response normalization utilities.",
      "Custom React hooks for scroll telemetry, clipboard handling, and layout measurement.",
      "Reusable algorithmic data formatters and validation schemas for enterprise form engines.",
    ],
    githubUrl: "https://github.com/shabbirahmedshuvo01/dev-utils",
    isFeatured: false,
  },
];
