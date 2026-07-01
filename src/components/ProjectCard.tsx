import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  compact?: boolean;
};

const cardHover: Record<string, string> = {
  stormy: "hover:border-[#FF2F2E]/35 hover:shadow-md hover:shadow-[#FF2F2E]/8",
  actum: "hover:border-[#6366f1]/35 hover:shadow-md hover:shadow-[#6366f1]/8",
  solant: "hover:border-[#E8821E]/40 hover:shadow-md hover:shadow-[#E8821E]/10",
  feed: "hover:border-[#041428]/25 hover:shadow-md hover:shadow-[#041428]/10",
};

const linkAccent: Record<string, string> = {
  stormy: "text-[#FF2F2E] group-hover:text-[#D42E2D]",
  actum: "text-[#6366f1] group-hover:text-[#5558e3]",
  solant: "text-[#E8821E] group-hover:text-[#D26F16]",
  feed: "text-[#041428] group-hover:text-[#0a2a4a] dark:text-[#7eb8ff] dark:group-hover:text-white",
};

export function ProjectCard({ project, compact = false }: Props) {
  const theme = project.theme ?? "default";
  const isBranded =
    theme === "stormy" ||
    theme === "actum" ||
    theme === "solant" ||
    theme === "feed";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={[
        "group flex flex-col overflow-hidden border border-zinc-200 bg-white shadow-sm transition dark:border-zinc-800 dark:bg-zinc-900",
        compact ? "rounded-xl" : "rounded-2xl",
        isBranded ? cardHover[theme] : "hover:border-zinc-300 hover:shadow-md dark:hover:border-zinc-700",
      ].join(" ")}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes={
            compact
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
        {theme === "stormy" && (
          <div
            className={[
              "absolute inset-0 z-20 flex items-center justify-center",
              compact ? "p-3" : "p-6",
            ].join(" ")}
          >
            <Image
              src="/projects/stormy/logo-horizontal-white.svg"
              alt=""
              width={280}
              height={70}
              className={
                compact
                  ? "h-7 w-auto max-w-[85%] drop-shadow-lg transition duration-500 group-hover:scale-105 sm:h-8"
                  : "h-12 w-auto max-w-[85%] drop-shadow-lg transition duration-500 group-hover:scale-105 sm:h-16 md:h-20"
              }
              aria-hidden
            />
          </div>
        )}
        {theme === "actum" && (
          <div
            className={[
              "absolute inset-0 z-20 flex items-center justify-center",
              compact ? "p-3" : "p-6",
            ].join(" ")}
          >
            <Image
              src="/projects/actum/logo-white.svg"
              alt=""
              width={280}
              height={73}
              className={
                compact
                  ? "h-6 w-auto max-w-[80%] drop-shadow-lg transition duration-500 group-hover:scale-105 sm:h-7"
                  : "h-10 w-auto max-w-[80%] drop-shadow-lg transition duration-500 group-hover:scale-105 sm:h-14 md:h-[4.5rem]"
              }
              aria-hidden
            />
          </div>
        )}
        {theme === "solant" && (
          <div
            className={[
              "absolute inset-0 z-20 flex items-center justify-center",
              compact ? "gap-1.5 p-3" : "gap-2.5 p-6 sm:gap-3",
            ].join(" ")}
          >
            <Image
              src="/projects/solant/starburst-white.svg"
              alt=""
              width={40}
              height={40}
              className={
                compact
                  ? "h-5 w-5 shrink-0 drop-shadow-lg"
                  : "h-8 w-8 shrink-0 drop-shadow-lg sm:h-10 sm:w-10"
              }
              aria-hidden
            />
            <span
              className={[
                "font-bold tracking-tight text-white drop-shadow-lg transition duration-500 group-hover:scale-105",
                compact ? "text-base" : "text-2xl sm:text-3xl",
              ].join(" ")}
            >
              Solant
            </span>
          </div>
        )}
        {theme === "feed" && (
          <div
            className={[
              "absolute inset-0 z-20 flex flex-col items-center justify-center",
              compact ? "gap-1 p-3" : "gap-2 p-6",
            ].join(" ")}
          >
            <Image
              src="/projects/feed/logo-white.svg"
              alt=""
              width={72}
              height={60}
              className={
                compact
                  ? "h-8 w-auto drop-shadow-lg transition duration-500 group-hover:scale-105 sm:h-9"
                  : "h-14 w-auto drop-shadow-lg transition duration-500 group-hover:scale-105 sm:h-16"
              }
              aria-hidden
            />
            <span
              className={[
                "font-semibold tracking-wide text-white/90 drop-shadow-md",
                compact ? "text-xs" : "text-lg sm:text-xl",
              ].join(" ")}
            >
              Feed
            </span>
          </div>
        )}
        {project.badge && (
          <span
            className={[
              "absolute right-2 top-2 z-30 rounded-full border border-white/25 bg-black/25 font-semibold uppercase tracking-wider text-white backdrop-blur-sm",
              compact
                ? "px-2 py-0.5 text-[0.55rem]"
                : "right-3 top-3 px-2.5 py-0.5 text-[0.65rem]",
            ].join(" ")}
          >
            {project.badge}
          </span>
        )}
      </div>

      <div
        className={[
          "flex flex-1 flex-col border-t border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-900",
          compact ? "gap-1.5 p-3.5" : "gap-2 p-5",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-2">
          <h2
            className={[
              "font-semibold tracking-tight text-foreground group-hover:underline group-hover:underline-offset-4",
              compact ? "text-sm" : "text-base",
            ].join(" ")}
          >
            {project.title}
          </h2>
          <span className="shrink-0 text-[0.65rem] text-zinc-500 sm:text-xs">
            {project.year}
          </span>
        </div>
        <p
          className={[
            "leading-relaxed text-zinc-600 dark:text-zinc-400",
            compact ? "line-clamp-2 text-xs" : "text-sm",
          ].join(" ")}
        >
          {project.summary}
        </p>
        {!compact && (
          <span
            className={[
              "mt-auto pt-2 text-xs font-medium",
              isBranded ? linkAccent[theme] : "text-zinc-500 group-hover:text-foreground",
            ].join(" ")}
          >
            View case study →
          </span>
        )}
      </div>
    </Link>
  );
}
