import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HomeContactCta } from "@/components/home/contact-cta";
import {
  formatArticleDate,
  getAllArticles,
  getArticleBySlug,
  getArticleReadingTime,
  getArticleSlug,
  sortArticlesByDate,
} from "@/lib/article-utils";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: getArticleSlug(article),
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} — El-shaddai Mpaso`,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: ["El-shaddai Mpaso"],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const date = formatArticleDate(article.date);
  const reading = getArticleReadingTime(article);

  const sorted = sortArticlesByDate(getAllArticles());
  const idx = sorted.findIndex((a) => getArticleSlug(a) === slug);
  const next = sorted.length > 1 ? sorted[(idx + 1) % sorted.length] : null;

  return (
    <>
      <article>
        <div className="section-container pt-28 md:pt-36">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <ArrowLeft className="h-4 w-4" />
            All writing
          </Link>
        </div>

        <header className="section-container mt-8 md:mt-10">
          <div className="mx-auto max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              {article.category && (
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {article.category}
                </span>
              )}
              {(date || reading) && (
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-500">
                  {date}
                  {date && reading ? " · " : ""}
                  {reading}
                </span>
              )}
            </div>

            <h1 className="mt-5 text-balance font-sora text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="mt-5 text-balance text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
                {article.excerpt}
              </p>
            )}
          </div>
        </header>

        {article.coverImage && (
          <div className="section-container mt-12">
            <div className="mx-auto max-w-3xl">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                <Image
                  src={article.coverImage.src}
                  alt={article.coverImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 768px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        )}

        <div className="section-padding">
          <div className="section-container">
            <div className="mx-auto max-w-2xl">
              <ArticleBody content={article.content ?? ""} />
            </div>
          </div>
        </div>
      </article>

      {next && getArticleSlug(next) !== slug && (
        <section className="section-padding border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="section-container">
            <Link
              href={`/writing/${getArticleSlug(next)}`}
              className="group flex items-center justify-between gap-6 rounded-2xl border border-slate-200 p-8 transition-colors hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Next piece
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

      <HomeContactCta />
    </>
  );
}

/**
 * Lightweight, dependency-free content renderer.
 * - Blocks are separated by one or more blank lines.
 * - Blocks starting with "## " become <h2>.
 * - Blocks starting with "### " become <h3>.
 * - Blocks starting with "> " become a pull quote.
 * - Everything else becomes a <p>.
 */
function ArticleBody({ content }: { content: string }) {
  if (!content.trim()) {
    return (
      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
        This article has no body yet.
      </p>
    );
  }

  const blocks = content.split(/\n{2,}/);

  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        const text = block.trim();
        if (!text) return null;

        if (text.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="pt-4 font-sora text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            >
              {text.slice(4)}
            </h3>
          );
        }

        if (text.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="pt-6 font-sora text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            >
              {text.slice(3)}
            </h2>
          );
        }

        if (text.startsWith("> ")) {
          return (
            <blockquote
              key={i}
              className="border-l-2 border-slate-300 pl-5 text-lg italic leading-relaxed text-slate-700 dark:border-slate-700 dark:text-slate-300"
            >
              {text.slice(2)}
            </blockquote>
          );
        }

        return (
          <p
            key={i}
            className="text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg"
          >
            {text}
          </p>
        );
      })}
    </div>
  );
}