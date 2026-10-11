"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-line/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            index="02"
            title="Capabilities"
            hint={`// ${skillCategories.length} domains`}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <article className="hud hud-quiet brackets group relative h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <span className="label text-cyan/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="label text-dim">/ {category.skills.length}</span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-chalk transition-colors duration-300 group-hover:text-cyan">
                  {category.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-mist/70">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-line/60 pt-5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="notch-sm border border-line bg-white/[0.02] px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-mist/80 transition-colors duration-300 group-hover:border-cyan/25 group-hover:text-chalk"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
