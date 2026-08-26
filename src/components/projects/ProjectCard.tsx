"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group overflow-hidden border border-zinc-500 bg-[#282c33] transition-colors duration-300 hover:border-violet-400/70"
    >
      {/* Image */}
      <Link
        href={`/projects/${project.slug}`}
        className="block"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-zinc-500 bg-zinc-900">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-xs text-zinc-600">
                Project Preview
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Technologies */}
      <div className="border-b border-zinc-500 px-3 py-2">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="text-[10px] text-zinc-500"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-base font-bold text-white transition-colors group-hover:text-violet-400">
            {project.title}
          </h3>
        </Link>

        <p className="mt-3 min-h-[42px] text-xs leading-6 text-zinc-500">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 border border-violet-400 px-3 py-1.5 text-[10px] text-white transition-colors hover:bg-violet-400/10"
          >
            View
            <ArrowRight size={12} />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-500 px-3 py-1.5 text-[10px] text-zinc-400 transition-colors hover:border-zinc-300 hover:text-white"
            >
              Live
              <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}