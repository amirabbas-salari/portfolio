"use client";

import { motion } from "framer-motion";

import { strengths } from "@/data/strengths";

export default function Strengths() {
  return (
    <section className="relative border-t border-zinc-600/60 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="section-title flex items-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            <span className="text-violet-400">#</span>
            strengths
          </h2>

          <div className="ml-8 hidden h-px flex-1 bg-zinc-600/70 sm:block" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <motion.article
                key={strength.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group border border-zinc-500 bg-[#282c33] transition-colors duration-300 hover:border-violet-400/70"
              >
                <div className="flex items-center justify-between border-b border-zinc-500 px-5 py-4">
                  <span className="text-xs text-zinc-600">
                    {strength.number}
                  </span>

                  <Icon
                    size={17}
                    strokeWidth={1.6}
                    className="text-violet-400"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-sm font-bold text-white transition-colors group-hover:text-violet-400">
                    {strength.title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-zinc-500">
                    {strength.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}