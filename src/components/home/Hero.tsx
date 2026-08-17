"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[120px] sm:top-[-15%] sm:h-[600px] sm:w-[600px] sm:blur-[160px]" />

        <div className="absolute bottom-[-10%] right-[-20%] h-[300px] w-[300px] rounded-full bg-indigo-600/[0.05] blur-[100px] sm:bottom-[-20%] sm:right-[-10%] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-20">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.05,
            }}
            className="order-1 mx-auto w-full max-w-[210px] sm:max-w-[260px] lg:order-2 lg:max-w-[380px]"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-full bg-violet-500/[0.08] blur-[55px]" />

              {/* Decorative frame */}
              <div className="absolute -inset-2 rounded-[30px] border border-white/[0.05] sm:-inset-3 sm:rounded-[36px]" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-white/[0.1] bg-zinc-950 sm:rounded-[32px]">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover grayscale-[15%]"
                  sizes="(max-width: 640px) 210px, (max-width: 1024px) 260px, 380px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/[0.08] bg-black/50 px-3 py-2.5 backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-2xl sm:px-4 sm:py-3">
                  <div>
                    <p className="text-[9px] text-zinc-500 sm:text-xs">
                      Currently focused on
                    </p>

                    <p className="mt-0.5 text-[11px] font-medium text-white sm:mt-1 sm:text-sm">
                      AI / Computer Vision
                    </p>
                  </div>

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Availability */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 sm:mb-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs text-zinc-500">
                Open to opportunities
              </span>
            </div>

            {/* Role */}
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
              {profile.role}
            </p>

            {/* Name */}
            <h1 className="mt-5 text-[48px] font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:mt-6 sm:text-7xl lg:text-[88px]">
              Amir Abbas
              <span className="block text-zinc-500">
                Salari Nasab
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-8 sm:text-lg sm:leading-7">
              {profile.tagline}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                href="#projects"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200 sm:w-auto"
              >
                View my work

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="/resume/Amir-Abbas-Salari-Nasab-CV.pdf"
                download
                className="flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06] sm:w-auto"
              >
                Download CV
              </a>

              <Link
                href="#contact"
                className="flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06] sm:w-auto"
              >
                Get in touch
              </Link>
            </div>

            {/* Socials */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-zinc-500 transition-all hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
              >
                <FaLinkedin size={16} />
              </a>

              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-zinc-500 transition-all hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                >
                  <FaGithub size={16} />
                </a>
              )}

              <span className="mx-1 hidden h-px w-8 bg-white/[0.08] sm:mx-2 sm:block" />

              <span className="text-xs text-zinc-700">
                Based in {profile.location}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-700 transition-colors hover:text-zinc-400 sm:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Scroll
          </span>

          <ArrowDown size={15} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
