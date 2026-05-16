"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Progress } from "@/components/ui/progress";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Medical, Technical & Future-Focused"
          description="A growing skill set spanning clinical sciences, technology, and healthcare innovation."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <ul className="mt-6 space-y-5">
                {category.skills.map((skill, si) => (
                  <li key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="font-medium text-accent-cyan">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} delay={si * 100 + ci * 150} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
