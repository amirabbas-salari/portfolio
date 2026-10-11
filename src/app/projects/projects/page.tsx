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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-void/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition-colors hover:text-chalk"
          >
            <ArrowLeft
              size={14}
              className="text-cyan transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to base
          </Link>

          <span className="label text-dim">
            {String(projects.length).padStart(2, "0")} builds
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-cyan/[0.07] blur-[150px]" />

          <div className="tech-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(100%_70%_at_50%_0%,#000,transparent_75%)]" />

          <div className="grid-floor" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="label text-cyan/70">{"// Archive"}</p>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,8vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            <span className="chrome-text">All projects.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-mist/80">
            A collection of projects I&apos;ve built while exploring
            full-stack development, backend engineering, computer vision and
            modern web technologies.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="notch-sm inline-flex items-center gap-2 border border-cyan/45 bg-cyan/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk transition-all duration-300 hover:border-cyan hover:bg-cyan/20"
            >
              Start a project
            </a>

            <Link
              href="/resume"
              className="notch-sm inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-all duration-300 hover:border-cyan/45 hover:text-chalk"
            >
              One-screen résumé
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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
