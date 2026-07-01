import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

type Props = {
  currentSlug: string;
};

export function MoreProjects({ currentSlug }: Props) {
  const others = projects.filter((project) => project.slug !== currentSlug);

  if (others.length === 0) {
    return null;
  }

  return (
    <section
      className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="more-projects-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <h2
          id="more-projects-heading"
          className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
        >
          More projects
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} compact />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
