import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function HomeContactCta() {
  const email = (siteConfig as { email?: string }).email;

  return (
    <section className="section-padding bg-slate-900 text-white dark:bg-slate-950">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Contact
          </p>
          <h2 className="mt-4 text-balance font-sora text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s build something worth telling.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Whether you are a mentor, collaborator, recruiter, or fellow builder, I
            would love to hear from you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <Mail className="h-4 w-4" />
                {email}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}