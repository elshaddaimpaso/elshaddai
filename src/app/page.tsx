import type { Metadata } from "next";
import { HomeHero } from "@/components/home/hero";
import { HomeFeaturedWork } from "@/components/home/featured-work";
import { HomeAboutTeaser } from "@/components/home/about-teaser";
import { HomeFocusAreas } from "@/components/home/focus-areas";
import { HomeWritingTeaser } from "@/components/home/writing-teaser";
import { HomeContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "El-shaddai Mpaso — Medicine, Technology, Storytelling",
  description:
    "El-shaddai Mpaso, also known as Storyyteller — MBBS student, health-tech builder, and storyteller working at the intersection of medicine, technology, and the stories that make medicine human.",
  openGraph: {
    title: "El-shaddai Mpaso — Medicine, Technology, Storytelling",
    description:
      "MBBS student, health-tech builder, and storyteller working at the intersection of medicine, technology, and the stories that make medicine human.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeaturedWork />
      <HomeAboutTeaser />
      <HomeFocusAreas />
      <HomeWritingTeaser />
      <HomeContactCta />
    </>
  );
}