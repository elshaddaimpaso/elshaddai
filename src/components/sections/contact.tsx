"use client";

import { useState } from "react";
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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Could not reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

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
            {submitted ? (
              <p className="py-8 text-center text-accent-emerald">
                Thank you! Your message was sent. I&apos;ll get back to you soon.
              </p>
            ) : (
              <>
                {error && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
                    {error}
                  </p>
                )}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    disabled={loading}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 disabled:opacity-60 dark:border-slate-700 dark:bg-navy-800"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={loading}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 disabled:opacity-60 dark:border-slate-700 dark:bg-navy-800"
                    placeholder="you@example.com"
                  />
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
                    disabled={loading}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 disabled:opacity-60 dark:border-slate-700 dark:bg-navy-800"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" variant="accent" className="w-full" disabled={loading}>
                  <Send className="h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
