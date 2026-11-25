import type { MetadataRoute } from "next";
import { getAllProjects, getProjectSlug } from "@/lib/project-utils";
import { getAllArticles, getArticleSlug } from "@/lib/article-utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://elshaddai.vercel.app";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/research`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/writing`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((p) => ({
    url: `${baseUrl}/work/${getProjectSlug(p)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${baseUrl}/writing/${getArticleSlug(a)}`,
    lastModified: a.date ? new Date(a.date) : now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}