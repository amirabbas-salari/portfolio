"use client";

import { MapPin } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import { education } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative border-t border-line/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading index="05" title="Education" hint="// academics" />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.08}>
              <article className="hud hud-quiet brackets group relative h-full p-8">
                <div className="flex items-start justify-between gap-6">
                  <span className="label text-cyan/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="label text-dim">In progress</span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-chalk sm:text-3xl">
                  {item.degree}
                </h3>

                <p className="mt-3 text-sm text-mist/80">{item.institution}</p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="notch-sm border border-cyan/25 bg-cyan/[0.06] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan/90">
                    {item.period}
                  </span>

                  <span className="label flex items-center gap-2 text-dim">
                    <MapPin size={12} className="text-cyan/70" />
                    {item.location}
                  </span>
                </div>

                {/* Timeline */}
                <div className="mt-10 border-t border-line/60 pt-7">
                  <div className="flex items-center justify-between">
                    <span className="label text-dim">
                      {item.period.split(" — ")[0]}
                    </span>

                    <span className="label text-dim">
                      {item.period.split(" — ")[1]}
                    </span>
                  </div>

                  <div className="mt-3 h-[3px] w-full bg-white/[0.06]">
                    <div className="h-full w-[82%] bg-gradient-to-r from-cyan via-violet/70 to-magenta/60" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Typographic side panel */}
          <Reveal delay={0.12}>
            <div className="hud hud-quiet relative flex h-full flex-col justify-between overflow-hidden p-8">
              <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />

              <div className="relative">
                <p className="label text-cyan/70">[ Field ]</p>

                <p className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-chalk">
                  Computer
                  <br />
                  <span className="chrome-text">Engineering</span>
                </p>
              </div>

              <div className="relative mt-12 space-y-3">
                {["Artificial Intelligence", "Computer Vision", "Software Engineering"].map(
                  (area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 border-t border-line/60 pt-3"
                    >
                      <span className="h-1 w-1 bg-cyan" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist/80">
                        {area}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
