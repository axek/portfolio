"use client";

import { notFound } from "next/navigation";
import { MoreProjects } from "@/components/MoreProjects";
import { ActumCaseStudy } from "@/components/projects/ActumCaseStudy";
import { FeedCaseStudy } from "@/components/projects/FeedCaseStudy";
import { SolantCaseStudy } from "@/components/projects/SolantCaseStudy";
import { StormyCaseStudy } from "@/components/projects/StormyCaseStudy";
import { getProjectBySlug } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

type Props = {
  slug: string;
};

function DefaultCaseStudy({
  project,
}: {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>;
}) {
  return (
    <article className="flex-1">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-sm text-zinc-500">
          {project.year} · {project.role}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          {project.tagline}
        </p>
      </div>
    </article>
  );
}

export function ProjectPageClient({ slug }: Props) {
  const { locale } = useLanguage();
  const project = getProjectBySlug(slug, locale);

  if (!project) {
    notFound();
  }

  const more = <MoreProjects currentSlug={slug} />;

  if (project.theme === "stormy") {
    return (
      <>
        <StormyCaseStudy project={project} />
        {more}
      </>
    );
  }

  if (project.theme === "actum") {
    return (
      <>
        <ActumCaseStudy project={project} />
        {more}
      </>
    );
  }

  if (project.theme === "solant") {
    return (
      <>
        <SolantCaseStudy project={project} />
        {more}
      </>
    );
  }

  if (project.theme === "feed") {
    return (
      <>
        <FeedCaseStudy project={project} />
        {more}
      </>
    );
  }

  return (
    <>
      <DefaultCaseStudy project={project} />
      {more}
    </>
  );
}
