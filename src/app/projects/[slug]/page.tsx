import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MoreProjects } from "@/components/MoreProjects";
import { ActumCaseStudy } from "@/components/projects/ActumCaseStudy";
import { FeedCaseStudy } from "@/components/projects/FeedCaseStudy";
import { SolantCaseStudy } from "@/components/projects/SolantCaseStudy";
import { StormyCaseStudy } from "@/components/projects/StormyCaseStudy";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

function DefaultCaseStudy({
  project,
}: {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>;
}) {
  return (
    <article className="flex-1">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/#work"
          className="text-sm text-zinc-600 underline-offset-4 hover:text-foreground hover:underline dark:text-zinc-400"
        >
          ← All projects
        </Link>
        <header className="mt-8">
          <p className="text-sm text-zinc-500">
            {project.year} · {project.role}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            {project.tagline}
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            className="w-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Open live product
          </a>
        </div>

        <div className="mt-12 space-y-5">
          {project.overview.map((paragraph, i) => (
            <p
              key={`${project.slug}-overview-${i}`}
              className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <section className="mt-12" aria-labelledby="highlights-heading">
          <h2
            id="highlights-heading"
            className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
          >
            Highlights
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-zinc-700 dark:text-zinc-300">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14" aria-labelledby="gallery-heading">
          <h2
            id="gallery-heading"
            className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
          >
            Gallery
          </h2>
          <div className="mt-6 flex flex-col gap-8">
            {project.gallery.map((img) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <figcaption className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">
                  {img.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  if (project.theme === "stormy") {
    return (
      <>
        <StormyCaseStudy project={project} />
        <MoreProjects currentSlug={slug} />
      </>
    );
  }

  if (project.theme === "actum") {
    return (
      <>
        <ActumCaseStudy project={project} />
        <MoreProjects currentSlug={slug} />
      </>
    );
  }

  if (project.theme === "solant") {
    return (
      <>
        <SolantCaseStudy project={project} />
        <MoreProjects currentSlug={slug} />
      </>
    );
  }

  if (project.theme === "feed") {
    return (
      <>
        <FeedCaseStudy project={project} />
        <MoreProjects currentSlug={slug} />
      </>
    );
  }

  return (
    <>
      <DefaultCaseStudy project={project} />
      <MoreProjects currentSlug={slug} />
    </>
  );
}
