import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectPageClient } from "@/components/ProjectPageClient";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug, "en");
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, "en");
  if (!project) {
    notFound();
  }

  return <ProjectPageClient slug={slug} />;
}
