"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Brain,
  Microscope,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { stats, journey, siteConfig } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Briefcase,
  Brain,
  Microscope,
};

export function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-navy-800/30">
      <div className="section-container">
        <SectionHeading
          label="About"
          title="Building at the Intersection of Medicine & Technology"
          description="A future physician passionate about AI, clinical research, and healthcare innovation in Africa."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-slate-600 dark:text-slate-400"
          >
            <p>
              I am a first-year MBBS student at{" "}
              <strong className="text-slate-900 dark:text-white">
                Kamuzu University of Health Sciences (KUHeS)
              </strong>{" "}
              in Malawi, pursuing medicine with a deep interest in how artificial
              intelligence and digital health can transform patient care across Africa.
            </p>
            <p>
              Beyond the classroom, I bring an entrepreneurial mindset as founder of{" "}
              <strong className="text-slate-900 dark:text-white">
                {siteConfig.techCompany}
              </strong>{" "}
              — solving real problems through laptop repair, software installation, and IT
              support for students and professionals.
            </p>
            <p>
              My vision is to become a physician-scientist and health-tech innovator who
              bridges clinical practice, rigorous research, and technology — contributing
              to evidence-based medicine and context-appropriate digital health solutions
              for resource-limited settings.
            </p>
            <blockquote className="border-l-4 border-accent-cyan pl-4 italic text-slate-700 dark:text-slate-300">
              &ldquo;A future physician building at the intersection of medicine,
              artificial intelligence, clinical research, and healthcare innovation in
              Africa.&rdquo;
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.icon] ?? GraduationCap;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 text-center transition-transform hover:-translate-y-1"
                >
                  <Icon className="mx-auto h-8 w-8 text-accent-cyan" />
                  <p className="mt-3 font-display text-2xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center font-display text-xl font-semibold">
            My Journey
          </h3>
          <div className="relative space-y-0">
            {journey.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent-cyan bg-accent-cyan/10 text-xs font-bold text-accent-cyan">
                    {i + 1}
                  </div>
                  {i < journey.length - 1 && (
                    <div className="mt-2 h-full w-0.5 flex-1 bg-gradient-to-b from-accent-cyan/50 to-transparent" />
                  )}
                </div>
                <div className="glass-card flex-1 p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                    {item.year}
                  </span>
                  <h4 className="mt-1 font-display font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
