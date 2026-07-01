import Image from "next/image";

const DEMO_URL = "https://solant-chi.vercel.app/";

const capabilities = [
  {
    title: "Inbox triage",
    description:
      "Surfaces what actually needs the CEO — priority emails, summaries, and one-tap reply drafts in their voice.",
    chip: "Catch me up on my inbox",
  },
  {
    title: "Weekly finance",
    description:
      "Revenue, burn, runway, and sparkline trends pulled into a rich card — with a plain-language insight on top.",
    chip: "How are we doing this week?",
  },
  {
    title: "CRM staffing",
    description:
      "Match people to projects by availability and fit — assign from the chat and log it to memory.",
    chip: "Staff the Orion launch",
  },
  {
    title: "Memory layer",
    description:
      "Persistent context on deals and decisions — Acme renewal history surfaces automatically when it matters.",
    chip: "What do you know about Acme?",
  },
];

export function SolantDemo() {
  return (
    <section className="mt-20" aria-labelledby="solant-demo-heading">
      <h2
        id="solant-demo-heading"
        className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
      >
        What the demo does
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        Scripted flows for a fictional CEO, Daniel, at Vela. Tap a suggestion chip
        or type naturally — Solant responds with text and inline cards you can
        interact with (draft replies, approve sends, assign team members).
      </p>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {capabilities.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
            <span className="mt-4 inline-block rounded-full border border-[#E0D8CB] bg-[#F7F5F1] px-3 py-1 text-xs font-medium text-[#4A433C] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {item.chip}
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
                Try the prototype
              </p>
              <p className="text-xs text-zinc-500">
                Live demo · solant-chi.vercel.app
              </p>
            </div>
          </div>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 underline-offset-4 hover:text-foreground hover:underline"
          >
            Open full screen ↗
          </a>
        </div>
        <div className="relative min-h-[520px] w-full sm:min-h-[640px] lg:min-h-[720px]">
          <iframe
            src={DEMO_URL}
            title="Solant — demo prototype"
            className="absolute inset-0 h-full w-full border-0 bg-[#F7F5F1]"
            allow="clipboard-read; clipboard-write"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
