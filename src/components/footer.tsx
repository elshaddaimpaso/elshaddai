import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  // Optional: pull socials safely regardless of exact shape in siteConfig
  const socials: Record<string, string> =
    (siteConfig as unknown as { socials?: Record<string, string> }).socials ?? {};

  return (
    <footer className="border-t border-slate-200/60 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-950">
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-sora text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-900 dark:text-slate-100">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-900 dark:text-slate-100">
              Connect
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              )}
              {Object.entries(socials).map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm capitalize text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}