import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
} from "lucide-react";
import {
  getAllProjects,
  getProjectBySlug,
  getProjectSlug,
  hasCaseStudy,
  isUsableLink,
} from "@/lib/project-utils";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: getProjectSlug(project),
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — El-shaddai Mpaso`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const all = getAllProjects();
  const idx = all.findIndex((p) => getProjectSlug(p) === slug);
  const next = all.length > 1 ? all[(idx + 1) % all.length] : null;

  const cover = project.screenshots?.[0];
  const rest = project.screenshots?.slice(1) ?? [];

  const showProblem = Boolean(project.problem);
  const showApproach = Boolean(project.approach);
  const showSolution = Boolean(project.solution);
  const showOutcomes = (project.outcomes?.length ?? 0) > 0;
  const showLessons = (project.lessons?.length ?? 0) > 0;
  const showTech = (project.technologies?.length ?? 0) > 0;
  const deepContent = hasCaseStudy(project);

  const meta: { label: string; value: string }[] = [];
  if (project.role) meta.push({ label: "Role", value: project.role });
  if (project.year)
    meta.push({ label: "Year", value: String(project.year) });
  if (project.status)
    meta.push({ label: "Status", value: project.status });
  if (project.category)
    meta.push({ label: "Category", value: project.category });

  return (
    <article>
      {/* Back link */}
      <div className="section-container pt-28 md:pt-36">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          <ArrowLeft className="h-4 w-4" />
          All work
        </Link>
      </div>

      {/* Hero */}
      <header className="section-container mt-8 md:mt-10">
        <div className="max-w-3xl">
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

          <h1 className="mt-5 text-balance font-sora text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          {project.description && (
            <p className="mt-6 text-balance text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
              {project.description}
            </p>
          )}

          {(isUsableLink(project.demo) || isUsableLink(project.github)) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {isUsableLink(project.demo) && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
                >
                  Visit project
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {isUsableLink(project.github) && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"
                >
                  Source code
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Meta strip */}
      {meta.length > 0 && (
        <section className="section-container mt-12">
          <dl className="grid grid-cols-2 gap-6 border-y border-slate-200 py-6 dark:border-slate-800 sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
                  {m.label}
                </dt>
                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-100">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Cover image */}
      {cover && (
        <section className="section-container mt-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover"
              unoptimized
            />
          </div>
          {cover.caption && (
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
              {cover.caption}
            </p>
          )}
        </section>
      )}

      {/* Narrative body */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          {!deepContent ? (
            <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                A full case study for this project is in progress.
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                In the meantime, this page collects what is publicly available
                about the project.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {showProblem && (
                <Block title="The problem" body={project.problem!} />
              )}

              {showApproach && (
                <Block title="Approach" body={project.approach!} />
              )}

              {showSolution && (
                <Block title="Solution" body={project.solution!} />
              )}

              {showOutcomes && (
                <BlockList title="Outcomes" items={project.outcomes!} />
              )}

              {showLessons && (
                <BlockList title="Lessons" items={project.lessons!} />
              )}
            </div>
          )}

          {showTech && (
            <div className="mt-14 border-t border-slate-200 pt-10 dark:border-slate-800">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Technologies
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies!.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Extra screenshots */}
      {rest.length > 0 && (
        <section className="section-padding border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="section-container">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              More views
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {rest.map((shot, i) => (
                <figure key={`${shot.src}-${i}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  {shot.caption && (
                    <figcaption className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                      {shot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      {next && getProjectSlug(next) !== slug && (
        <section className="section-padding border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="section-container">
            <Link
              href={`/work/${getProjectSlug(next)}`}
              className="group flex items-center justify-between gap-6 rounded-2xl border border-slate-200 p-8 transition-colors hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Next project
                </p>
                <p className="mt-2 font-sora text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="h-6 w-6 text-slate-400 transition-transform group-hover:translate-x-1 dark:text-slate-500" />
            </Link>
          </div>
        </section>
      )}
    </article>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {title}
      </h2>
      <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
        {body}
      </p>
    </div>
  );
}

function BlockList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 text-base leading-relaxed text-slate-700 dark:text-slate-300"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400 dark:bg-slate-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}