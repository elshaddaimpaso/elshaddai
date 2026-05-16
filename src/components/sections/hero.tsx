"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 grid-pattern"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <motion.div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent-cyan/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent-emerald/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="section-container relative flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-cyan"
          >
            Kamuzu University of Health Sciences
          </motion.p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-slate-900 dark:text-white">{siteConfig.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-gradient sm:text-xl">
            MBBS Student | Health Tech Enthusiast | AI in Healthcare
          </p>
          <p className="mx-auto mt-6 max-w-xl text-slate-600 dark:text-slate-400 lg:mx-0">
            Passionate about the future of medicine through artificial intelligence,
            clinical research, and healthcare innovation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button variant="accent" size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="/El-shaddai_Mpaso's_CV.pdf" download="El-shaddai-Mpaso-CV.pdf">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative h-72 w-72 animate-float sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-emerald/30 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-accent-cyan/30 shadow-glow">
              <Image
                src="/profile.png"
                alt={`Portrait of ${siteConfig.name}`}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ y: { repeat: Infinity, duration: 2 }, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-accent-cyan"
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
