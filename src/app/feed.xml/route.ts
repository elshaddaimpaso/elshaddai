import {
  getAllArticles,
  getArticleSlug,
  sortArticlesByDate,
} from "@/lib/article-utils";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://elshaddai.vercel.app";
  const articles = sortArticlesByDate(getAllArticles());
  const lastBuild = new Date().toUTCString();

  const items = articles
    .map((article) => {
      const url = `${baseUrl}/writing/${getArticleSlug(article)}`;
      const pubDate = article.date
        ? new Date(article.date).toUTCString()
        : lastBuild;
      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(article.excerpt ?? "")}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>El-shaddai Mpaso — Writing</title>
    <link>${baseUrl}/writing</link>
    <description>Essays, reflections, and storytelling by El-shaddai Mpaso.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}