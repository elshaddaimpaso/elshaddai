import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/ui/section-label";
import { HomeContactCta } from "@/components/home/contact-cta";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Skills } from "@/components/sections/skills";
import { Business } from "@/components/sections/business";

export const metadata: Metadata = {
  title: "About",
  description:
    "El-shaddai Mpaso — MBBS student at Kamuzu University of Health Sciences, health-tech builder, researcher, and founder of Storyyteller Enterprise.",
  openGraph: {
    title: "About — El-shaddai Mpaso",
    description:
      "MBBS student, health-tech builder, researcher, and founder of Storyyteller Enterprise.",
    type: "profile",
  },
};

const QUICK_FACTS = [
  {
    label: "Studying",
    value: "MBBS at Kamuzu University of Health Sciences",
  },
  {
    label: "Building",
    value: "Health technology, AI in medicine, and research tooling",
  },
  {
    label: "Founder",
    value: "Storyyteller Enterprise — technical and creative services",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Medicine, technology, and the space between."
        description="I am an MBBS student building toward a career at the intersection of clinical practice, AI, and healthcare innovation — with storytelling as the thread that ties it together."
      />

      {/* At a glance */}
      <section className="border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="section-container py-12 md:py-16">
          <dl className="grid gap-8 sm:grid-cols-3">
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-800 dark:text-slate-200 sm:text-base">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Existing About section — preserved as-is */}
      <About />

      <SectionLabel>Trajectory</SectionLabel>
      <Experience />

      <SectionLabel>Credentials</SectionLabel>
      <Certifications />

      <SectionLabel>Capabilities</SectionLabel>
      <Skills />

      <SectionLabel>Enterprise</SectionLabel>
      <Business />

      <HomeContactCta />
    </>
  );
}