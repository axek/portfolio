import type { Project } from "@/data/projects";

export const projectsEn: Project[] = [
  {
    slug: "stormy",
    title: "Stormy",
    tagline: "AI-powered passenger care when disruption hits.",
    summary:
      "End-to-end brand, product design, and marketing site for an airline disruption platform — from logo and brand book to stormy.chat.",
    cover: {
      src: "/projects/stormy/bg-2.png",
      alt: "Stormy brand background with gradient cloud mark",
      width: 1874,
      height: 2649,
    },
    gallery: [
      {
        src: "/projects/stormy/bg-1.png",
        alt: "Stormy brand pattern — variant one",
        width: 1866,
        height: 2641,
      },
      {
        src: "/projects/stormy/bg-2.png",
        alt: "Stormy brand pattern — variant two",
        width: 1874,
        height: 2649,
      },
      {
        src: "/projects/stormy/avatar.png",
        alt: "Stormy mascot avatar",
        width: 1159,
        height: 1160,
      },
    ],
    liveUrl: "https://stormy.chat",
    websiteUrl: "https://stormy.chat",
    brandbookUrl: "/projects/stormy/brandbook.pdf",
    year: "2025",
    role: "Brand, product design & web",
    client: "Roomstorm",
    theme: "stormy",
    youtubeId: "SkMyhUem-mI",
    scope: [
      "Brand identity & logo system",
      "Brand book",
      "Marketing website",
      "Stormy App · passenger agent",
      "Stormy Brain · knowledge base",
    ],
    brandColors: [
      { name: "Storm Red", hex: "#FF2F2E" },
      { name: "Storm Purple", hex: "#3B2468" },
      { name: "Ink", hex: "#121212" },
      { name: "Cloud White", hex: "#FFFFFF" },
    ],
    deliverables: [
      {
        title: "Logo system",
        description:
          "Horizontal, vertical, and icon marks in color, black, and white — built for product UI, print, and airline white-label contexts.",
      },
      {
        title: "Brand book",
        description:
          "Full guidelines covering the gradient cloud mark, typography, color, backgrounds, and application rules across touchpoints.",
      },
      {
        title: "Marketing website",
        description:
          "stormy.chat — positioning, product narrative, and demo funnel for airline decision-makers, aligned with the live product story.",
      },
      {
        title: "Stormy App",
        description:
          "app.stormy.chat — the passenger-facing agent that runs branded conversations at scale during irregular operations.",
      },
      {
        title: "Stormy Brain",
        description:
          "brain.stormy.chat — the knowledge base behind the agent: policies, entitlements, playbooks, and approved answers.",
      },
    ],
    overview: [
      "Stormy is an AI-powered passenger care platform for airlines. When disruption hits, passengers need clear answers fast — and gate agents cannot be everywhere at once. Stormy handles conversations at scale, in the airline’s brand voice, so teams can focus on the operation.",
      "I led the full creative stack: naming alignment, logo and visual identity, brand book, marketing site, and product design for Stormy App and Stormy Brain. The identity centers on a gradient cloud mark — storm energy moving from vivid red into deep purple — paired with calm, confident typography for high-stress travel moments.",
      "The platform splits cleanly into two layers: Brain holds what the airline knows; App delivers it to passengers in conversation. Together they form a white-label system — the airline’s brand on the surface, Stormy doing the heavy lifting behind the scenes.",
    ],
    highlights: [
      "Diamond gradient cloud mark as the core brand asset",
      "Complete logo suite: horizontal, vertical, and icon variants",
      "Brand book documenting color, marks, and applications",
      "Stormy App — live passenger agent at app.stormy.chat",
      "Stormy Brain — knowledge base at brain.stormy.chat",
      "Marketing site at stormy.chat with demo-led conversion flow",
      "Built on Roomstorm’s decade of airline disruption operations",
    ],
  },
  {
    slug: "actum",
    title: "Actum",
    tagline: "Platform for building, orchestrating, and shipping AI agents.",
    summary:
      "Core product design and development for Actum — a no-code studio for AI agents, workflows, and orchestration. Built in Cursor.",
    cover: {
      src: "/projects/actum/cover.svg",
      alt: "Actum brand cover with indigo gradient and wordmark",
      width: 1200,
      height: 750,
    },
    gallery: [],
    liveUrl: "https://glmvp.vercel.app/",
    websiteUrl: "https://actum.cx/",
    year: "2025",
    role: "Product design & development",
    client: "Actum",
    theme: "actum",
    scope: [
      "Agent studio UX",
      "Workflow builder",
      "Orchestration layer",
      "Actum design system",
      "Multi-project workspace",
    ],
    brandColors: [
      { name: "Indigo", hex: "#6366f1" },
      { name: "Violet", hex: "#8b5cf6" },
      { name: "Lab Dark", hex: "#12121a" },
      { name: "Foreground", hex: "#eaeaf0" },
    ],
    deliverables: [
      {
        title: "Project studio",
        description:
          "Home for every agent project — create, import, browse AI agents, workflows, and orchestration demos from a unified library.",
      },
      {
        title: "AI Agent builder",
        description:
          "Configure conversational agents for support, sales, medical, voice, and custom domains — with publishing and version control.",
      },
      {
        title: "Workflow engine",
        description:
          "Multi-step automations with routing rules: lead scoring, document processing, HR flows, and customer journey mapping.",
      },
      {
        title: "Orchestration",
        description:
          "Combine workflow bots and LLM agents in one project — shared publish pipeline, error states, and production-ready UX.",
      },
      {
        title: "Actum design system",
        description:
          "Dark R&D aesthetic shared with actum.cx and sibling products — tokens, typography, and components for the whole ecosystem.",
      },
    ],
    overview: [
      "Actum is an international R&D laboratory in conversational and agentic AI. Beyond client case studies, the company needed a proprietary platform where teams could build, test, and ship AI agents at scale — SaaS, private cloud, or on-prem.",
      "I designed and built the core agent platform: a project studio where users create AI agents, structured workflows, and orchestration projects that combine both. The demo environment hosts dozens of sample projects — from customer support and medical assistants to lead scoring and document automation.",
      "The product was developed in Cursor end-to-end — UX, UI system, and front-end implementation. Visual language aligns with actum.cx: dark surfaces, indigo–violet gradients, and typography tuned for long studio sessions.",
    ],
    highlights: [
      "Unified studio for agents, workflows, and orchestration",
      "Project library with create, import, and publish flows",
      "Sample deployments: support, sales, medical, voice, HR",
      "Orchestration mode combining FSM workflows with LLM agents",
      "Actum design system — indigo/violet on lab-dark surfaces",
      "Sibling to actum.cx brand and enterprise AI case studies",
      "Built and iterated in Cursor",
    ],
  },
  {
    slug: "solant",
    title: "Solant",
    tagline: "Executive memory layer — clarity in acts.",
    summary:
      "Demo prototype for Solant: a conversational CEO copilot with inbox, finance, CRM, and persistent memory. Built in Cursor with Expo.",
    cover: {
      src: "/projects/solant/cover.svg",
      alt: "Solant amber gradient cover",
      width: 1200,
      height: 750,
    },
    gallery: [],
    liveUrl: "https://solant-chi.vercel.app/",
    year: "2025",
    role: "Product design & prototype development",
    client: "Solant",
    theme: "solant",
    badge: "Demo prototype",
    scope: [
      "Chat-first UX",
      "Rich inline cards",
      "Inbox & reply drafts",
      "Finance & CRM flows",
      "Memory layer",
      "Expo · React Native Web",
    ],
    brandColors: [
      { name: "Amber", hex: "#E8821E" },
      { name: "Amber Bright", hex: "#F5A623" },
      { name: "Canvas", hex: "#F7F5F1" },
      { name: "Ink", hex: "#1B1714" },
    ],
    deliverables: [
      {
        title: "Conversational shell",
        description:
          "Mobile-first chat with collapsing amber hero, suggestion chips, and a composer that grows to five lines — built with React Native Web.",
      },
      {
        title: "Rich card system",
        description:
          "Inline inbox, draft reply, finance report, CRM staffing, and memory timeline cards — interactive inside the thread.",
      },
      {
        title: "Scripted agent flows",
        description:
          "Intent resolution from natural language and quick chips; typing indicators and staged responses for a believable demo.",
      },
      {
        title: "Solant visual language",
        description:
          "Starburst mark, warm cream canvas, and “sunlight through blinds” gradient — aligned with the Solant brand direction.",
      },
    ],
    overview: [
      "Solant is a concept for an executive memory layer: an AI that holds context while the CEO is away and surfaces what matters in conversation — not another dashboard.",
      "This is a demo prototype built for the Solant brand. The scenario follows Daniel, CEO of Vela: triage overnight email, skim weekly finance, staff the Orion launch, and recall deal context on Acme — all through chat with rich cards you can tap and approve.",
      "I designed and built the prototype end-to-end in Cursor — UX, visual system, scripted flows, and deployment to Vercel. Every interaction is clickable: draft replies, approve sends, assign team members from CRM cards.",
    ],
    highlights: [
      "Demo prototype for Solant — not production software",
      "Chat UI with amber hero and starburst brand mark",
      "Inbox triage with draft-and-approve reply flow",
      "Weekly finance card with metrics and sparkline",
      "CRM staffing with one-tap assignment",
      "Persistent memory layer on deals and decisions",
      "Deployed at solant-chi.vercel.app",
      "Built with Expo + React Native Web in Cursor",
    ],
  },
  {
    slug: "feed",
    title: "Feed",
    tagline: "Volunteer management and meal operations for Insomnia Festival.",
    summary:
      "Admin panel and field scanner for thousands of volunteers — arrivals, feeding, QR check-in, and logistics. React + Refine + Django monorepo.",
    cover: {
      src: "/projects/feed/cover.svg",
      alt: "Feed — dark navy Insomnia festival cover",
      width: 1200,
      height: 750,
    },
    gallery: [],
    liveUrl: "https://feedapp-dev.insomniafest.ru/",
    year: "2024–2025",
    role: "Frontend development & UX",
    client: "Insomnia Festival",
    theme: "feed",
    showcase: [
      {
        title: "Volunteer table with filters",
        description:
          "Composable filters for directions, arrival status, feeding dates, and transport — with column picker, export, and 1,200+ volunteers in one view.",
        image: {
          src: "/projects/feed/volunteers-table.png",
          alt: "Feed admin — volunteer list with filter panel and status badges",
          width: 1440,
          height: 900,
        },
      },
      {
        title: "Volunteer card & feeding calendar",
        description:
          "Profile card ties arrivals to an interactive summer feeding calendar — kitchen, diet flags, and paid/free dates in one place.",
        image: {
          src: "/projects/feed/volunteer-card-calendar.png",
          alt: "Feed admin — volunteer edit form with arrival dates and feeding calendar",
          width: 1440,
          height: 900,
        },
      },
    ],
    scope: [
      "Volunteer admin",
      "Feeding calendar",
      "QR scanner app",
      "Feed transactions",
      "Group badges & storage",
      "Refine + Ant Design",
    ],
    brandColors: [
      { name: "Midnight", hex: "#041428" },
      { name: "Deep Blue", hex: "#0a2a4a" },
      { name: "Canvas", hex: "#ffffff" },
      { name: "Ant Primary", hex: "#1677ff" },
    ],
    deliverables: [
      {
        title: "Volunteer card UX",
        description:
          "Multi-section volunteer profile: arrivals, interactive feeding calendar (free / festival / paid), badges, HR fields, and mobile-responsive layouts.",
      },
      {
        title: "Mass operations",
        description:
          "Bulk edit flows, supervisor assignments, group badges, and role-based ACL across coordinator roles.",
      },
      {
        title: "Feed transactions",
        description:
          "Meal log views with anomaly detection modal, filters, and Excel export for kitchen operations reporting.",
      },
      {
        title: "Scanner companion",
        description:
          "Separate PWA for on-field QR meal check-in — pairs with the admin system for real-time volunteer feeding.",
      },
    ],
    overview: [
      "Feed is the operational backbone of Insomnia Festival’s volunteer program: who is on site, what they eat, when they arrive, and how kitchens log every meal. Two apps share one API — an admin for coordinators and a scanner for the field.",
      "The admin is built with React, Refine, and Ant Design on top of a Django backend. Volunteers get a rich card UI with an interactive summer feeding calendar, arrival statuses, QR badges, and fine-grained permissions. Transactions, storage, statistics, and sync round out festival-scale operations.",
      "I contributed frontend development and UX across the monorepo — volunteer flows, mobile layouts, feeding calendar interactions, and e2e-testable UI patterns — working in Cursor alongside the Insomnia-IT team.",
    ],
    highlights: [
      "Monorepo: admin + scanner + Django API",
      "Volunteer lifecycle from arrival to meal logging",
      "Interactive feeding calendar with drag-to-paint dates",
      "QR login and badge-based field scanner",
      "Feed transaction anomalies and exports",
      "Role-based access for festival coordinators",
      "Playwright regression test suite",
      "Stage: feedapp-dev.insomniafest.ru",
    ],
  },
];
