import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/ui/section-label";
import { HomeContactCta } from "@/components/home/contact-cta";
import { Research } from "@/components/sections/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research interests in AI in medicine, clinical research, and context-appropriate public health technology for African healthcare systems.",
  openGraph: {
    title: "Research — El-shaddai Mpaso",
    description:
      "Research interests in AI in medicine, clinical research, and context-appropriate public health technology.",
    type: "article",
  },
};

const RESEARCH_VALUES = [
  {
    number: "01",
    title: "Clinical relevance first",
    description:
      "Every question I care about starts from a clinical or public-health need — not from what a model can technically do.",
  },
  {
    number: "02",
    title: "Context, not copy-paste",
    description:
      "Tools and models that work in high-resource hospitals do not automatically work here. Context is part of the method.",
  },
  {
    number: "03",
    title: "Evidence over enthusiasm",
    description:
      "AI in medicine is worth taking seriously because it is also worth being careful about. I aim for honest evidence, not hype.",
  },
] as const;

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Questions I want to help answer."
        description="My research interests sit at the intersection of clinical evidence, health data, and context-appropriate technology for African healthcare systems."
      />

      {/* Research philosophy — editorial prologue */}
      <section className="section-padding border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="section-container">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                How I approach research
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl">
                My research interests come out of clinical training, not out of
                technology for its own sake. I am drawn to questions where
                careful evidence and thoughtful engineering could actually
                change how care is delivered — especially in settings that are
                usually invisible in mainstream medical-AI literature.
              </p>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                Below is a closer look at the questions I keep returning to, the
                areas I am reading and writing around, and the directions I am
                actively exploring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research values strip */}
      <section className="border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="section-container py-12 md:py-16">
          <div className="grid gap-8 sm:grid-cols-3">
            {RESEARCH_VALUES.map((value) => (
              <div
                key={value.number}
                className="border-t border-slate-200 pt-6 dark:border-slate-800"
              >
                <span className="text-xs font-semibold tracking-[0.18em] text-slate-400 dark:text-slate-500">
                  {value.number}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-slate-900 dark:text-slate-100">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Research section — preserved as-is */}
      <SectionLabel>Areas of interest</SectionLabel>
      <Research />

      <HomeContactCta />
    </>
  );
}