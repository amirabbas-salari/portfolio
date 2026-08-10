"use client";

import { motion } from "framer-motion";
import {
  Brain,
  FileText,
  Lightbulb,
} from "lucide-react";

const strengths = [
  {
    title: "Problem Solving",
    description:
      "Develop efficient and practical solutions for complex technical challenges.",
    icon: Brain,
  },
  {
    title: "Fast Learner",
    description:
      "Quickly adapt to new technologies, frameworks, and development tools.",
    icon: Lightbulb,
  },
  {
    title: "Technical Documentation",
    description:
      "Create clear technical documentation, API references, and project guides to improve collaboration and maintainability.",
    icon: FileText,
  },
];

export default function Strengths() {
  return (
    <section className="border-b border-white/[0.06] py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
            Strengths
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            How I approach software development.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-violet-400">
                  <Icon size={20} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {strength.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {strength.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}