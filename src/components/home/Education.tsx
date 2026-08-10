"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Globe2,
  MapPin,
} from "lucide-react";

import { education } from "@/data/education";

const languages = [
  {
    name: "Persian",
    level: "Native",
  },
  {
    name: "English",
    level: "Professional Working Proficiency",
  },
  {
    name: "Turkish",
    level: "Conversational",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-b border-white/[0.06] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
              Education
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Academic background.
            </h2>

            <div className="mt-12">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-violet-400">
                    <BookOpen size={20} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-400">
                    {item.institution}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4 text-xs text-zinc-600">
                    <span>{item.period}</span>

                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />

                      {item.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
              Languages
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Communication.
            </h2>

            <div className="mt-12 space-y-3">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                >
                  <div className="flex items-center gap-4">
                    <Globe2
                      size={18}
                      className="text-zinc-600"
                    />

                    <span className="text-sm font-medium text-white">
                      {language.name}
                    </span>
                  </div>

                  <span className="text-xs text-zinc-500">
                    {language.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}