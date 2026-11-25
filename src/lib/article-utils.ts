import { articles } from "./articles";

export interface ArticleLike {
  title: string;
  slug?: string;
  excerpt?: string;
  date?: string;
  readingTime?: string;
  category?: string;
  tags?: string[];
  coverImage?: { src: string; alt: string };
  content?: string;
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

export function getArticleSlug(article: ArticleLike): string {
  return article.slug ?? slugify(article.title);
}

export function getAllArticles(): ArticleLike[] {
  return articles as unknown as ArticleLike[];
}

export function getArticleBySlug(slug: string): ArticleLike | undefined {
  return getAllArticles().find((a) => getArticleSlug(a) === slug);
}

export function getAllArticleCategories(): string[] {
  const set = new Set<string>();
  for (const a of getAllArticles()) {
    if (a.category && a.category.trim()) set.add(a.category.trim());
  }
  return Array.from(set).sort();
}

export function sortArticlesByDate(list: ArticleLike[]): ArticleLike[] {
  return [...list].sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });
}

export function getFeaturedArticle(): ArticleLike | undefined {
  const all = sortArticlesByDate(getAllArticles());
  return all.find((a) => a.featured) ?? all[0];
}

export function formatArticleDate(date?: string): string {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return date;
  }
}

export function estimateReadingTime(content?: string): string {
  if (!content) return "";
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  if (words === 0) return "";
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function getArticleReadingTime(article: ArticleLike): string {
  return article.readingTime ?? estimateReadingTime(article.content);
}