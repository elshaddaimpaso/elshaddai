"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center md:mb-16"
    >
      <span className="mb-3 inline-block rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent-cyan">
        {label}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
