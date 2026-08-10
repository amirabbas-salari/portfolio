"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 sm:py-40"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 lg:grid-cols-[1fr_400px]"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
                Get in touch
              </p>

              <h2 className="mt-5 max-w-2xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500">
                Whether you have a project idea, an opportunity, or simply
                want to connect, feel free to reach out.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
              >
                Send me an email

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-5 transition-colors hover:bg-white/[0.04]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-zinc-400">
                  <Mail size={18} />
                </span>

                <div>
                  <p className="text-xs text-zinc-600">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-zinc-300">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-5 transition-colors hover:bg-white/[0.04]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-zinc-400">
                  <Phone size={18} />
                </span>

                <div>
                  <p className="text-xs text-zinc-600">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    {profile.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-zinc-400">
                  <MapPin size={18} />
                </span>

                <div>
                  <p className="text-xs text-zinc-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}