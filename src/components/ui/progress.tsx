"use client";

import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  className?: string;
  delay?: number;
}

export function Progress({ value, className, delay = 0 }: ProgressProps) {
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700", className)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-emerald transition-all duration-1000 ease-out"
        style={{
          width: `${Math.min(100, Math.max(0, value))}%`,
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}
