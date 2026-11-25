import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="section-padding border-b border-slate-200/60 pt-32 dark:border-slate-800 md:pt-40">
      <div className="section-container max-w-4xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {eyebrow}
          </p>
        )}
        <h1 className="text-balance font-sora text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}