"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  const totalTools = skillCategories.reduce(
    (sum, category) => sum + category.skills.length,
    0,
  );

  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* Knockout paper panel — the signature move from the poster */}
          <div className="paper paper-edge relative overflow-hidden">
            <div className="halftone pointer-events-none absolute inset-0 opacity-25" />

            <div className="relative px-6 py-14 sm:px-10 lg:px-14">
              <SectionHeading
                tone="paper"
                kicker="My Skills"
                title={
                  <>
                    Technologies
                    <br />
                    I Work With
                  </>
                }
                aside={
                  <span className="label label-paper">
                    {`// ${totalTools} tools · ${skillCategories.length} domains`}
                  </span>
                }
              />

              <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_2.2fr] lg:gap-14">
                <p className="text-[15px] leading-8 text-ink/75">
                  I have experience with a wide range of modern technologies
                  and tools, from web development to AI, computer vision and
                  embedded systems.
                </p>

                <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
                  {skillCategories.map((category, index) => (
                    <Reveal key={category.title} delay={index * 0.04}>
                      <div>
                        <div className="flex items-baseline gap-2.5 border-b border-ink/25 pb-2.5">
                          <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#6b5335]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3 className="font-display text-[15px] font-semibold leading-snug tracking-[-0.01em] text-ink">
                            {category.title}
                          </h3>
                        </div>

                        <ul className="mt-3.5 space-y-1.5">
                          {category.skills.map((skill) => (
                            <li
                              key={skill}
                              className="text-[13px] leading-6 text-ink/70"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
