import { projects } from "./data";

/**
 * A permissive shape for a project. All fields beyond `title` are optional,
 * so existing entries in data.ts remain valid even before you add case-study
 * fields.
 */
export interface ProjectLike {
  title: string;
  description?: string;
  technologies?: string[];
  tags?: string[];

  // Existing links — "use" only if they point somewhere real
  github?: string;
  demo?: string;

  // Optional case-study fields (add these to data.ts when ready)
  slug?: string;
  category?: string;              // e.g. "Technology", "Health", "Research", "Creative"
  status?: string;                // e.g. "Live", "In progress", "Concept", "Interest area"
  year?: string | number;
  role?: string;
  problem?: string;
  approach?: string;
  solution?: string;
  outcomes?: string[];            // ONLY factual outcomes — no invented metrics
  lessons?: string[];
  screenshots?: { src: string; alt: string; caption?: string }[];
  featured?: boolean;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getProjectSlug(project: ProjectLike): string {
  return project.slug ?? slugify(project.title);
}

export function getProjectHref(project: ProjectLike): string {
  return `/work/${getProjectSlug(project)}`;
}

export function getAllProjects(): ProjectLike[] {
  return projects as unknown as ProjectLike[];
}

export function getProjectBySlug(slug: string): ProjectLike | undefined {
  return getAllProjects().find((p) => getProjectSlug(p) === slug);
}

export function getAllCategories(): string[] {
  const set = new Set<string>();
  for (const p of getAllProjects()) {
    if (p.category && p.category.trim()) set.add(p.category.trim());
  }
  return Array.from(set).sort();
}

export function getFeaturedProjects(limit = 3): ProjectLike[] {
  const all = getAllProjects();
  const flagged = all.filter((p) => p.featured);
  return (flagged.length > 0 ? flagged : all).slice(0, limit);
}

export function isUsableLink(href?: string): href is string {
  return typeof href === "string" && href.trim() !== "" && href.trim() !== "#";
}

export function hasCaseStudy(project: ProjectLike): boolean {
  return Boolean(
    project.problem ||
      project.approach ||
      project.solution ||
      (project.outcomes && project.outcomes.length > 0) ||
      (project.lessons && project.lessons.length > 0)
  );
}