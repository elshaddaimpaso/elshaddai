import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { HomeContactCta } from "@/components/home/contact-cta";
import {
  getAllArticles,
  sortArticlesByDate,
  getArticleSlug,
  formatArticleDate,
  getArticleReadingTime,
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
  const allArticles = sortArticlesByDate(getAllArticles());

  // If no articles, show the honest empty state
  if (allArticles.length === 0) {
    return (
      <>
        <PageHeader
          eyebrow="Writing"
          title="Notes from medicine, technology, and life."
          description="Reflections, essays, and stories — some polished, some still taking shape."
        />
        <section className="section-padding">
          <div className="section-container">
            <EmptyState />
          </div>
        </section>
        <HomeContactCta />
      </>
    );
  }

  // Split the first article (featured) from the rest (sidebar)
  const featuredArticle = allArticles[0];
  const sidebarArticles = allArticles.slice(1);

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes from medicine, technology, and life."
        description="Reflections, essays, and stories — some polished, some still taking shape."
      />

      <section className="section-padding border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* LEFT COLUMN: Featured Article */}
            <div className="lg:col-span-8">
              <Link href={`/writing/${getArticleSlug(featuredArticle)}`} className="group block">
                {/* Cover Image */}
                {featuredArticle.coverImage ? (
                  <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                    <Image
                      src={featuredArticle.coverImage.src}
                      alt={featuredArticle.coverImage.alt}
                      fill
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 dark:border-slate-800 dark:from-slate-900 dark:to-slate-800" />
                )}

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {featuredArticle.category && (
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {featuredArticle.category}
                    </span>
                  )}
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-500">
                    {formatArticleDate(featuredArticle.date)}
                    {featuredArticle.date && getArticleReadingTime(featuredArticle) ? " · " : ""}
                    {getArticleReadingTime(featuredArticle)}
                  </span>
                </div>

                {/* Title & Excerpt */}
                <h2 className="text-balance font-sora text-3xl font-semibold leading-[1.1] tracking-tight text-slate-900 transition-colors group-hover:text-slate-700 dark:text-slate-100 dark:group-hover:text-slate-300 sm:text-4xl md:text-5xl">
                  {featuredArticle.title}
                </h2>
                
                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </div>

            {/* RIGHT COLUMN: Sidebar List */}
            <aside className="lg:col-span-4 border-t border-slate-200 pt-8 dark:border-slate-800 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-8">
                Featured Articles
              </h3>

              {sidebarArticles.length > 0 ? (
                <div className="flex flex-col gap-10">
                  {sidebarArticles.map((article, i) => (
                    <Link 
                      key={i} 
                      href={`/writing/${getArticleSlug(article)}`}
                      className="group block"
                    >
                      {/* Small accent dot + Title */}
                      <div className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-[hsl(var(--ring))]" />
                        <div>
                          <h4 className="text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-slate-700 dark:text-slate-100 dark:group-hover:text-slate-300">
                            {article.title}
                          </h4>
                          
                          {/* Excerpt */}
                          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                            {article.excerpt}
                          </p>

                          {/* Meta */}
                          <p className="mt-3 text-[11px] font-medium text-slate-500 dark:text-slate-500">
                            {formatArticleDate(article.date)}
                            {article.date && getArticleReadingTime(article) ? " · " : ""}
                            {getArticleReadingTime(article)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center dark:border-slate-700">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    More writing is on the way.
                  </p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    Check back soon for new essays and reflections.
                  </p>
                </div>
              )}
              
              {sidebarArticles.length > 2 && (
                <button className="mt-10 w-full rounded-full border border-slate-300 py-2.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800">
                  View More
                </button>
              )}
            </aside>
            
          </div>
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