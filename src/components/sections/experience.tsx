"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education, experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Experience & Education"
          title="Academic & Professional Journey"
          description="Building clinical expertise alongside real-world entrepreneurial experience."
        />

        <div className="mx-auto max-w-3xl">
          <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-semibold">
            <GraduationCap className="h-5 w-5 text-accent-cyan" />
            Education
          </h3>
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative border-l-2 border-accent-cyan/50 pb-10 pl-8 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-accent-cyan bg-[hsl(var(--background))]" />
              <span className="text-sm font-medium text-accent-cyan">{edu.period}</span>
              <h4 className="mt-1 font-display text-lg font-semibold">{edu.degree}</h4>
              <p className="text-slate-700 dark:text-slate-300">{edu.institution}</p>
              <p className="text-sm text-slate-500">{edu.location}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {edu.description}
              </p>
            </motion.div>
          ))}

          <h3 className="mb-6 mt-12 flex items-center gap-2 font-display text-lg font-semibold">
            <Briefcase className="h-5 w-5 text-accent-emerald" />
            Experience
          </h3>
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative border-l-2 border-accent-emerald/50 pb-10 pl-8 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-accent-emerald bg-[hsl(var(--background))]" />
              <span className="text-sm font-medium text-accent-emerald">{exp.period}</span>
              <h4 className="mt-1 font-display text-lg font-semibold">{exp.role}</h4>
              <p className="text-slate-700 dark:text-slate-300">{exp.company}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
