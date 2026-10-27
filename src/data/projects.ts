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
      "Enterprise-grade, zero-dependency TypeScript utility toolkit published as @dev_shuvo/dev-utils. Engineered for error resilience, automated retries, high-throughput debounce/throttling, timezone-resilient date operations, query-string pagination, deep object cleanup, typed storage, and data masking.",
    role: "Open Source Creator & Maintainer",
    metrics: "v1.0.4 • Zero runtime dependencies • 100% Vitest coverage • Strict TypeScript ESM",
    technologies: [
      "TypeScript 5.x",
      "Vitest",
      "Node.js (>=18)",
      "Native ESM",
      "Zero Dependencies",
      "npm Package",
    ],
    architectureHighlights: [
      "Resilience & Flow: Automated exponential backoff retries and structured error-handling wrappers.",
      "Performance & Throttling: High-efficiency debounce, throttling, and zero-overhead execution primitives.",
      "Data Sanitization & Security: Query parameter parsers, deep object cleanup, and sensitive data masking.",
      "Storage & Timezones: Typed web storage abstraction layer and timezone-resilient date operations.",
      "Production-Grade Packaging: Full test suite in Vitest, dual exports (ESM/CJS), and tree-shakeable side-effect-free bundle.",
    ],
    githubUrl: "https://github.com/shabbirahmedshuvo01/dev-utils",
    packageName: "@dev_shuvo/dev-utils",
    version: "v1.0.4",
    installCommand: "npm i @dev_shuvo/dev-utils",
    npmUrl: "https://www.npmjs.com/package/@dev_shuvo/dev-utils",
    isFeatured: false,
  },
];
