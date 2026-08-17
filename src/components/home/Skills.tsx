"use client";

import { motion } from "framer-motion";
import {
  ScanFace,
  Code2,
  Database,
  GitBranch,
  Cpu,
  Layers3,
  Terminal,
} from "lucide-react";

import { skillCategories } from "@/data/skills";

const icons = [
  ScanFace,
  Code2,
  Layers3,
  Database,
  GitBranch,
  Cpu,
  Terminal,
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            My technical toolkit.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500">
            Technologies and tools I use to design, build, and maintain
            modern software applications.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={category.title}
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
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.13] hover:bg-white/[0.035]"
              >
                {/* Background glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/[0.04] blur-3xl transition-opacity duration-500 group-hover:bg-violet-500/[0.08]" />

                {/* Header */}
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-violet-400 transition-colors duration-300 group-hover:border-violet-400/20">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-xs text-zinc-600">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-zinc-700">
                    0{index + 1}
                  </span>
                </div>

                {/* Description */}
                <p className="relative mt-6 max-w-lg text-sm leading-6 text-zinc-500">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.07] bg-black/20 px-3 py-2 text-xs text-zinc-400 transition-colors duration-200 hover:border-white/[0.14] hover:text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
