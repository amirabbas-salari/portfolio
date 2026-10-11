"use client";

import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream-2 transition-colors hover:text-cream"
          >
            <ArrowLeft
              size={13}
              className="text-sepia transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to base
          </Link>

          <span className="label text-cream-3">
            {String(projects.length).padStart(2, "0")} builds
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-sepia/[0.13] blur-[150px]" />

          <div className="tech-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(100%_70%_at_50%_0%,#000,transparent_75%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <p className="label">{"// Archive"}</p>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,8vw,5rem)] font-semibold leading-[0.94] tracking-[-0.03em]">
            <span className="text-sepia">All projects.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-[15px] leading-8 text-cream-3">
            A collection of projects I&apos;ve built while exploring
            full-stack development, backend engineering, computer vision and
            modern web technologies.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 border border-cream/35 px-6 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-ink"
            >
              Start a project
            </a>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream-2 transition-colors duration-300 hover:border-cream/45 hover:text-cream"
            >
              One-screen résumé
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
