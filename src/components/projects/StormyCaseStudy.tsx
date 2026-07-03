"use client";

import { AssetImage as Image } from "@/components/AssetImage";
import { asset } from "@/lib/asset";
import Link from "next/link";
import { StormyPlatform } from "@/components/projects/StormyPlatform";
import type { Project } from "@/data/projects";
import { useTranslations } from "@/i18n/use-translations";

type Props = {
  project: Project;
};

export function StormyCaseStudy({ project }: Props) {
  const t = useTranslations();
  const cs = t.caseStudy;

  return (
    <article className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0c0618] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 20%, #FF2F2E44 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 20% 80%, #3B246866 0%, transparent 50%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[url('/projects/stormy/bg-2.png')] bg-cover bg-center opacity-20 mix-blend-screen" />

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
                  src="/projects/stormy/logo-horizontal-white.svg"
                  alt="Stormy wordmark"
                  width={320}
                  height={80}
                  className="h-10 w-auto sm:h-12"
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
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#121212] transition hover:bg-white/90"
              >
                {cs.openStormy}
              </a>
              {project.brandbookUrl && (
                <a
                  href={asset(project.brandbookUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-2.5 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/5"
                >
                  {cs.brandBook}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Scope chips */}
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
        {/* Overview */}
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

        {/* Video */}
        {project.youtubeId && (
          <section className="mt-20">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              {cs.video}
            </h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-200 bg-black shadow-xl dark:border-zinc-800">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={`${project.title} — video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </section>
        )}

        <StormyPlatform />

        {/* Deliverables */}
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

        {/* Brand identity */}
        <section className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {cs.brandIdentity}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {cs.stormy.brandProse}
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
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-zinc-200 bg-white p-10 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/projects/stormy/logo-horizontal.svg"
                alt="Stormy horizontal logo — color"
                width={280}
                height={70}
                className="h-auto w-full max-w-[240px]"
              />
              <span className="text-xs text-zinc-500">{cs.stormy.logoHorizontalColor}</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-zinc-200 bg-[#121212] p-10">
              <Image
                src="/projects/stormy/logo-horizontal-white.svg"
                alt="Stormy horizontal logo — white"
                width={280}
                height={70}
                className="h-auto w-full max-w-[240px]"
              />
              <span className="text-xs text-white/50">{cs.stormy.logoHorizontalWhite}</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-zinc-200 bg-white p-10 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src="/projects/stormy/logo-vertical.svg"
                alt="Stormy vertical logo — color"
                width={120}
                height={160}
                className="h-auto w-full max-w-[100px]"
              />
              <span className="text-xs text-zinc-500">{cs.stormy.logoVerticalColor}</span>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-6 rounded-2xl p-10"
              style={{
                background:
                  "linear-gradient(135deg, #FF2F2E 0%, #3B2468 100%)",
              }}
            >
              <Image
                src="/projects/stormy/icon-white.svg"
                alt="Stormy icon — white"
                width={80}
                height={80}
                className="h-20 w-20"
              />
              <span className="text-xs text-white/70">{cs.stormy.logoIconGradient}</span>
            </div>
          </div>
        </section>

        {/* Highlights */}
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
                    background:
                      "linear-gradient(135deg, #FF2F2E, #3B2468)",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl bg-[#121212] px-8 py-12 text-center text-white sm:px-12">
          <Image
            src="/projects/stormy/logo-vertical-white.svg"
            alt=""
            width={100}
            height={130}
            className="mx-auto h-16 w-auto opacity-90"
            aria-hidden
          />
          <p className="mx-auto mt-6 max-w-md text-lg text-white/80">
            {cs.stormy.ctaBody}
          </p>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #FF2F2E, #3B2468)",
            }}
          >
            stormy.chat
          </a>
        </section>
      </div>
    </article>
  );
}
