import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with El-shaddai Mpaso — for collaboration, mentorship, speaking, or a conversation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk."
        description="Whether you are a mentor, collaborator, recruiter, or fellow builder, I would love to hear from you."
        imageSrc="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2000&auto=format&fit=crop"
      />
      <Contact />
    </>
  );
}