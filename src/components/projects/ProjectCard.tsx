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

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025]">
        <Link href={`/projects/${project.slug}`}>
          <div className="relative aspect-[16/10] overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-violet-950/30">
                <span className="text-sm text-zinc-600">
                  Project Preview
                </span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

            {/* Open icon */}
            <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="mt-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-400">
              {project.subtitle}
            </p>

            <Link href={`/projects/${project.slug}`}>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-zinc-300">
                {project.title}
              </h3>
              <span
                className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-wider ${
                    project.status === "Completed"
                    ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-400"
                    : "border-amber-400/20 bg-amber-400/5 text-amber-400"
                }`}
              >
                {project.status}
              </span>
            </Link>
          </div>


          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[11px] text-zinc-500"
            >
              {technology}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-white"
        >
          View case study

          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}