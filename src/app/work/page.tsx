import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects across health technology, research tooling, and digital products by El-shaddai Mpaso.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Selected projects and case studies."
        description="A curated selection of projects spanning health technology, research tooling, and digital products. Some are live; some are still in progress."
      />
      <Projects />
    </>
  );
}