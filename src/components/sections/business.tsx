"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  Laptop,
  Zap,
  Headphones,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { services, siteConfig } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Download,
  Laptop,
  Zap,
  Headphones,
  Settings,
};

export function Business() {
  return (
    <section id="business" className="section-padding bg-slate-50/50 dark:bg-navy-800/30">
      <div className="section-container">
        <SectionHeading
          label="Entrepreneurship"
          title={siteConfig.techCompany}
          description="Professional laptop repair, software installation, and digital support across Malawi."
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center text-slate-600 dark:text-slate-400"
        >
          Through <strong className="text-slate-900 dark:text-white">{siteConfig.techCompany}</strong>,
          I provide reliable software installation, laptop repair, troubleshooting, device
          optimization, and digital assistance to students and professionals across Malawi —
          building entrepreneurial skills alongside my medical education.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Laptop;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center transition-transform hover:-translate-y-1"
              >
                <Icon className="mx-auto h-10 w-10 text-accent-cyan" />
                <h3 className="mt-4 font-display font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="accent" size="lg" asChild>
            <Link href="#contact">Request Tech Support</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
