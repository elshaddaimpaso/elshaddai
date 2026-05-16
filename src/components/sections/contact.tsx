"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

const socialLinks = [
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
  { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.github, icon: Github, label: "GitHub" },
  { href: siteConfig.whatsapp, icon: MessageCircle, label: `WhatsApp ${siteConfig.phone}` },
  {
    href: siteConfig.whatsappAlt,
    icon: MessageCircle,
    label: `WhatsApp ${siteConfig.phoneAlt}`,
  },
];

export function Contact() {
  const [state, handleSubmit] = useForm("mrejnjze");

  return (
    <section id="contact" className="section-padding bg-slate-50/50 dark:bg-navy-800/30">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Open to collaborations, mentorship, internships, and research opportunities."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 dark:text-slate-400">
              Whether you&apos;re a mentor, collaborator, recruiter, or fellow innovator —
              I&apos;d love to hear from you. Reach out via email or connect on social media.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm transition-all hover:border-accent-cyan hover:bg-accent-cyan/5 dark:border-slate-700"
                >
                  <Icon className="h-5 w-5 text-accent-cyan" />
                  {label}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500">
              <Mail className="mr-2 inline h-4 w-4" />
              {siteConfig.email}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card space-y-5 p-8"
          >
            {state.succeeded ? (
              <p className="py-8 text-center text-accent-emerald">
                Thank you! Your message was sent. I&apos;ll get back to you soon.
              </p>
            ) : (
              <>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    disabled={state.submitting}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900"
                    placeholder="you@example.com"
                  />
                  <ValidationError field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    disabled={state.submitting}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900"
                    placeholder="Your name"
                  />
                  <ValidationError field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    disabled={state.submitting}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900"
                    placeholder="Your message..."
                  />
                  <ValidationError field="message" errors={state.errors} />
                </div>
                <Button type="submit" variant="accent" className="w-full" disabled={state.submitting}>
                  <Send className="h-4 w-4" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
