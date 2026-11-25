import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  formatArticleDate,
  getArticleReadingTime,
  getArticleSlug,
  type ArticleLike,
} from "@/lib/article-utils";

interface ArticleCardProps {
  article: ArticleLike;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const cover = article.coverImage;
  const reading = getArticleReadingTime(article);
  const date = formatArticleDate(article.date);

  return (
    <Link
      href={`/writing/${getArticleSlug(article)}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-600"
    >
      {cover && (
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-900">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            unoptimized
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
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

        <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100">
          {article.title}
        </h3>

        {article.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {article.excerpt}
          </p>
        )}

        <div className="mt-6 flex items-center justify-end pt-2">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 dark:text-slate-300">
            Read
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}