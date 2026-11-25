"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NAME = "El-shaddai Mpaso";
const ALIAS = "Storyyteller";
const TAGLINE =
  "An MBBS student, health-tech builder, and storyteller — working at the intersection of clinical practice, AI in healthcare, and the stories that make medicine human.";

export function HomeHero() {
  const reduce = useReducedMotion();
  const motionProps = reduce
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="section-container">
        <div className="grid items-end gap-12 md:grid-cols-[1.4fr_1fr]">
          {/* Left: identity + tagline + CTAs */}
          <div>
            <motion.p
              {...motionProps}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400"
            >
              {ALIAS} · Medicine · Technology · Storytelling
            </motion.p>

            <motion.h1
              {...motionProps}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-balance font-sora text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              {NAME}
            </motion.h1>

            <motion.p
              {...motionProps}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl"
            >
              {TAGLINE}
            </motion.p>

            <motion.div
              {...motionProps}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
              >
                View selected work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"
              >
                About me
              </Link>
            </motion.div>
          </div>

          {/* Right: quiet meta column */}
          <motion.div
            {...motionProps}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 border-t border-slate-200 pt-8 dark:border-slate-800 md:border-t-0 md:border-l md:pl-10 md:pt-0"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
                Currently
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                MBBS student at Kamuzu University of Health Sciences, exploring AI and
                technology for healthcare in African contexts.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
                Focus
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                Health technology, clinical research, digital products, and writing.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
                Also
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                Founder of Storyyteller Enterprise — technical and creative services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}