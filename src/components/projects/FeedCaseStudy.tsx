"use client";

import Image from "next/image";
import Link from "next/link";
import { FeedShowcase } from "@/components/projects/FeedShowcase";
import type { Project } from "@/data/projects";
import { useTranslations } from "@/i18n/use-translations";

type Props = {
  project: Project;
};

export function FeedCaseStudy({ project }: Props) {
  const t = useTranslations();
  const cs = t.caseStudy;

  return (
    <article className="flex-1">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#041428] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 20% 0%, #1a3a5c88 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, #0a2a4a66 0%, transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <Link
            href="/#work"
            className="text-sm text-white/60 underline-offset-4 transition hover:text-white hover:underline"
          >
            {cs.back}
          </Link>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-white/50">
                {project.year} · {project.client}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src="/projects/feed/logo-white.svg"
                  alt="Insomnia Festival"
                  width={56}
                  height={47}
                  className="h-11 w-auto"
                  priority
                />
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {project.title}
                  </h1>
                  <p className="mt-1 text-sm text-white/60">
                    {cs.feed.subtitle}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-xl leading-relaxed text-white/80 sm:text-2xl">
                {project.tagline}
              </p>
              <p className="mt-2 text-sm text-white/50">{project.role}</p>
            </div>
          </div>
        </div>
      </section>

      {project.scope && (
        <section className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto flex max-w-5xl flex-wrap gap-2 px-4 py-5 sm:px-6">
            {project.scope.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {cs.overview}
          </h2>
          <div className="mt-6 space-y-5">
            {project.overview.map((paragraph, i) => (
              <p
                key={`overview-${i}`}
                className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <FeedShowcase items={project.showcase ?? []} />

        {project.deliverables && (
          <section className="mt-20">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              {cs.whatWorkedOn}
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {project.deliverables.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {cs.stack}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {cs.feed.stackProse}
          </p>

          {project.brandColors && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.brandColors.map((color) => (
                <div key={color.hex} className="flex items-center gap-3">
                  <span
                    className="h-10 w-10 shrink-0 rounded-full border border-zinc-200 shadow-sm dark:border-zinc-700"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {color.name}
                    </p>
                    <p className="font-mono text-xs text-zinc-500">
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {cs.highlights}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#041428] dark:bg-white/70" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
