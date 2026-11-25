import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

function projectHref(project: Project): string {
  const slug = (project as { slug?: string }).slug;
  return slug ? `/work/${slug}` : "/work";
}

export function HomeFeaturedWork() {
  // Show up to 3 featured projects. Adjust the slice if you want different ones.
  // Phase 3 will let you mark projects as `featured: true` in data.ts if preferred.
  const featured = projects.slice(0, 3);

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
          {featured.map((project, i) => {
            const tags = (project as { tags?: string[] }).tags ?? [];
            const description = project.description ?? "";

            return (
              <Link
                key={project.title}
                href={projectHref(project)}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-600"
              >
                <div>
                  <span className="text-xs font-semibold tracking-[0.18em] text-slate-400 dark:text-slate-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                    View
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}