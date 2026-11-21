import { ProjectItem } from "@/types";

export const PROJECTS: ProjectItem[] = [
  {
    id: "underground-arena",
    title: "Underground Arena",
    subtitle: "Real-Time Esports Tournament Platform",
    description:
      "Full-stack eSports tournament platform featuring dynamic tournament trees, real-time match lobbies, automated bracket progression, and team roster management.",
    role: "Full-Stack Engineer & Architect",
    metrics: "Real-time bracket updates and concurrent tournament lobbies",
    statusBadge: "Live Commercial Platform",
    badgeVariant: "cyan",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "WebSockets",
      "MongoDB",
    ],
    architectureHighlights: [
      "Architected a full-stack eSports tournament platform featuring dynamic tournament trees, real-time match lobbies, automated bracket progression, and team roster management.",
      "Engineered real-time features using WebSockets and Node.js/Express, with a reactive Next.js frontend, Tailwind CSS, and MongoDB data persistence.",
    ],
    liveUrl: "https://underground-arena.org",
    isFeatured: true,
  },
  {
    id: "activequest",
    title: "ActiveQuest",
    subtitle: "Class Discovery & Booking Platform",
    description:
      "Commercial booking and discovery platform featuring multi-parameter search, recurring schedule management, and a 7-day trial booking funnel with session recovery.",
    role: "Lead Frontend Engineer",
    metrics: "End-to-end booking lifecycle, dynamic schedules & trial funnel",
    statusBadge: "Client Production • Case Study",
    badgeVariant: "amber",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST APIs",
      "Google Tag Manager",
    ],
    architectureHighlights: [
      "Engineered a commercial booking and discovery platform with multi-parameter filtering, recurring schedule engines, and a 7-day expiring token trial-booking funnel with session recovery.",
      "Implemented granular RBAC administrative dashboards, dynamic CMS, transactional email notifications, and end-to-end analytics via Google Tag Manager.",
    ],
    isFeatured: true,
    isCaseStudy: true,
    caseStudy: {
      overview:
        "ActiveQuest was engineered as a high-throughput commercial class discovery and fitness studio booking platform for the South African fitness market. It enables consumers to discover, schedule, and book workouts across multiple independent gym studios using a flexible credit model, while providing operators with enterprise administrative portals.",
      roleSummary:
        "As Lead Frontend Engineer, translated comprehensive Figma design systems into pixel-perfect, accessible Next.js (App Router) views, engineered the client data layer and cache invalidation policies using Redux Toolkit and RTK Query, and implemented conversion funnel telemetry with Google Tag Manager.",
      keyArchitectures: [
        {
          title: "Multi-Parameter Class Discovery & Recurring Schedule Engine",
          description:
            "Architected a deep multidimensional filtering system capable of evaluating classes across dynamic calendar recurrence rules, instructor specializations, geo-availability, and studio locations with sub-second client response times.",
        },
        {
          title: "7-Day Expiring Token Trial-Booking Funnel & Session Recovery",
          description:
            "Engineered a high-converting customer acquisition funnel featuring time-bound 7-day trial tokens with automated state hydration, session recovery on page reload, and graceful degradation for expired reservations.",
        },
        {
          title: "Granular Role-Based Access Control (RBAC) & GTM Telemetry",
          description:
            "Implemented multi-tenant role-based access control protecting operator dashboards, instructor portals, and customer schedules. Integrated granular Google Tag Manager data-layer events to track booking friction points and optimize checkout conversion.",
        },
      ],
      engineeringPillars: [
        "Next.js App Router with SSR/SSG caching strategies",
        "Predictable client-side state caching & normalization via RTK Query",
        "End-to-end type-safe API contracts with TypeScript",
        "Responsive, accessible Tailwind CSS layout architecture built strictly to Figma specs",
      ],
      impactMetrics: [
        "Complete automated booking lifecycle from discovery to confirmed reservation",
        "Zero latency state synchronization across recurring schedule views",
        "Enterprise-grade conversion tracking powering marketing attribution",
      ],
    },
  },
  {
    id: "dev-utils-pocs",
    title: "Dev-Utils & Architecture POCs",
    subtitle: "Modular TypeScript Utility Toolkit",
    description:
      "Published, zero-dependency TypeScript utility package on npm providing reusable helper functions for retries, debounce/throttling, date formatting, and data sanitization.",
    role: "Open Source Creator & Maintainer",
    metrics: "v1.0.4 on npm • Zero dependencies • 100% Vitest coverage",
    statusBadge: "Open Source Toolkit",
    badgeVariant: "violet",
    technologies: [
      "TypeScript 5.x",
      "Vitest",
      "Node.js (>=18)",
      "Native ESM",
      "Zero Dependencies",
      "npm Package",
    ],
    architectureHighlights: [
      "Engineered and published reusable utility functions for common full-stack development tasks to streamline codebase setup.",
      "Automated exponential backoff retries, structured error wrappers, and zero-overhead execution primitives.",
      "Query parameter parsers, deep object cleanup, and sensitive data masking.",
      "Typed web storage abstraction layer and timezone-resilient date operations.",
    ],
    githubUrl: "https://github.com/shabbirahmedshuvo01/dev-utils",
    packageName: "@dev_shuvo/dev-utils",
    version: "v1.0.4",
    installCommand: "npm i @dev_shuvo/dev-utils",
    npmUrl: "https://www.npmjs.com/package/@dev_shuvo/dev-utils",
    isFeatured: false,
  },
];
