"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-zinc-600/60 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="section-title flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            <span className="text-violet-400">#</span>
            skills
          </h2>

          <div className="hidden h-px flex-1 bg-zinc-600/70 sm:ml-8 sm:block" />
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Decorative side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative hidden min-h-[300px] lg:block"
          >
            <div className="absolute left-12 top-12 h-28 w-28 border border-violet-400/60" />

            <div className="absolute left-24 top-24 h-28 w-28 border border-violet-400/40" />

            <div className="absolute left-40 top-40 h-20 w-20 border border-zinc-500/60" />

            <div className="dots absolute bottom-5 left-0 h-20 w-20 opacity-60" />

            <div className="absolute bottom-8 right-12 h-px w-32 bg-violet-400/50" />
          </motion.div>

          {/* Skills grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.article
                key={category.title}
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
                className="border border-zinc-500 bg-[#282c33] transition-colors duration-300 hover:border-violet-400/70"
              >
                {/* Category */}
                <div className="border-b border-zinc-500 px-4 py-3">
                  <h3 className="text-sm font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="border-b border-zinc-500 px-4 py-3">
                  <p className="text-xs leading-5 text-zinc-500">
                    {category.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-x-3 gap-y-2 px-4 py-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-zinc-400 transition-colors hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}