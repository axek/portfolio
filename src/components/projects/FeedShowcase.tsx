"use client";

import Image from "next/image";
import type { ProjectShowcaseItem } from "@/data/projects";
import { useTranslations } from "@/i18n/use-translations";

type Props = {
  items: ProjectShowcaseItem[];
};

export function FeedShowcase({ items }: Props) {
  const t = useTranslations();
  const cs = t.caseStudy;

  return (
    <section className="mt-20" aria-labelledby="feed-showcase-heading">
      <h2
        id="feed-showcase-heading"
        className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
      >
        {cs.volunteerUx}
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {cs.feed.showcaseIntro}
      </p>

      <ul className="mt-10 space-y-14">
        {items.map((item, index) => (
          <li key={item.title}>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#041428]/60 dark:text-white/50">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-lg shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority={index === 0}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
