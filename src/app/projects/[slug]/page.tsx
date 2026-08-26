import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}


export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between rounded-2xl border border-white/[0.08] bg-black/60 px-5 backdrop-blur-xl">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />

              Back to portfolio
            </Link>

            <span className="hidden text-sm font-medium text-zinc-500 sm:block">
              Case Study
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-40">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
              {project.subtitle}
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
              {project.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              {project.longDescription}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                >
                  Live Demo

                  <ExternalLink
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.07]"
                >
                  <FaGithub size={15} />

                  FaGithub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main image */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.02]">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="text-zinc-600">
                  Project Preview
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-[1fr_360px]">
            
            {/* Left */}
            <div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
                  Overview
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  About the project
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-500">
                  {project.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mt-20">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
                  Features
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  What I built
                </h2>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                        <Check size={15} />
                      </span>

                      <span className="text-sm text-zinc-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-28">
                <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Technologies
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.07] bg-black/30 px-3 py-2 text-xs text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/#projects"
                  className="group mt-4 flex items-center justify-between rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
                >
                  <span className="text-sm text-zinc-400">
                    Back to projects
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-zinc-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}