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
  { value: String(skillCategories.length).padStart(2, "0"), label: "Skill domains" },
  { value: String(certifications.length).padStart(2, "0"), label: "Certifications" },
];

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
      className="relative overflow-hidden pb-28 pt-32 sm:pt-36 lg:pb-32"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan/[0.07] blur-[150px]" />

        <div className="absolute bottom-24 left-1/2 h-[300px] w-[760px] -translate-x-1/2 rounded-full bg-magenta/[0.07] blur-[140px]" />

        <div className="tech-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(100%_70%_at_50%_20%,#000,transparent_75%)]" />

        <div className="scanlines absolute inset-0 opacity-30" />

        <div className="grid-floor" />

        <div className="absolute inset-x-0 bottom-[26%] h-px bg-gradient-to-r from-transparent via-cyan/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
          {/* ------------------ Text ------------------ */}
          <div className="relative z-10">
            <motion.div {...rise(0.05)} className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>

              <span className="label text-cyan/80">
                Available for opportunities
              </span>

              <span className="h-px w-10 bg-gradient-to-r from-cyan/50 to-transparent" />
            </motion.div>

            <motion.p {...rise(0.1)} className="label mt-8 text-dim">
              {`// ${profile.role}`}
            </motion.p>

            <motion.h1
              {...rise(0.15)}
              className="mt-5 font-display text-[clamp(2.6rem,7vw,4.6rem)] font-bold leading-[0.95] tracking-[-0.035em]"
            >
              <span className="block text-chalk">Amir Abbas</span>

              <span className="chrome-text block">Salari Nasab</span>
            </motion.h1>

            <motion.p
              {...rise(0.22)}
              className="mt-7 max-w-xl text-base leading-8 text-mist/80"
            >
              {profile.tagline} Turning complex problems into practical,
              maintainable software — from real-time vision systems to
              production APIs.
            </motion.p>

            <motion.div
              {...rise(0.3)}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="#contact"
                className="group notch-sm inline-flex items-center gap-2 border border-cyan/45 bg-cyan/10 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk transition-all duration-300 hover:border-cyan hover:bg-cyan/20 hover:shadow-[0_0_34px_-8px_rgba(53,230,255,0.65)]"
              >
                Start a project
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/resume"
                className="notch-sm inline-flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-all duration-300 hover:border-cyan/45 hover:text-chalk"
              >
                One-screen résumé
              </Link>

              <Link
                href="#projects"
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim transition-colors duration-300 hover:text-chalk"
              >
                View builds
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...rise(0.38)}
              className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-line/70 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="chrome-text font-display text-3xl font-bold tracking-tight">
                    {stat.value}
                  </p>

                  <p className="label mt-2 text-dim">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ------------------ Portrait ------------------ */}
          <motion.div
            {...rise(0.25)}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="hud-lg relative p-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-panel">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="duotone object-cover object-top"
                />

                <span className="duotone-tint" />
                <span className="duotone-tint-strong" />

                <div className="scanlines absolute inset-0" />

                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/15 to-transparent" />

                {/* Index badge */}
                <span className="label absolute left-4 top-4 border border-cyan/30 bg-void/70 px-2.5 py-2 text-cyan/80 backdrop-blur-sm">
                  Fig. 01 / {profile.shortName}
                </span>

                {/* Corner brackets */}
                <span className="brackets absolute inset-0" />
              </div>
            </div>

            {/* Readout panel */}
            <div className="hud-sm relative mt-4 p-5">
              <div className="flex items-center justify-between">
                <p className="label text-cyan/70">[ Identity ]</p>

                <span className="label text-dim">SYS · OK</span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-3">
                  <span className="label text-dim">Role</span>
                  <span className="text-right text-sm text-chalk">
                    {profile.role}
                  </span>
                </div>

                <div className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-3">
                  <span className="label text-dim">Focus</span>
                  <span className="text-right text-sm text-chalk">
                    Vision · LLM · Backend
                  </span>
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <span className="label text-dim">Base</span>
                  <span className="flex items-center gap-2 text-sm text-chalk">
                    <MapPin size={12} className="text-cyan/70" />
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
