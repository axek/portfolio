"use client";

import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { SolantDemo } from "@/components/projects/SolantDemo";
import type { Project } from "@/data/projects";
import { useTranslations } from "@/i18n/use-translations";

type Props = {
  project: Project;
};

export function SolantCaseStudy({ project }: Props) {
  const t = useTranslations();
  const cs = t.caseStudy;

  return (
    <article className="flex-1">
      <section className="relative overflow-hidden border-b border-[#E0D8CB] bg-[#F7F5F1] text-[#1B1714] dark:border-zinc-800 dark:bg-[#1B1714] dark:text-[#F7F5F1]">
        <div
          className="pointer-events-none absolute inset-0 opacity-90 dark:opacity-70"
          style={{
            background:
              "linear-gradient(135deg, #F5A623 0%, #E8821E 45%, #D26F16 100%)",
          }}
        />
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="pointer-events-none absolute left-[-30%] right-[-30%] h-4 bg-white"
            style={{
              top: `${18 + i * 8}%`,
              opacity: 0.14 - i * 0.02,
              transform: "rotate(-32deg)",
            }}
          />
        ))}

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <Link
            href="/#work"
            className="text-sm text-white/70 underline-offset-4 transition hover:text-white hover:underline"
          >
            {cs.back}
          </Link>

          {project.badge && (
            <span className="mt-8 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              {project.badge}
            </span>
          )}

          <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-white/75">
                {project.year} · {project.client}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/projects/solant/starburst-white.svg"
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9"
                  aria-hidden
                />
                <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Solant
                </span>
              </div>
              <p className="mt-2 text-base font-medium text-white/85">
                {cs.solant.tagline}
              </p>
              <p className="mt-6 text-xl leading-relaxed text-white/90 sm:text-2xl">
                {project.tagline}
              </p>
              <p className="mt-2 text-sm text-white/70">{project.role}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#1B1714] transition hover:bg-white/90"
              >
                {cs.openDemo}
              </a>
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

        <SolantDemo />

        {project.deliverables && (
          <section className="mt-20">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              {cs.whatShipped}
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
            {cs.designLanguage}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {cs.solant.designLanguageProse}
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
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8821E]"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mt-20 rounded-3xl px-8 py-12 text-center text-white sm:px-12"
          style={{
            background: "linear-gradient(135deg, #F5A623, #E8821E, #D26F16)",
          }}
        >
          <Image
            src="/projects/solant/starburst-white.svg"
            alt=""
            width={48}
            height={48}
            className="mx-auto h-12 w-12"
            aria-hidden
          />
          <p className="mx-auto mt-6 max-w-md text-lg text-white/90">
            {cs.solant.ctaEmbed}
          </p>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-[#1B1714] transition hover:bg-white/90"
          >
            {cs.openDemoArrow}
          </a>
        </section>
      </div>
    </article>
  );
}
