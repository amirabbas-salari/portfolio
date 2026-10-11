"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="hud hud-quiet brackets group relative flex h-full flex-col overflow-hidden"
    >
      {/* Media */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-panel"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="duotone object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="tech-grid absolute inset-0 opacity-60" />
        )}

        <span className="duotone-tint" />

        <div className="scanlines absolute inset-0" />

        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />

        {/* Index */}
        <span className="label absolute left-4 top-4 border border-cyan/30 bg-void/70 px-2.5 py-2 text-cyan/80 backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Status */}
        <span className="absolute right-4 top-4 flex items-center gap-2 border border-line bg-void/70 px-2.5 py-2 backdrop-blur-sm">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              project.status === "Completed" ? "bg-mist" : "bg-magenta"
            }`}
          />

          <span className="label text-mist/80">{project.status}</span>
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="label text-cyan/60">{project.subtitle}</p>

        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-chalk transition-colors duration-300 group-hover:text-cyan">
          {project.title}
        </h3>

        <p className="mt-4 text-[13px] leading-6 text-mist/70">
          {project.description}
        </p>

        {/* Stack */}
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="font-mono text-[10px] tracking-wide text-dim"
            >
              {technology}
              <span className="pl-3 text-line-bright">/</span>
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-line/60 pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-chalk transition-colors hover:text-cyan"
          >
            Case study
            <ArrowUpRight
              size={13}
              className="text-cyan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-cyan"
            >
              Live
              <ExternalLink size={12} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
