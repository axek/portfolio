import Image from "next/image";

const APP_URL = "https://app.stormy.chat/";
const BRAIN_URL = "https://brain.stormy.chat/";

export function StormyPlatform() {
  return (
    <section className="mt-20" aria-labelledby="platform-heading">
      <h2
        id="platform-heading"
        className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
      >
        The platform
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        Stormy is not a single screen — it is a system.{" "}
        <strong className="font-semibold text-foreground">Stormy Brain</strong>{" "}
        holds airline policies, entitlements, and operational playbooks.{" "}
        <strong className="font-semibold text-foreground">Stormy App</strong>{" "}
        turns that knowledge into live passenger conversations — calm, branded,
        and accurate when disruption hits.
      </p>

      {/* Architecture flow */}
      <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <a
          href={BRAIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-[#3B2468]/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-[#3B2468]/60"
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, #3B2468 0%, #3B2468cc 100%)",
              }}
              aria-hidden
            >
              B
            </span>
            <div>
              <p className="font-semibold text-foreground">Stormy Brain</p>
              <p className="font-mono text-xs text-zinc-500">brain.stormy.chat</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Knowledge base — policies, FAQs, and operational context the agent
            pulls from when answering passengers.
          </p>
          <span className="mt-4 inline-flex text-sm font-medium text-[#3B2468] group-hover:underline dark:text-[#c4a8ff]">
            Open in new tab →
          </span>
        </a>

        <div className="hidden flex-col items-center gap-1 px-2 sm:flex">
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            powers
          </span>
          <svg
            width="48"
            height="12"
            viewBox="0 0 48 12"
            fill="none"
            aria-hidden
            className="text-zinc-300 dark:text-zinc-600"
          >
            <path
              d="M0 6h40M40 6l-6-5M40 6l-6 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-[#FF2F2E]/5 to-[#3B2468]/10 p-6 dark:border-zinc-800 dark:from-[#FF2F2E]/10 dark:to-[#3B2468]/15">
          <div className="flex items-center gap-3">
            <Image
              src="/projects/stormy/icon.svg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10"
              aria-hidden
            />
            <div>
              <p className="font-semibold text-foreground">Stormy App</p>
              <p className="font-mono text-xs text-zinc-500">app.stormy.chat</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Passenger-facing agent — handles conversations on the channels
            travelers already use during irregular operations.
          </p>
          <span className="mt-4 inline-flex text-sm font-medium text-zinc-500">
            Try it below ↓
          </span>
        </div>
      </div>

      {/* Live chat embed */}
      <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-[#0c0618] shadow-2xl shadow-[#3B2468]/20 dark:border-zinc-800">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/projects/stormy/icon-white.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
              aria-hidden
            />
            <div>
              <p className="text-sm font-semibold text-white">
                Talk to Stormy
              </p>
              <p className="text-xs text-white/50">
                Live demo · app.stormy.chat
              </p>
            </div>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 underline-offset-4 hover:text-white hover:underline"
          >
            Open full screen ↗
          </a>
        </div>
        <div className="relative min-h-[520px] w-full sm:min-h-[600px] lg:min-h-[680px]">
          <iframe
            src={APP_URL}
            title="Stormy — passenger AI agent"
            className="absolute inset-0 h-full w-full border-0 bg-[#0c0618]"
            allow="clipboard-read; clipboard-write; microphone"
            loading="lazy"
          />
        </div>
      </div>

      {/* Brain CTA */}
      <div
        className="mt-6 flex flex-col gap-6 rounded-3xl border border-[#3B2468]/20 p-8 sm:flex-row sm:items-center sm:justify-between"
        style={{
          background:
            "linear-gradient(135deg, #3B246808 0%, #3B246818 50%, #FF2F2E08 100%)",
        }}
      >
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#3B2468] dark:text-[#c4a8ff]">
            Knowledge layer
          </p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">
            Stormy Brain
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Browse the knowledge base Stormy uses to stay accurate — airline
            policies, entitlement rules, disruption playbooks, and approved
            messaging. Every answer in the chat above is grounded in what lives
            here.
          </p>
        </div>
        <a
          href={BRAIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #3B2468, #FF2F2E)",
          }}
        >
          Open brain.stormy.chat ↗
        </a>
      </div>
    </section>
  );
}
