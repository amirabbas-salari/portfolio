"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="mx-auto max-w-7xl px-5 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />

          Back to home
        </Link>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
            Portfolio
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            All projects.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-500">
            A collection of projects I&apos;ve built while exploring
            full-stack development, backend engineering and modern web
            technologies.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14]"
                >
                  {/* Preview */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-zinc-950 to-black" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
                      {project.subtitle}
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      {project.title}
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-zinc-500">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[11px] text-zinc-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}