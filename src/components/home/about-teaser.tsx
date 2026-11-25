import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeAboutTeaser() {
  return (
    <section className="section-padding border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="section-container">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm md:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
              <Image
                src="/profile.png"
                alt="Portrait of El-shaddai Mpaso"
                fill
                sizes="(max-width: 768px) 80vw, 400px"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              About
            </p>
            <h2 className="mt-3 text-balance font-sora text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:text-5xl">
              Three threads, one practice.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              I am an MBBS student building toward a career that treats clinical
              practice, technology, and storytelling as parts of the same work — not
              separate tracks. Medicine taught me to listen. Technology taught me to
              build. Storytelling taught me that both only matter when they reach real
              people.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
            >
              Read the full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}