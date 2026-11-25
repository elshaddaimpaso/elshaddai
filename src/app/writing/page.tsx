import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Blog } from "@/components/sections/blog";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays, reflections, and storytelling by El-shaddai Mpaso — notes from medicine, technology, and life.",
};

export default function WritingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes from medicine, technology, and life."
        description="Reflections, essays, and stories — some polished, some still taking shape."
      />
      <Blog />
    </>
  );
}