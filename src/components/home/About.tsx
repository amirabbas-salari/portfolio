"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import { profile } from "@/data/profile";
import { languages } from "@/data/languages";

const rows = [
  { label: "Name", value: profile.name },
  { label: "Role", value: profile.role },
  { label: "Focus", value: "Computer Vision · LLM · Backend" },
  { label: "Base", value: profile.location },
  { label: "Status", value: "Open to opportunities" },
];

const traits = [
  "Problem Solver",
  "Team Player",
  "Fast Learner",
  "Curious Mind",
  "Tech Enthusiast",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-line/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            kicker="About Me"
            title={
              <>
                More About
                <br />
                My Journey
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Text + traits */}
          <Reveal>
            <p className="font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-cream sm:text-[28px]">
              I&apos;m Amir Abbas Salari, a Computer Engineering student at
              Shahid Bahonar University of Kerman.
            </p>

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-cream-3">
              <p>
                I&apos;m passionate about building useful software, exploring AI
                and computer vision, and learning new technologies.
              </p>

              <p>
                I enjoy working on real-world problems and turning ideas into
                products — from production APIs and dashboards to real-time
                vision systems.
              </p>
            </div>

            {/* Poster-style dashed trait list */}
            <ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {traits.map((trait) => (
                <li
                  key={trait}
                  className="flex items-center gap-3 border-b border-line/60 pb-3"
                >
                  <span className="h-1 w-1 shrink-0 bg-sepia" />

                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-cream-2">
                    {trait}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/resume"
              className="group mt-10 inline-flex items-center gap-2 border-b border-cream/30 pb-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-sepia hover:text-sepia"
            >
              Learn More About Me
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          {/* Dossier */}
          <Reveal delay={0.1}>
            <div className="relative border border-line bg-ink-2/50 p-7">
              <div className="flex items-center justify-between">
                <p className="label">{"// Dossier"}</p>

                <span className="label text-cream-3">
                  v{new Date().getFullYear()}
                </span>
              </div>

              <div className="mt-6 divide-y divide-line/70">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-5 py-3.5"
                  >
                    <span className="label shrink-0 text-cream-3">
                      {row.label}
                    </span>

                    <span className="text-right text-sm text-cream">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-8 border-t border-line/70 pt-6">
                <p className="label">{"// Languages"}</p>

                <div className="mt-6 space-y-4">
                  {languages.map((language) => (
                    <div
                      key={language.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-sm text-cream">
                        {language.name}
                      </span>

                      <div className="flex items-center gap-3">
                        <span className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((step) => (
                            <span
                              key={step}
                              className={`h-[3px] w-[7px] ${
                                step <= language.proficiency
                                  ? "bg-sepia"
                                  : "bg-cream/12"
                              }`}
                            />
                          ))}
                        </span>

                        <span className="label w-[86px] text-right text-cream-3">
                          {language.level.split(" ")[0]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
