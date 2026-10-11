"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import CertificationCard from "@/components/certification/CertificationCard";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative border-t border-line/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            kicker="Certifications"
            title="Proof of Work"
            aside={
              <span className="label">
                {`// ${certifications.length} records`}
              </span>
            }
          />

          <p className="mt-8 max-w-2xl text-[15px] leading-8 text-cream-3">
            Certifications and training that have contributed to my technical
            foundation and continuous growth.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal key={certification.title} delay={index * 0.06}>
              <CertificationCard
                certification={certification}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
