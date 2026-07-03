"use client";

import { AssetImage as Image } from "@/components/AssetImage";
import { useTranslations } from "@/i18n/use-translations";

const DEMO_URL = "https://solant-chi.vercel.app/";

export function SolantDemo() {
  const t = useTranslations();
  const cs = t.caseStudy;
  const p = t.platform.solant;

  return (
    <section className="mt-20" aria-labelledby="solant-demo-heading">
      <h2
        id="solant-demo-heading"
        className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
      >
        {cs.whatDemoDoes}
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {p.demoIntro}
      </p>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {p.capabilities.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
            <span className="mt-4 inline-block rounded-full border border-[#E0D8CB] bg-[#F7F5F1] px-3 py-1 text-xs font-medium text-[#4A433C] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {item.chips[0]}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-12 overflow-hidden rounded-3xl border border-[#E0D8CB] bg-[#F7F5F1] shadow-2xl shadow-[#E8821E]/10 dark:border-zinc-800 dark:bg-[#1B1714]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E0D8CB] bg-white px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <Image
              src="/projects/solant/starburst.svg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7"
              aria-hidden
            />
            <div>
              <p className="text-sm font-semibold text-foreground">
                {cs.tryPrototype}
              </p>
              <p className="text-xs text-zinc-500">{cs.liveDemoSolant}</p>
            </div>
          </div>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 underline-offset-4 hover:text-foreground hover:underline"
          >
            {cs.openFullScreen}
          </a>
        </div>
        <div className="relative min-h-[520px] w-full sm:min-h-[640px] lg:min-h-[720px]">
          <iframe
            src={DEMO_URL}
            title={p.iframeTitle}
            className="absolute inset-0 h-full w-full border-0 bg-[#F7F5F1]"
            allow="clipboard-read; clipboard-write"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
