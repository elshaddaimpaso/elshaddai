import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  imageSrc?: string; // Added optional background image prop
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  imageSrc,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 pt-32 dark:border-slate-800 md:pt-40">
      {/* Background Image Layer */}
      {imageSrc && (
        <>
          <div
            className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
          {/* Theme-aware Overlay to ensure text readability */}
          <div className="absolute inset-0 z-0 bg-white/85 backdrop-blur-sm dark:bg-slate-950/85" />
        </>
      )}

      {/* Content Layer */}
      <div className="section-container relative z-10 max-w-4xl pb-16 md:pb-24">
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