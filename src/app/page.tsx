import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex-1">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-background dark:border-zinc-800 dark:from-zinc-950 dark:to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            Selected work
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Projects, products, and interfaces I have shipped.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Each project opens a detailed view with previews, copy, and a link
            to the live product.
          </p>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="sr-only">Project list</h2>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
