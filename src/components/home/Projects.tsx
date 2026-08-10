"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-white/[0.06] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
              Selected work
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Projects I&apos;ve built.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500">
            A selection of projects that represent my experience in backend
            development, full-stack applications and software engineering.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* More projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="/projects"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
          >
            View all projects

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}