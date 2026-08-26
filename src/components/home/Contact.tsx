"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-zinc-600/60 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex items-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            <span className="text-violet-400">#</span>
            contact
          </h2>

          <div className="ml-8 hidden h-px flex-1 bg-zinc-600/70 sm:block" />
        </div>


        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_380px]">

          {/* Text */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h3 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Let&apos;s work together and build something useful.
            </h3>


            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
              Whether you have a project idea, collaboration opportunity,
              or simply want to connect, feel free to reach out.
            </p>


            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center border border-violet-400 px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-violet-400/10"
            >
              Send message
            </a>


            {/* Decorative */}
            <div className="relative mt-14 hidden h-24 lg:block">
              <div className="dots absolute left-0 top-0 h-20 w-20" />

              <div className="absolute left-32 top-8 h-px w-40 bg-violet-400/50" />
            </div>

          </motion.div>


          {/* Contact info */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="border border-zinc-500 bg-[#282c33]"
          >

            <div className="border-b border-zinc-500 px-5 py-4">
              <h3 className="text-sm font-bold text-white">
                Contact information
              </h3>
            </div>


            <div className="divide-y divide-zinc-600">

              <a
                href={`mailto:${profile.email}`}
                className="flex gap-4 px-5 py-5 transition-colors hover:bg-white/[0.03]"
              >
                <Mail
                  size={17}
                  className="mt-1 text-violet-400"
                />

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
                className="flex gap-4 px-5 py-5 transition-colors hover:bg-white/[0.03]"
              >
                <Phone
                  size={17}
                  className="mt-1 text-violet-400"
                />

                <div>
                  <p className="text-xs text-zinc-600">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    {profile.phone}
                  </p>
                </div>
              </a>



              <div className="flex gap-4 px-5 py-5">

                <MapPin
                  size={17}
                  className="mt-1 text-violet-400"
                />

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