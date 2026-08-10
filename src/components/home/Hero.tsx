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
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/[0.06]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-15%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[160px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-indigo-600/[0.05] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs text-zinc-500">
                Open to opportunities
              </span>
            </div>

            {/* Role */}
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
              {profile.role} · {profile.focus}
            </p>

            {/* Name */}
            <h1 className="mt-6 max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl lg:text-[92px]">
              Amir Abbas
              <span className="block text-zinc-500">
                Salari Nasab
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
              {profile.tagline}
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
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
                className="rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
                >
                Download CV
              </a>

              <Link
                href="#contact"
                className="rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
              >
                Get in touch
              </Link>
            </div>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-3">
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

              <span className="mx-2 h-px w-8 bg-white/[0.08]" />

              <span className="text-xs text-zinc-700">
                Based in {profile.location}
              </span>
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
            className="relative mx-auto w-full max-w-[380px]"
          >
            {/* Glow */}
            <div className="absolute -inset-8 rounded-full bg-violet-500/[0.08] blur-[70px]" />

            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[42px] border border-white/[0.04]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] border border-white/[0.1] bg-zinc-950">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                priority
                className="object-cover grayscale-[15%] transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 380px, 420px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/50 px-4 py-3 backdrop-blur-xl">
                <div>
                  <p className="text-xs text-zinc-500">
                    Currently focused on
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Backend Engineering
                  </p>
                </div>

                <div className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
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

          <ArrowDown
            size={15}
            className="animate-bounce"
          />
        </motion.a>
      </div>
    </section>
  );
}