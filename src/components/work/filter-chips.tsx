import Link from "next/link";
import { cn } from "@/lib/utils";

interface FilterChipsProps {
  categories: string[];
  active: string;
}

export function FilterChips({ categories, active }: FilterChipsProps) {
  const items = ["All", ...categories];

  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap items-center gap-2"
    >
      {items.map((cat) => {
        const isActive = cat === active;
        const href =
          cat === "All"
            ? "/work"
            : `/work?category=${encodeURIComponent(cat)}`;

        return (
          <Link
            key={cat}
            href={href}
            role="tab"
            aria-selected={isActive}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                : "border border-slate-300 text-slate-700 hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800"
            )}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}