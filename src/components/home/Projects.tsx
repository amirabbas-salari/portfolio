"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-28"
    >
      {/* Decorative dots */}
      <div className="dots pointer-events-none absolute left-0 top-16 hidden h-14 w-14 opacity-70 lg:block" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center justify-between gap-6">
          <div className="section-title">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              <span className="text-violet-400">#</span>
              projects
            </h2>

            <div className="hidden h-px w-32 bg-violet-400/70 sm:block" />
          </div>

          <Link
            href="/projects/projects"
            className="group flex shrink-0 items-center gap-2 text-xs text-white transition-colors hover:text-violet-400"
          >
            View all
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}