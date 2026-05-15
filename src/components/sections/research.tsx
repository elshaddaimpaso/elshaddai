"use client";

import { motion } from "framer-motion";
import {
  Brain,
  FlaskConical,
  Globe,
  BarChart3,
  Stethoscope,
  Heart,
  Target,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { researchAreas, researchGoals } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  FlaskConical,
  Globe,
  BarChart3,
  Stethoscope,
  Heart,
};

export function Research() {
  return (
    <section id="research" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Research & Interests"
          title="Areas of Focus & Future Aspirations"
          description="Dedicated to advancing healthcare through research, data science, and innovation."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => {
            const Icon = iconMap[area.icon] ?? Brain;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card group p-6 transition-all hover:-translate-y-1 hover:border-accent-cyan/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan transition-colors group-hover:bg-accent-cyan/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-slate-900 dark:text-white">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8"
        >
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-accent-emerald" />
            <h3 className="font-display text-xl font-semibold">Research Goals</h3>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {researchGoals.map((goal, i) => (
              <li
                key={goal}
                className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-emerald" />
                {goal}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
