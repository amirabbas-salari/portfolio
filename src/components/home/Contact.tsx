"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import { profile } from "@/data/profile";

export default function Contact() {
  const channels = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    ...(profile.github
      ? [
          {
            label: "GitHub",
            value: "github.com/amirabbas-salari",
            href: profile.github,
            icon: FaGithub,
          },
        ]
      : []),
    {
      label: "LinkedIn",
      value: "linkedin.com/in/amirabbas-salari",
      href: profile.linkedin,
      icon: FaLinkedin,
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
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* Knockout paper panel */}
          <div className="paper paper-edge relative overflow-hidden">
            <div className="halftone pointer-events-none absolute inset-0 opacity-25" />

            <div className="relative px-6 py-14 sm:px-10 lg:px-14">
              <SectionHeading
                tone="paper"
                kicker="Get In Touch"
                title={
                  <>
                    Let&apos;s
                    <br />
                    Connect
                  </>
                }
                aside={
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-2 border-b border-ink/40 pb-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-[#6b5335] hover:text-[#6b5335]"
                  >
                    Say Hello
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                }
              />

              <div className="mt-12 grid gap-12 lg:grid-cols-[0.95fr_1.55fr] lg:gap-14">
                <div>
                  <p className="text-[15px] leading-8 text-ink/75">
                    Whether you have a project idea, a collaboration
                    opportunity, or simply want to connect — my inbox is open.
                    I reply fast and I like hard problems.
                  </p>

                  <p className="mt-10 font-display text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink">
                    Open for new
                    <br />
                    opportunities
                  </p>

                  <a
                    href={`mailto:${profile.email}`}
                    className="group mt-8 inline-flex items-center gap-2 border border-ink/30 px-6 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-ink hover:text-cream"
                  >
                    Start a project
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>

                <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {channels.map((channel) => {
                    const Icon = channel.icon;

                    const inner = (
                      <>
                        <span className="label label-paper shrink-0">
                          {`// ${channel.label}`}
                        </span>

                        <span className="mt-2.5 break-all text-[15px] leading-6 text-ink">
                          {channel.value}
                        </span>

                        <Icon
                          size={13}
                          className="mt-3 shrink-0 text-[#6b5335]"
                        />
                      </>
                    );

                    const shared =
                      "group flex flex-col border-t border-ink/25 pt-4 transition-opacity duration-300 hover:opacity-70";

                    return channel.href ? (
                      <a
                        key={channel.label}
                        href={channel.href}
                        target={
                          channel.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
