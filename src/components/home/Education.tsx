"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe2, MapPin } from "lucide-react";

import { education } from "@/data/education";
import { languages } from "@/data/languages";

export default function Education() {
  return (
    <section
      id="education"
      className="relative border-t border-zinc-600/60 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="section-title flex items-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            <span className="text-violet-400">#</span>
            education
          </h2>

          <div className="ml-8 hidden h-px w-40 bg-zinc-600/70 sm:block" />
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {education.map((item) => (
              <article
                key={item.degree}
                className="border border-zinc-500 bg-[#282c33]"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-5 border-b border-zinc-500 px-5 py-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-violet-400/60 text-violet-400">
                      <BookOpen size={16} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-xs text-zinc-500">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-[10px] text-zinc-600">
                    {item.period}
                  </span>
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-5 px-5 py-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-2">
                    <MapPin size={13} />
                    {item.location}
                  </span>
                </div>
              </article>
            ))}
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-5 text-sm font-bold text-white">
              Languages
            </h3>

            <div className="grid gap-3">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                  }}
                  className="flex items-center justify-between border border-zinc-500 bg-[#282c33] px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <Globe2
                      size={15}
                      className="text-violet-400"
                    />

                    <span className="text-xs font-medium text-white">
                      {language.name}
                    </span>
                  </div>

                  <span className="text-[10px] text-zinc-500">
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