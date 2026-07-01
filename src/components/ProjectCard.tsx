import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
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

export function ProjectCard({ project }: Props) {
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
        "group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition dark:border-zinc-800 dark:bg-zinc-900",
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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {theme === "stormy" && (
          <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
            <Image
              src="/projects/stormy/logo-horizontal-white.svg"
              alt=""
              width={280}
              height={70}
              className="h-12 w-auto max-w-[85%] drop-shadow-lg transition duration-500 group-hover:scale-105 sm:h-16 md:h-20"
              aria-hidden
            />
          </div>
        )}
        {theme === "actum" && (
          <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
            <Image
              src="/projects/actum/logo-white.svg"
              alt=""
              width={280}
              height={73}
              className="h-10 w-auto max-w-[80%] drop-shadow-lg transition duration-500 group-hover:scale-105 sm:h-14 md:h-[4.5rem]"
              aria-hidden
            />
          </div>
        )}
        {theme === "solant" && (
          <div className="absolute inset-0 z-20 flex items-center justify-center gap-2.5 p-6 sm:gap-3">
            <Image
              src="/projects/solant/starburst-white.svg"
              alt=""
              width={40}
              height={40}
              className="h-8 w-8 shrink-0 drop-shadow-lg sm:h-10 sm:w-10"
              aria-hidden
            />
            <span className="text-2xl font-bold tracking-tight text-white drop-shadow-lg transition duration-500 group-hover:scale-105 sm:text-3xl">
              Solant
            </span>
          </div>
        )}
        {theme === "feed" && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 p-6">
            <Image
              src="/projects/feed/logo-white.svg"
              alt=""
              width={72}
              height={60}
              className="h-14 w-auto drop-shadow-lg transition duration-500 group-hover:scale-105 sm:h-16"
              aria-hidden
            />
            <span className="text-lg font-semibold tracking-wide text-white/90 drop-shadow-md sm:text-xl">
              Feed
            </span>
          </div>
        )}
        {project.badge && (
          <span className="absolute right-3 top-3 z-30 rounded-full border border-white/25 bg-black/25 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {project.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 border-t border-zinc-100 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-base font-semibold tracking-tight text-foreground group-hover:underline group-hover:underline-offset-4">
            {project.title}
          </h2>
          <span className="shrink-0 text-xs text-zinc-500">{project.year}</span>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>
        <span
          className={[
            "mt-auto pt-2 text-xs font-medium",
            isBranded ? linkAccent[theme] : "text-zinc-500 group-hover:text-foreground",
          ].join(" ")}
        >
          View case study →
        </span>
      </div>
    </Link>
  );
}
