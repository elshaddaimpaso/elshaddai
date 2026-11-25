import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { FilterChips } from "@/components/work/filter-chips";
import { ProjectCard } from "@/components/work/project-card";
import {
  getAllCategories,
  getAllProjects,
  getProjectSlug,
} from "@/lib/project-utils";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects across health technology, research tooling, and digital products by El-shaddai Mpaso.",
  openGraph: {
    title: "Work — El-shaddai Mpaso",
    description:
      "Selected projects across health technology, research tooling, and digital products.",
    type: "website",
  },
};

interface WorkPageProps {
  searchParams: Promise<{ category?: string | string[] }>;
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const params = await searchParams;
  const raw =
    typeof params.category === "string" ? params.category : undefined;

  const allProjects = getAllProjects();
  const categories = getAllCategories();
  const active =
    raw && categories.includes(raw) ? raw : "All";

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Selected projects and case studies."
        description="A curated selection of projects spanning health technology, research tooling, and digital products. Some are live; some are still in progress."
      />

      <section className="section-padding">
        <div className="section-container">
          <FilterChips categories={categories} active={active} />

          {filtered.length === 0 ? (
            <div className="mt-16 rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No projects in this category yet.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard
                  key={getProjectSlug(project)}
                  project={project}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}