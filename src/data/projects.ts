export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  liveUrl: string;
  year: string;
  role: string;
  overview: string[];
  highlights: string[];
};

const w = 1200;
const h = 750;

export const projects: Project[] = [
  {
    slug: "atlas-notes",
    title: "Atlas Notes",
    tagline: "Capture and organize ideas without friction.",
    summary:
      "A cross-platform notes app focused on speed, offline use, and clean typography.",
    cover: {
      src: "https://picsum.photos/seed/atlas-cover/1200/750",
      alt: "Atlas Notes interface on a laptop",
      width: w,
      height: h,
    },
    gallery: [
      {
        src: "https://picsum.photos/seed/atlas-1/1200/800",
        alt: "Editor view with sidebar",
        width: 1200,
        height: 800,
      },
      {
        src: "https://picsum.photos/seed/atlas-2/1200/800",
        alt: "Search and tags",
        width: 1200,
        height: 800,
      },
    ],
    liveUrl: "https://example.com/atlas-notes",
    year: "2025",
    role: "Product design & frontend",
    overview: [
      "Atlas Notes started as a personal itch: existing tools felt heavy for quick capture but weak for longer writing sessions. The goal was a single surface that stays fast on modest hardware and works when connectivity drops.",
      "We iterated on navigation until three actions—capture, find, and file—were always one gesture away. Sync conflicts are surfaced in plain language so users never lose work silently.",
    ],
    highlights: [
      "Offline-first sync with explicit merge resolution",
      "Keyboard-driven navigation for power users",
      "Theming API for third-party accent packs",
    ],
  },
  {
    slug: "northwind-console",
    title: "Northwind Console",
    tagline: "Operational visibility for small logistics teams.",
    summary:
      "A lightweight dashboard for shipments, exceptions, and carrier performance.",
    cover: {
      src: "https://picsum.photos/seed/northwind-cover/1200/750",
      alt: "Dashboard with charts and shipment table",
      width: w,
      height: h,
    },
    gallery: [
      {
        src: "https://picsum.photos/seed/northwind-1/1200/800",
        alt: "Exception queue",
        width: 1200,
        height: 800,
      },
      {
        src: "https://picsum.photos/seed/northwind-2/1200/800",
        alt: "Carrier comparison",
        width: 1200,
        height: 800,
      },
    ],
    liveUrl: "https://example.com/northwind",
    year: "2024",
    role: "Full-stack & UI",
    overview: [
      "Northwind Console connects warehouse scanners, carrier webhooks, and a single timeline view so ops leads can answer “where is it?” without tab-hopping.",
      "The interface prioritizes exceptions: anything late, damaged, or misrouted bubbles to the top with suggested next steps drawn from playbooks.",
    ],
    highlights: [
      "Webhook ingestion with idempotent replay",
      "Role-based views for warehouse vs. HQ",
      "Exportable incident packets for carriers",
    ],
  },
  {
    slug: "loomline-marketing",
    title: "Loomline Marketing Site",
    tagline: "Launch narrative and conversion for a B2B SaaS rebrand.",
    summary:
      "Marketing site with modular sections, strong typography, and CMS-friendly content.",
    cover: {
      src: "https://picsum.photos/seed/loomline-cover/1200/750",
      alt: "Marketing hero with product screenshot",
      width: w,
      height: h,
    },
    gallery: [
      {
        src: "https://picsum.photos/seed/loomline-1/1200/800",
        alt: "Feature grid section",
        width: 1200,
        height: 800,
      },
      {
        src: "https://picsum.photos/seed/loomline-2/1200/800",
        alt: "Pricing and FAQ",
        width: 1200,
        height: 800,
      },
    ],
    liveUrl: "https://example.com/loomline",
    year: "2024",
    role: "Design systems & Next.js",
    overview: [
      "Loomline’s rebrand needed a site that could ship quickly but stay easy for marketing to extend. Sections are composed from a small set of primitives with strict spacing tokens.",
      "Performance budgets were part of the brief: hero media is responsive, lazy below the fold, and text remains readable if images fail.",
    ],
    highlights: [
      "Composable section library in React",
      "Accessible motion and focus states throughout",
      "Analytics-friendly CTA placement",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
