"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import { education } from "@/data/education";
import { experiences } from "@/data/experience";

const timeline = [
  ...education.map((item) => ({
    period: item.period,
    role: item.degree,
    organization: item.institution,
    detail:
      "Coursework and projects across Artificial Intelligence, Computer Vision and Software Engineering.",
    tag: "Education",
  })),
  ...experiences.map((item) => ({
    period: item.period,
    role: item.role,
    organization: item.organization,
    detail: item.detail,
    tag: "Experience",
  })),
];

const fields = [
  "Artificial Intelligence",
  "Computer Vision",
  "Software Engineering",
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative border-t border-line/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            kicker="Experience & Education"
            title={
              <>
                My
                <br />
                Timeline
              </>
            }
            aside={
              <span className="label">
                {`// ${timeline.length} milestones`}
              </span>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.45fr_0.55fr] lg:gap-14">
          {/* Timeline */}
          <ol>
            {timeline.map((item, index) => (
              <Reveal key={`${item.role}-${item.period}`} delay={index * 0.05}>
                <li className="grid gap-3 border-t border-line/70 py-7 sm:grid-cols-[150px_1fr] sm:gap-8">
                  <div>
                    <span className="flex items-center gap-2.5">
                      <span className="h-1 w-1 bg-sepia" />

                      <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-sepia">
                        {item.period}
                      </span>
                    </span>

                    <span className="label mt-3 block text-cream-3">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-cream sm:text-[22px]">
                      {item.role}
                    </h3>

                    <p className="mt-2.5 text-sm text-cream-2">
                      {item.organization}
                    </p>

                    <p className="mt-3 text-[13.5px] leading-7 text-cream-3">
                      {item.detail}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Statement panel — “Small steps / Big progress” */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col justify-between border border-line bg-ink-2/50 p-8">
              <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />

              <div className="relative">
                <p className="label">{"// Field"}</p>

                <p className="mt-8 font-display text-[34px] font-semibold leading-[1.02] tracking-[-0.02em] text-cream-3">
                  Small steps
                </p>

                <p className="mt-1 font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.02em] text-cream">
                  Big progress
                </p>
              </div>

              <div className="relative mt-12">
                {fields.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 border-t border-line/70 py-3.5"
                  >
                    <span className="h-1 w-1 bg-sepia" />

                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-cream-2">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
