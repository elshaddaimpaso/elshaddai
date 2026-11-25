import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Research } from "@/components/sections/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research interests in AI in medicine, clinical research, and context-appropriate public health technology.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Questions I want to help answer."
        description="My research interests sit at the intersection of clinical evidence, health data, and context-appropriate technology for African healthcare systems."
      />
      <Research />
    </>
  );
}