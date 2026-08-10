"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-white/[0.06] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
              About me
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Building with curiosity and purpose.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <p className="text-xl leading-9 text-zinc-400">
              I&apos;m a Computer Engineering student passionate about
              backend development, artificial intelligence, and IoT.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-600">
              My main focus is building reliable and scalable web
              applications with Python and Django. I also work with
              React to create modern full-stack experiences and enjoy
              exploring technologies that help turn complex problems
              into practical software solutions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/[0.06] pt-8 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-white">
                  Python
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Primary Language
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  Django
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Backend Framework
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  React
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Frontend
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}