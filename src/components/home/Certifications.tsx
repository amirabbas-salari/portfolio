"use client";

import { motion } from "framer-motion";

import { certifications } from "@/data/certifications";
import CertificationCard from "../certification/CertificationCard";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative border-t border-zinc-600/60 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="section-title flex items-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            <span className="text-violet-400">#</span>
            certifications
          </h2>

          <div className="ml-8 hidden h-px flex-1 bg-zinc-600/70 sm:block" />
        </div>

        <p className="mt-5 max-w-2xl text-xs leading-6 text-zinc-500">
          Certifications and training that have contributed to my
          technical foundation and continuous growth.
        </p>

        {/* Certificates */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
            >
              <CertificationCard
                certification={certification}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}