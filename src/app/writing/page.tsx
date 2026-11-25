import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ArticleCard } from "@/components/writing/article-card";
import { HomeContactCta } from "@/components/home/contact-cta";
import {
  getAllArticles,
  sortArticlesByDate,
} from "@/lib/article-utils";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays, reflections, and storytelling by El-shaddai Mpaso — notes from medicine, technology, and life.",
  openGraph: {
    title: "Writing — El-shaddai Mpaso",
    description:
      "Essays, reflections, and storytelling — notes from medicine, technology, and life.",
    type: "website",
  },
};

export default function WritingPage() {
  const all = sortArticlesByDate(getAllArticles());

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes from medicine, technology, and life."
        description="Reflections, essays, and stories — some polished, some still taking shape."
      />

      <section className="section-padding">
        <div className="section-container">
          {all.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {all.map((article, i) => (
                <ArticleCard key={`${article.title}-${i}`} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      <HomeContactCta />
    </>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
        Writing in progress
      </p>
      <h2 className="mt-4 text-balance font-sora text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
        The first pieces are still taking shape.
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
        I am working on essays and reflections about medicine, technology, and
        the people who sit between them. When they are ready, they will appear
        here — no rush, no filler.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/work"
          className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"
        >
          Explore my work instead
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}