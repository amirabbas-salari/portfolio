"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-zinc-600/60 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="section-title flex items-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            <span className="text-violet-400">#</span>
            about-me
          </h2>

          <div className="ml-8 hidden h-px w-48 bg-zinc-600/70 sm:block" />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Hello, I&apos;m Amir Abbas!
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
              I&apos;m a Computer Engineering student and Full-Stack
              Developer focused on building modern web applications,
              backend systems and intelligent software.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
              My main interests are Python, Django, React, artificial
              intelligence and computer vision. I enjoy turning complex
              problems into practical and maintainable software.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
              I&apos;m constantly learning new technologies and looking
              for opportunities to work on meaningful projects.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center border border-violet-400 px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-violet-400/10"
            >
              Read more
            </a>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative hidden min-h-[280px] lg:block"
          >
            <div className="absolute right-16 top-5 h-32 w-32 border border-violet-400/70" />

            <div className="absolute right-28 top-20 h-24 w-24 border border-violet-400/40" />

            <div className="dots absolute bottom-5 right-0 h-20 w-20" />

            <div className="absolute bottom-12 left-12 h-px w-28 bg-zinc-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}