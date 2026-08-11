"use client";

import { motion } from "framer-motion";

import { certifications } from "@/data/certifications";
import CertificationCard from "../certification/CertificationCard";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-b border-white/[0.06] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
            Certifications
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Continuous learning.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500">
            Certifications and training that have contributed to my
            technical foundation and continuous growth.
          </p>
        </motion.div>

        {/* Certificates */}
        <div className="mt-16 columns-1 gap-6 md:columns-2">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div
                className="mb-6 break-inside-avoid"
              >
                <CertificationCard
                  certification={certification}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}