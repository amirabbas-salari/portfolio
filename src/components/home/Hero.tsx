"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[680px] overflow-hidden pt-28 sm:min-h-[720px]"
    >
      {/* Decorative vertical line */}
      <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-px bg-zinc-600/70 lg:block" />

      {/* Left dots */}
      <div className="dots pointer-events-none absolute left-0 top-[420px] hidden h-16 w-16 opacity-70 lg:block" />

      {/* Background geometry */}
      <div className="pointer-events-none absolute right-[18%] top-36 hidden h-24 w-24 border border-violet-400/70 lg:block" />

      <div className="pointer-events-none absolute right-[21%] top-48 hidden h-16 w-16 border border-violet-400/70 lg:block" />

      <div className="pointer-events-none absolute right-[13%] top-64 hidden h-12 w-12 border border-zinc-500/60 lg:block" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[590px] items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-4">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-zinc-600">
              Full-Stack Developer
            </p>

            <h1 className="max-w-3xl text-3xl font-bold leading-[1.35] tracking-tight text-white sm:text-4xl lg:text-[42px]">
              AmirAbbas Salari is a{" "}
              <span className="text-violet-400">
                Full-Stack Developer
              </span>{" "}
              and <span className="text-violet-400">AI Engineer</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              I build modern web applications and intelligent systems
              with Django, React, Python and Computer Vision.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 border border-violet-400 px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:bg-violet-400/10"
              >
                Contact me
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center gap-2 border border-zinc-600 px-5 py-2.5 text-xs text-zinc-400 transition-colors hover:border-zinc-400 hover:text-white"
              >
                View projects
              </Link>
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto h-[430px] w-full max-w-[470px]"
          >
            {/* Purple geometric shape */}
            <div className="absolute left-[8%] top-[18%] h-20 w-20 border border-violet-400/80" />

            <div className="absolute left-[13%] top-[28%] h-14 w-14 border border-violet-400/70" />

            {/* Dots */}
            <div className="dots absolute right-[3%] top-[39%] h-20 w-20 opacity-80" />

            {/* Image frame */}
            <div className="absolute bottom-5 left-1/2 h-[390px] w-[300px] -translate-x-1/2 sm:w-[330px]">
              <div className="absolute inset-x-0 bottom-0 h-px bg-violet-400/60" />

              <Image
                src="/images/profile/profile.jpg"
                alt="Amir Abbas Salari Nasab"
                fill
                priority
                className="object-contain object-bottom grayscale"
                sizes="330px"
              />
            </div>

            {/* Status card */}
            <div className="absolute bottom-0 left-1/2 z-20 flex w-[280px] -translate-x-1/2 items-center gap-2 border border-zinc-500 bg-[#282c33] px-3 py-2 text-[10px] text-zinc-400 sm:w-[330px]">
              <span className="h-2 w-2 shrink-0 bg-violet-400" />
                <div>
                  <p className="text-[9px] text-zinc-500 sm:text-xs">
                    Currently focused on
                  </p>

                  <p className="mt-0.5 text-[11px] font-medium text-white sm:mt-1 sm:text-sm">
                    AI & Computer Vision
                  </p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mt-5 max-w-5xl px-5 pb-20 sm:px-6"
      >
        <div className="relative border border-zinc-500 px-5 py-6 sm:px-7">
          {/* Opening quote */}
          <span className="absolute -left-1 -top-5 bg-[#282c33] px-2 text-4xl font-bold leading-none text-zinc-400">
            “
          </span>

          <p className="text-center text-sm font-bold text-white sm:text-base">
            With great power comes great electricity bill
          </p>

          {/* Author */}
          <div className="absolute -bottom-10 right-0 border border-zinc-500 bg-[#282c33] px-5 py-2.5">
            <span className="text-xs text-zinc-400">
              - Dr. Who
            </span>
          </div>

          {/* Closing quote */}
          <span className="absolute -bottom-4 -right-1 bg-[#282c33] px-2 text-4xl font-bold leading-none text-zinc-400">
            ”
          </span>
        </div>
      </motion.div>
    </section>
  );
}