import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Skills } from "@/components/sections/skills";
import { Business } from "@/components/sections/business";

export const metadata: Metadata = {
  title: "About",
  description:
    "El-shaddai Mpaso — MBBS student, health-tech builder, researcher, and founder of Storyyteller Enterprise.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Medicine, technology, and the space between."
        description="I am an MBBS student building toward a career at the intersection of clinical practice, AI, and healthcare innovation — with storytelling as the thread that ties it together."
      />
      <About />
      <Experience />
      <Certifications />
      <Skills />
      <Business />
    </>
  );
}