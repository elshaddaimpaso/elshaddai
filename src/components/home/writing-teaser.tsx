import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/writing/article-card";
import { getFeaturedArticle } from "@/lib/article-utils";

export function HomeWritingTeaser() {
  const featured = getFeaturedArticle();

  if (!featured) {
    return (
      <section className="section-padding border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="section-container">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Writing
              </p>
              <h2 className="mt-3 text-balance font-sora text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:text-5xl">
                Notes from medicine, technology, and life.
              </h2>
            </div>

            <div>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                I write essays, reflections, and short pieces about the people
                and questions that sit between medicine and technology. Some are
                polished; some are still taking shape. New writing will appear
                here as it&apos;s ready.
              </p>
              <Link
                href="/writing"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
              >
                Visit the writing page
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Writing
            </p>
            <h2 className="mt-3 text-balance font-sora text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:text-5xl">
              Recent writing.
            </h2>
          </div>
          <Link
            href="/writing"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline dark:text-slate-300 dark:hover:text-slate-100"
          >
            All writing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 max-w-md">
          <ArticleCard article={featured} />
        </div>
      </div>
    </section>
  );
}