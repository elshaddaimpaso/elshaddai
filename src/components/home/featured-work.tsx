import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/work/project-card";
import { getFeaturedProjects, getProjectSlug } from "@/lib/project-utils";

export function HomeFeaturedWork() {
  const featured = getFeaturedProjects(3);

  return (
    <section className="section-padding border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Selected work
            </p>
            <h2 className="mt-3 text-balance font-sora text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:text-5xl">
              A few things I&apos;ve built and explored.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline dark:text-slate-300 dark:hover:text-slate-100"
          >
            All work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={getProjectSlug(project)} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}