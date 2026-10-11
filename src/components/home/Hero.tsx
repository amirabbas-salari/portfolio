"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { certifications } from "@/data/certifications";

const stats = [
  { value: String(projects.length).padStart(2, "0"), label: "Builds shipped" },
  {
    value: String(skillCategories.length).padStart(2, "0"),
    label: "Skill domains",
  },
  {
    value: String(certifications.length).padStart(2, "0"),
    label: "Certifications",
  },
];

/** Typographic word stack, straight off the poster. */
const wordStack = [
  { word: "Better", size: "text-3xl sm:text-4xl", tone: "text-cream-2" },
  { word: "Code", size: "text-2xl sm:text-3xl", tone: "text-cream-3" },
  { word: "Bigger", size: "text-4xl sm:text-5xl", tone: "text-cream" },
  { word: "Dreams", size: "text-3xl sm:text-4xl", tone: "text-sepia" },
];

const focusStack = ["Python", "Django", "React", "AI & CV"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-24 pt-32 sm:pt-36 lg:pb-28"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-sepia/[0.12] blur-[150px]" />

        <div className="absolute bottom-24 left-1/2 h-[300px] w-[760px] -translate-x-1/2 rounded-full bg-cream/[0.05] blur-[140px]" />

        <div className="tech-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(100%_70%_at_50%_20%,#000,transparent_75%)]" />

        <div className="absolute inset-x-0 bottom-[22%] h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          {/* ------------------ Text ------------------ */}
          <div className="relative z-10">
            <motion.div {...rise(0.05)} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-sepia" />

              <span className="label">Available for opportunities</span>

              <span className="h-px w-10 bg-gradient-to-r from-sepia/70 to-transparent" />
            </motion.div>

            <motion.p
              {...rise(0.1)}
              className="mt-9 font-mono text-[11px] uppercase tracking-[0.26em] text-cream-3"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              {...rise(0.15)}
              className="mt-4 font-display text-[clamp(3rem,8.4vw,5.6rem)] font-semibold leading-[0.9] tracking-[-0.025em]"
            >
              <span className="block text-cream">Amir Abbas</span>

              <span className="block text-sepia">Salari</span>
            </motion.h1>

            <motion.p
              {...rise(0.22)}
              className="mt-7 font-mono text-[11.5px] uppercase tracking-[0.22em] text-cream-2"
            >
              Full-Stack Developer &amp; AI Enthusiast
            </motion.p>

            <motion.p
              {...rise(0.26)}
              className="mt-8 max-w-xl text-[15px] leading-8 text-cream-3"
            >
              I build modern web applications, work with AI and computer
              vision, and enjoy turning ideas into real products.
            </motion.p>

            <motion.div
              {...rise(0.32)}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 border-b border-cream/40 pb-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-sepia hover:text-sepia"
              >
                View My Projects
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/resume"
                className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream-3 transition-colors duration-300 hover:text-cream"
              >
                One-screen résumé
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...rise(0.4)}
              className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-line/80 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-semibold tracking-tight text-cream">
                    {stat.value}
                  </p>

                  <p className="label mt-2.5 text-cream-3">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ------------------ Portrait + word stack ------------------ */}
          <motion.div {...rise(0.25)} className="relative">
            <div className="flex flex-col gap-10 lg:items-end">
              {/* Word stack */}
              <div className="flex flex-col items-start gap-1 lg:items-end">
                {wordStack.map((item) => (
                  <span
                    key={item.word}
                    className={`font-display font-semibold leading-[1.1] tracking-[-0.02em] ${item.size} ${item.tone}`}
                  >
                    {item.word}
                  </span>
                ))}
              </div>

              {/* Portrait */}
              <div className="relative w-full max-w-[420px]">
                <div className="relative border border-cream/20 p-2">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink-2">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 420px"
                      className="sepia-img object-cover object-top"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

                    <span className="label absolute left-4 top-4 bg-ink/70 px-3 py-2 backdrop-blur-sm">
                      Fig. 01 / A.A.S
                    </span>

                    <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                      <span className="font-display text-xl font-semibold tracking-tight text-cream">
                        {profile.shortName}
                      </span>

                      <span className="label flex items-center gap-1.5 text-cream-2">
                        <MapPin size={11} />
                        {profile.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Focus list */}
                <div className="mt-px border border-cream/12">
                  {focusStack.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-line/60 px-5 py-3 last:border-b-0"
                    >
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-cream-2">
                        {item}
                      </span>

                      <span className="h-1 w-1 bg-sepia" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
