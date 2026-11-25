import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="section-container">
      <div className="border-t border-slate-200 pt-10 dark:border-slate-800 md:pt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          {children}
        </p>
      </div>
    </div>
  );
}