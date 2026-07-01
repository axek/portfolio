const PLATFORM_URL = "https://glmvp.vercel.app/";
const BRAND_URL = "https://actum.cx/";

const pillars = [
  {
    id: "agents",
    label: "AI Agents",
    title: "Conversational agents",
    description:
      "LLM-powered assistants for support, sales, content, code, and domain-specific tasks — configured and published from a single studio.",
    examples: ["Customer Support", "Medical Assistant", "Sales Qualifier", "Voice AI"],
  },
  {
    id: "workflows",
    label: "Workflows",
    title: "Process automation",
    description:
      "Multi-step flows with rules, routing, and integrations — lead scoring, document processing, HR onboarding, and more.",
    examples: ["Lead Scoring", "Document Processing", "HR Assistant", "Journey Mapper"],
  },
  {
    id: "orchestration",
    label: "Orchestration",
    title: "Agents + workflows together",
    description:
      "Combine workflow bots and AI agents in one project — unified publishing, error states, and production orchestration.",
    examples: ["Orchestration Demo", "Multi-agent flows", "FSM + LLM", "Publish pipeline"],
  },
];

export function ActumPlatform() {
  return (
    <section className="mt-20" aria-labelledby="actum-platform-heading">
      <h2
        id="actum-platform-heading"
        className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
      >
        The platform
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        Actum is the company&apos;s core product — a studio for building,
        orchestrating, and shipping AI agents. Three building blocks work
        together:{" "}
        <strong className="font-semibold text-foreground">AI Agents</strong> for
        conversation,{" "}
        <strong className="font-semibold text-foreground">Workflows</strong>{" "}
        for structured automation, and{" "}
        <strong className="font-semibold text-foreground">Orchestration</strong>{" "}
        to run them as one system.
      </p>

      <ul className="mt-10 grid gap-5 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <li
            key={pillar.id}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <span className="inline-flex rounded-full bg-[#6366f1]/10 px-2.5 py-0.5 text-xs font-medium text-[#6366f1] dark:text-[#a5b4fc]">
              {pillar.label}
            </span>
            <h3 className="mt-3 font-semibold text-foreground">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {pillar.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {pillar.examples.map((ex) => (
                <li
                  key={ex}
                  className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[0.65rem] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {ex}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-[#12121a] shadow-2xl shadow-[#6366f1]/10 dark:border-zinc-800">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
          <div>
            <p className="text-sm font-semibold text-white">Live platform</p>
            <p className="text-xs text-white/50">Project studio · demo environment</p>
          </div>
          <a
            href={PLATFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 underline-offset-4 hover:text-white hover:underline"
          >
            Open full screen ↗
          </a>
        </div>
        <div className="relative min-h-[520px] w-full sm:min-h-[600px] lg:min-h-[680px]">
          <iframe
            src={PLATFORM_URL}
            title="Actum — AI agent platform"
            className="absolute inset-0 h-full w-full border-0 bg-[#12121a]"
            allow="clipboard-read; clipboard-write"
            loading="lazy"
          />
        </div>
      </div>

      <div
        className="mt-6 flex flex-col gap-6 rounded-3xl border border-[#6366f1]/20 p-8 sm:flex-row sm:items-center sm:justify-between"
        style={{
          background:
            "linear-gradient(135deg, #6366f108 0%, #8b5cf618 50%, #6366f108 100%)",
        }}
      >
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#6366f1] dark:text-[#a5b4fc]">
            Brand & company
          </p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">
            actum.cx
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            The public face of Actum — R&D laboratory in conversational and
            agentic AI. The platform powers case studies across fintech, healthcare,
            aviation, and enterprise deployments.
          </p>
        </div>
        <a
          href={BRAND_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          }}
        >
          Visit actum.cx ↗
        </a>
      </div>
    </section>
  );
}
