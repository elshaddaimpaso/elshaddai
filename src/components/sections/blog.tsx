"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Insights"
          title="Blog & Thought Leadership"
          description="Sharing perspectives on AI, medicine, research, and student entrepreneurship."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group cursor-pointer p-6 transition-all hover:-translate-y-1 hover:border-accent-cyan/30"
            >
              <Badge variant="secondary">{post.category}</Badge>
              <h3 className="mt-4 font-display text-lg font-semibold group-hover:text-accent-cyan">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-accent-cyan opacity-0 transition-opacity group-hover:opacity-100">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
