import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  getProjectHref,
  getProjectSlug,
  hasCaseStudy,
  type ProjectLike,
} from "@/lib/project-utils";

interface ProjectCardProps {
  project: ProjectLike;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const tags = project.tags ?? [];
  const cover = project.screenshots?.[0];
  const caseStudyReady = hasCaseStudy(project);

  return (
    <Link
      href={getProjectHref(project)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-600"
      aria-label={`View case study: ${project.title}`}
    >
      {/* Cover */}
      {cover ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            unoptimized
          />
        </div>
      ) : (
        <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800" />
      )}

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          {project.category && (
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {project.category}
            </span>
          )}
          {project.status && (
            <span className="rounded-full border border-slate-200 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
              {project.status}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100">
          {project.title}
        </h3>

        {project.description && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
        )}

        <div className="mt-6 flex items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-slate-500 dark:text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 dark:text-slate-300">
            {caseStudyReady ? "Case study" : "Details"}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}