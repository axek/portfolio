"use client";

import { AssetImage as Image } from "@/components/AssetImage";
import { useTranslations } from "@/i18n/use-translations";

function CircularGallery({
  images,
}: {
  images: Array<{
    src: string;
    alt: string;
    brand?: string;
    href?: string;
  }>;
}) {
  return (
    <ul className="grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-5">
      {images.map((item) => (
        <li key={item.href ?? item.src}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-3 text-center"
          >
            <div className="relative aspect-square w-full max-w-[132px] overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-zinc-200 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md dark:bg-zinc-900 dark:ring-zinc-700">
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                sizes="132px"
              />
            </div>
            {item.brand ? (
              <span className="text-xs font-medium text-zinc-500 transition group-hover:text-foreground">
                {item.brand}
              </span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}

function GridGallery({
  images,
}: {
  images: Array<{
    src: string;
    alt: string;
  }>;
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-3">
      {images.map((item) => (
        <li
          key={item.src}
          className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 280px"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function BackgroundSection() {
  const t = useTranslations();

  return (
    <section id="background" className="border-y border-zinc-200 bg-zinc-50/70 dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            {t.background.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.background.title}
          </h2>
        </div>

        <div className="mt-12 space-y-12 sm:space-y-16">
          {t.background.chapters.map((chapter) => (
            <article
              key={chapter.id}
              className="grid gap-8 border-t border-zinc-200 pt-10 dark:border-zinc-800 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                  {chapter.period}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  {chapter.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {chapter.body}
                </p>
                <a
                  href={chapter.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-foreground transition hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600"
                >
                  {chapter.cta}
                </a>
              </div>

              <div>
                {chapter.layout === "circular" ? (
                  <CircularGallery images={chapter.images} />
                ) : (
                  <GridGallery images={chapter.images} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
