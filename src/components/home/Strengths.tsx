"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import { strengths } from "@/data/strengths";

export default function Strengths() {
  return (
    <section
      id="strengths"
      className="relative border-t border-line/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading index="06" title="Strengths" hint="// operating mode" />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <Reveal key={strength.number} delay={index * 0.08}>
                <article className="hud hud-quiet brackets group relative h-full p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center notch-sm border border-cyan/30 bg-cyan/[0.07] text-cyan">
                      <Icon size={17} strokeWidth={1.7} />
                    </span>

                    <span className="label text-cyan/60">
                      {strength.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-lg font-semibold tracking-tight text-chalk transition-colors duration-300 group-hover:text-cyan">
                    {strength.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-mist/70">
                    {strength.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
