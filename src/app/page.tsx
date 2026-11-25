import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Business } from "@/components/sections/business";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Website",
          name: "El-shaddai Mpaso",
          alternateName: "Storyyteller",
          url: "https://elshaddaimpaso.vercel.app/",
        }),
      }}
       />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Business />
      <Experience />
      <Certifications />
      <Blog />
      <Contact />
    </>
  );
}
