"use client";

import { AssetImage as Image } from "@/components/AssetImage";
import Link from "next/link";
import { ActumPlatform } from "@/components/projects/ActumPlatform";
import type { Project } from "@/data/projects";
import { useTranslations } from "@/i18n/use-translations";

type Props = {
  project: Project;
};

export function ActumCaseStudy({ project }: Props) {
  const t = useTranslations();
  const cs = t.caseStudy;

  return (
    <article className="flex-1">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#12121a] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, #6366f144 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 100% 0%, #8b5cf633 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 0% 100%, #3b82f622 0%, transparent 50%)",
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
              <div className="mt-6">
                <Image
                  src="/projects/actum/logo-white.svg"
                  alt="Actum wordmark"
                  width={320}
                  height={84}
                  className="h-9 w-auto sm:h-11"
                  priority
                />
              </div>
              <p className="mt-6 text-xl leading-relaxed text-white/80 sm:text-2xl">
                {project.tagline}
              </p>
              <p className="mt-2 text-sm text-white/50">{project.role}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#12121a] transition hover:bg-white/90"
              >
                {cs.openPlatform}
              </a>
              <a
                href="https://actum.cx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-2.5 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/5"
              >
                actum.cx ↗
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

        <ActumPlatform />

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
            {cs.designSystem}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {cs.actum.designSystemProse}
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

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-zinc-200 bg-[#12121a] p-10">
              <Image
                src="/projects/actum/logo-white.svg"
                alt="Actum logo on dark"
                width={280}
                height={73}
                className="h-auto w-full max-w-[220px]"
              />
              <span className="text-xs text-white/50">{cs.actum.wordmarkDark}</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-zinc-200 bg-white p-10 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/projects/actum/logo.svg"
                alt="Actum logo on light"
                width={280}
                height={73}
                className="h-auto w-full max-w-[220px]"
              />
              <span className="text-xs text-zinc-500">{cs.actum.wordmarkLight}</span>
            </div>
          </div>
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
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 rounded-3xl bg-[#12121a] px-8 py-12 text-center text-white sm:px-12">
          <Image
            src="/projects/actum/logo-white.svg"
            alt=""
            width={200}
            height={52}
            className="mx-auto h-8 w-auto opacity-90"
            aria-hidden
          />
          <p className="mx-auto mt-6 max-w-md text-lg text-white/80">
            {cs.actum.ctaBody}
          </p>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            }}
          >
            {cs.openPlatformArrow}
          </a>
        </section>
      </div>
    </article>
  );
}
