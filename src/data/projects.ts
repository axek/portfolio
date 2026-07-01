import type { Locale } from "@/i18n/locale";
import { projectsEn } from "@/data/projects/en";
import { projectsRu } from "@/data/projects/ru";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BrandColor = {
  name: string;
  hex: string;
};

export type ProjectDeliverable = {
  title: string;
  description: string;
};

export type ProjectShowcaseItem = {
  title: string;
  description: string;
  image: ProjectImage;
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
  client?: string;
  websiteUrl?: string;
  brandbookUrl?: string;
  deliverables?: ProjectDeliverable[];
  brandColors?: BrandColor[];
  scope?: string[];
  theme?: "stormy" | "actum" | "solant" | "feed" | "default";
  youtubeId?: string;
  badge?: string;
  showcase?: ProjectShowcaseItem[];
};

export function getProjects(locale: Locale): Project[] {
  return locale === "ru" ? projectsRu : projectsEn;
}

export function getProjectBySlug(slug: string, locale: Locale): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsEn.map((p) => p.slug);
}
