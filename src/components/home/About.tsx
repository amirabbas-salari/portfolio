"use client";

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

export default function About() {
  return (
    <section id="about" className="relative border-t border-line/70 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading index="01" title="About" hint="// profile" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Text */}
          <Reveal>
            <p className="font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-chalk sm:text-3xl">
              Hello, I&apos;m Amir Abbas — a Computer Engineering student
              building{" "}
              <span className="text-cyan">intelligent systems</span> and
              scalable full-stack products.
            </p>

            <div className="mt-8 space-y-5 text-sm leading-8 text-mist/80">
              <p>
                I&apos;m a Computer Engineering student and developer focused
                on building modern web applications, backend systems and
                intelligent software.
              </p>

              <p>
                My main interests are Python, Django, React, artificial
                intelligence and computer vision. I enjoy turning complex
                problems into practical and maintainable software.
              </p>

              <p>
                I&apos;m constantly learning new technologies and looking for
                opportunities to work on meaningful projects.
              </p>
            </div>
          </Reveal>

          {/* Dossier panel */}
          <Reveal delay={0.1}>
            <div className="hud hud-quiet relative p-6">
              <div className="flex items-center justify-between">
                <p className="label text-cyan/70">[ Dossier ]</p>
                <span className="label text-dim">v{new Date().getFullYear()}</span>
              </div>

              <div className="mt-6 divide-y divide-line/60">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-5 py-3.5"
                  >
                    <span className="label shrink-0 text-dim">{row.label}</span>

                    <span className="text-right text-sm text-chalk">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-7 border-t border-line/60 pt-6">
                <p className="label text-cyan/70">[ Languages ]</p>

                <div className="mt-5 space-y-4">
                  {languages.map((language) => (
                    <div
                      key={language.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-sm text-chalk">
                        {language.name}
                      </span>

                      <div className="flex items-center gap-3">
                        <span className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((step) => (
                            <span
                              key={step}
                              className={`h-[3px] w-[7px] ${
                                step <= language.proficiency
                                  ? "bg-cyan/80"
                                  : "bg-white/10"
                              }`}
                            />
                          ))}
                        </span>

                        <span className="label w-[86px] text-right text-dim">
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
