import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-void/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition-colors hover:text-chalk"
          >
            <ArrowLeft
              size={14}
              className="text-cyan transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to portfolio
          </Link>

          <span className="label text-dim">Case study</span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan/[0.07] blur-[150px]" />

          <div className="absolute bottom-0 right-0 h-[420px] w-[620px] rounded-full bg-magenta/[0.06] blur-[150px]" />

          <div className="tech-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(100%_70%_at_50%_0%,#000,transparent_75%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="label text-cyan/70">
            {`// ${project.subtitle}`}
          </p>

          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,7vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.04em]">
            <span className="chrome-text">{project.title}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-mist/80">
            {project.longDescription}
          </p>

          {/* Meta */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="notch-sm flex items-center gap-2 border border-line bg-panel/60 px-3 py-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  project.status === "Completed" ? "bg-mist" : "bg-magenta"
                }`}
              />

              <span className="label text-mist/80">{project.status}</span>
            </span>

            <span className="label text-dim">
              {project.technologies.length} technologies
            </span>

            <span className="label text-dim">
              {project.features.length} features
            </span>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group notch-sm inline-flex items-center gap-2 border border-cyan/45 bg-cyan/10 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk transition-all duration-300 hover:border-cyan hover:bg-cyan/20 hover:shadow-[0_0_34px_-8px_rgba(53,230,255,0.65)]"
              >
                Live demo
                <ExternalLink
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="notch-sm inline-flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-all duration-300 hover:border-cyan/45 hover:text-chalk"
              >
                <FaGithub size={14} />
                Source code
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {/* Main image */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="hud-lg relative overflow-hidden bg-panel p-2">
            <div className="relative aspect-[16/9] overflow-hidden bg-panel">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="duotone object-cover"
                />
              ) : (
                <div className="tech-grid absolute inset-0 opacity-60" />
              )}

              <span className="duotone-tint" />

              <div className="scanlines absolute inset-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-line/70 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_360px]">
            {/* Left */}
            <div>
              <p className="label text-cyan/70">[ Overview ]</p>

              <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-chalk sm:text-4xl">
                About the project
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-mist/80">
                {project.longDescription}
              </p>

              {/* Features */}
              <div className="mt-20">
                <p className="label text-cyan/70">[ Features ]</p>

                <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-chalk">
                  What I built
                </h2>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="hud hud-quiet group flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center notch-sm border border-cyan/30 bg-cyan/[0.07] text-cyan">
                        <Check size={15} />
                      </span>

                      <span className="text-sm text-mist transition-colors duration-300 group-hover:text-chalk">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-28 space-y-4">
                <div className="hud hud-quiet p-6">
                  <p className="label text-cyan/70">[ Stack ]</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="notch-sm border border-line bg-white/[0.02] px-3 py-2 font-mono text-[10px] tracking-wide text-mist/80"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/#projects"
                  className="hud hud-quiet group flex items-center justify-between p-6 transition-colors duration-300 hover:border-cyan/40"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition-colors group-hover:text-chalk">
                    Back to projects
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan"
                  />
                </Link>

                <a
                  href={`mailto:${profile.email}`}
                  className="hud hud-quiet group block p-6 transition-colors duration-300 hover:border-cyan/40"
                >
                  <p className="label text-cyan/70">[ Discuss ]</p>

                  <p className="mt-4 text-sm text-mist transition-colors group-hover:text-chalk">
                    Want something similar? Let&apos;s talk.
                  </p>

                  <span className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-chalk">
                    {profile.email}
                    <ArrowUpRight
                      size={14}
                      className="text-cyan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hud hud-quiet group flex items-center justify-between p-6 transition-colors duration-300 hover:border-cyan/40"
                  >
                    <span className="flex items-center gap-3 text-sm text-mist transition-colors group-hover:text-chalk">
                      <FaGithub size={15} />
                      Source code
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="text-dim transition-all duration-300 group-hover:text-cyan"
                    />
                  </a>
                ) : null}

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hud hud-quiet group flex items-center justify-between p-6 transition-colors duration-300 hover:border-cyan/40"
                >
                  <span className="flex items-center gap-3 text-sm text-mist transition-colors group-hover:text-chalk">
                    <FaLinkedin size={15} />
                    LinkedIn
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-dim transition-all duration-300 group-hover:text-cyan"
                  />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
