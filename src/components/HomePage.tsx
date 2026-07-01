"use client";

import Link from "next/link";
import { PricingSection } from "@/components/PricingSection";
import { ProjectCard } from "@/components/ProjectCard";
import { contact } from "@/data/contact";
import { getProjects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslations } from "@/i18n/use-translations";

export function HomePage() {
  const { locale } = useLanguage();
  const t = useTranslations();
  const projects = getProjects(locale);

  return (
    <div className="flex-1">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-background dark:border-zinc-800 dark:from-zinc-950 dark:to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            {t.home.eyebrow}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {t.home.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t.home.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(t.home.mailtoSubject)}`}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              {t.home.ctaPrimary}
            </a>
            <Link
              href="/#work"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-medium text-foreground transition hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600"
            >
              {t.home.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="sr-only">{t.home.projectsSrOnly}</h2>
        <ul className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <PricingSection />
    </div>
  );
}
