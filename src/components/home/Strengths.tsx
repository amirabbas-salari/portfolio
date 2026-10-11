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
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            kicker="Strengths"
            title="How I Work"
            aside={<span className="label">{"// Operating mode"}</span>}
          />
        </Reveal>

        <div className="mt-12 grid gap-px bg-line/70 md:grid-cols-3">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <Reveal key={strength.number} delay={index * 0.06}>
                <article className="group relative h-full bg-ink p-8 transition-colors duration-300 hover:bg-ink-2">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center border border-cream/20 text-sepia transition-colors duration-300 group-hover:border-cream/45">
                      <Icon size={17} strokeWidth={1.7} />
                    </span>

                    <span className="label text-cream-3">
                      {strength.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-[21px] font-semibold leading-snug tracking-[-0.015em] text-cream">
                    {strength.title}
                  </h3>

                  <p className="mt-4 text-[13.5px] leading-7 text-cream-3">
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
