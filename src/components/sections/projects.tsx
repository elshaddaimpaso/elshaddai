"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50/50 dark:bg-navy-800/30">
      <div className="section-container">
        <SectionHeading
          label="Projects"
          title="Initiative & Growth Potential"
          description="Exploring ideas at the frontier of medicine, technology, and entrepreneurship."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-500">
                {project.technologies.join(" · ")}
              </p>
              <div className="mt-5 flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github}>
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.demo}>
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
