"use client";

import { motion } from "framer-motion";
import { BookOpen, Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { certifications, currentlyLearning } from "@/lib/data";

const statusColors: Record<string, "default" | "emerald" | "secondary"> = {
  learning: "default",
  planned: "secondary",
  completed: "emerald",
  ongoing: "default",
};

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-slate-50/50 dark:bg-navy-800/30">
      <div className="section-container">
        <SectionHeading
          label="Learning"
          title="Certifications & Continuous Growth"
          description="Committed to lifelong learning across medicine, technology, and research."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card flex items-start gap-4 p-5"
            >
              <Award className="h-8 w-8 shrink-0 text-accent-cyan" />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-semibold">{cert.title}</h3>
                  <Badge variant={statusColors[cert.status] ?? "secondary"}>
                    {cert.status}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {cert.provider}
                </p>
                <p className="text-xs text-slate-500">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 glass-card p-8"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-accent-cyan" />
            <h3 className="font-display text-xl font-semibold">Currently Learning</h3>
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {currentlyLearning.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
