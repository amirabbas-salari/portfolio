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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream-2 transition-colors hover:text-cream"
          >
            <ArrowLeft
              size={13}
              className="text-sepia transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to portfolio
          </Link>

          <span className="label text-cream-3">Case study</span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-sepia/[0.13] blur-[150px]" />

          <div className="absolute bottom-0 right-0 h-[420px] w-[620px] rounded-full bg-cream/[0.04] blur-[150px]" />

          <div className="tech-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(100%_70%_at_50%_0%,#000,transparent_75%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <p className="label">{`// ${project.subtitle}`}</p>

          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,7vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.03em]">
            <span className="text-cream">{project.title}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-[15px] leading-8 text-cream-3">
            {project.longDescription}
          </p>

          {/* Meta */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2 border border-line px-4 py-2.5">
              <span
                className={`h-1.5 w-1.5 ${
                  project.status === "Completed" ? "bg-sepia" : "bg-cream"
                }`}
              />

              <span className="label text-cream-2">{project.status}</span>
            </span>

            <span className="label text-cream-3">
              {project.technologies.length} technologies
            </span>

            <span className="label text-cream-3">
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
                className="group inline-flex items-center gap-2 border border-cream/35 px-6 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-ink"
              >
                Live demo
                <ExternalLink
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream-2 transition-colors duration-300 hover:border-cream/45 hover:text-cream"
              >
                <FaGithub size={13} />
                Source code
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {/* Main image */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="relative border border-cream/20 p-2">
            <div className="relative aspect-[16/9] overflow-hidden bg-ink-2">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="sepia-img object-cover"
                />
              ) : (
                <div className="tech-grid absolute inset-0 opacity-60" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-line/70 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1fr_360px]">
            {/* Left */}
            <div>
              <p className="label">{"// Overview"}</p>

              <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-cream sm:text-4xl">
                About the project
              </h2>

              <p className="mt-7 max-w-3xl text-[15px] leading-8 text-cream-3">
                {project.longDescription}
              </p>

              {/* Features */}
              <div className="mt-20">
                <p className="label">{"// Features"}</p>

                <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-cream">
                  What I built
                </h2>

                <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="group flex items-start gap-4 border-t border-line/70 py-4"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-cream/20 text-sepia">
                        <Check size={13} />
                      </span>

                      <span className="text-[13.5px] leading-6 text-cream-2 transition-colors duration-300 group-hover:text-cream">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-28 space-y-4">
                <div className="border border-line bg-ink-2/50 p-6">
                  <p className="label">{"// Stack"}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-line px-3 py-2 font-mono text-[10px] tracking-wide text-cream-2"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/#projects"
                  className="group flex items-center justify-between border border-line bg-ink-2/50 p-6 transition-colors duration-300 hover:border-cream/40"
                >
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-cream-2 transition-colors group-hover:text-cream">
                    Back to projects
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-cream-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream"
                  />
                </Link>

                <a
                  href={`mailto:${profile.email}`}
                  className="group block border border-line bg-ink-2/50 p-6 transition-colors duration-300 hover:border-cream/40"
                >
                  <p className="label">{"// Discuss"}</p>

                  <p className="mt-4 text-sm leading-6 text-cream-3 transition-colors group-hover:text-cream-2">
                    Want something similar? Let&apos;s talk.
                  </p>

                  <span className="mt-4 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-cream">
                    {profile.email}
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-line bg-ink-2/50 p-6 transition-colors duration-300 hover:border-cream/40"
                  >
                    <span className="flex items-center gap-3 text-sm text-cream-2 transition-colors group-hover:text-cream">
                      <FaGithub size={14} />
                      Source code
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="text-cream-3 transition-all duration-300 group-hover:text-cream"
                    />
                  </a>
                ) : null}

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-line bg-ink-2/50 p-6 transition-colors duration-300 hover:border-cream/40"
                >
                  <span className="flex items-center gap-3 text-sm text-cream-2 transition-colors group-hover:text-cream">
                    <FaLinkedin size={14} />
                    LinkedIn
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-cream-3 transition-all duration-300 group-hover:text-cream"
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
