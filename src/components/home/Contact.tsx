"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import { profile } from "@/data/profile";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "Base",
    value: profile.location,
    href: undefined,
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/amirabbas-salari",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-line/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading index="07" title="Contact" hint="// open channel" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Pitch */}
          <Reveal>
            <h3 className="font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-chalk sm:text-4xl">
              Let&apos;s build something
              <br />
              <span className="chrome-text">worth shipping.</span>
            </h3>

            <p className="mt-7 max-w-xl text-sm leading-8 text-mist/80">
              Whether you have a project idea, a collaboration opportunity, or
              simply want to connect — my inbox is open. I reply fast and I
              like hard problems.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group notch-sm inline-flex items-center gap-2 border border-cyan/45 bg-cyan/10 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk transition-all duration-300 hover:border-cyan hover:bg-cyan/20 hover:shadow-[0_0_34px_-8px_rgba(53,230,255,0.65)]"
              >
                Send message
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="notch-sm inline-flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-all duration-300 hover:border-cyan/45 hover:text-chalk"
              >
                <FaLinkedin size={13} />
                LinkedIn
              </a>
            </div>
          </Reveal>

          {/* Channels */}
          <Reveal delay={0.1}>
            <div className="hud hud-quiet relative p-7">
              <div className="flex items-center justify-between">
                <p className="label text-cyan/70">[ Channels ]</p>

                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
                </span>
              </div>

              <div className="mt-6 divide-y divide-line/60">
                {channels.map((channel) => {
                  const Icon = channel.icon;

                  const inner = (
                    <>
                      <Icon size={14} className="shrink-0 text-cyan/70" />

                      <span className="label w-[76px] shrink-0 text-dim">
                        {channel.label}
                      </span>

                      <span className="truncate text-sm text-chalk">
                        {channel.value}
                      </span>
                    </>
                  );

                  const shared =
                    "group flex items-center gap-4 py-4 transition-colors duration-300 hover:text-cyan";

                  return channel.href ? (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={shared}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={channel.label} className={shared}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
