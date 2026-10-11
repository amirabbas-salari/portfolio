"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative border-t border-line/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            kicker="Featured Projects"
            title={
              <>
                Some Things
                <br />
                I&apos;ve Built
              </>
            }
            aside={
              <Link
                href="/projects/projects"
                className="group inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream-2 transition-colors duration-300 hover:text-cream"
              >
                View All Projects
                <ArrowRight
                  size={13}
                  className="text-sepia transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            }
          />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 max-w-2xl text-[15px] leading-8 text-cream-3">
            Here are a few selected projects that showcase my skills and
            interests in web development, AI and computer vision.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px bg-line/70 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              variant="flat"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
