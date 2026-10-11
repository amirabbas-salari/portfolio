"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import SectionHead from "./SectionHead";

import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";
import { languages } from "@/data/languages";
import { strengths } from "@/data/strengths";

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */

const statementLead =
  "Computer Engineering student building real-time computer-vision systems";

const statementTail =
  "and full-stack products with Python, PyTorch and Django.";

const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  { label: "Base", value: profile.location, href: undefined, icon: MapPin },
  {
    label: "In",
    value: "linkedin.com/in/amirabbas-salari",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
];

/* ------------------------------------------------------------------ */
/*  Frame decoration                                                    */
/* ------------------------------------------------------------------ */

function FrameCorners() {
  const corners = [
    "left-[22px] top-[22px] border-l border-t",
    "right-[22px] top-[22px] border-r border-t",
    "left-[22px] bottom-[22px] border-b border-l",
    "right-[22px] bottom-[22px] border-b border-r",
  ];

  return (
    <>
      {corners.map((position) => (
        <span
          key={position}
          className={`pointer-events-none absolute h-[26px] w-[26px] border-cyan/45 ${position}`}
        />
      ))}

      {/* Edge markers */}
      <span className="pointer-events-none absolute left-1/2 top-[22px] h-[3px] w-[3px] -translate-x-1/2 bg-cyan/60" />
      <span className="pointer-events-none absolute bottom-[22px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 bg-cyan/60" />
      <span className="pointer-events-none absolute left-[22px] top-1/2 h-[3px] w-[3px] -translate-y-1/2 bg-cyan/60" />
      <span className="pointer-events-none absolute right-[22px] top-1/2 h-[3px] w-[3px] -translate-y-1/2 bg-cyan/60" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Sheet — authored at 1600 x 930 and scaled to fit the viewport       */
/* ------------------------------------------------------------------ */

export default function ResumeSheet() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  const year = new Date().getFullYear();

  return (
    <div className="relative h-[930px] w-[1600px] overflow-hidden bg-void font-sans">
      {/* Ambient light */}
      <div className="drift pointer-events-none absolute -left-52 -top-56 h-[640px] w-[640px] rounded-full bg-cyan/[0.11] blur-[130px]" />

      <div
        className="drift pointer-events-none absolute -bottom-64 -right-40 h-[620px] w-[760px] rounded-full bg-magenta/[0.09] blur-[140px]"
        style={{ animationDelay: "-7s" }}
      />

      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_rgba(2,3,10,0.9)]" />

      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(110%_80%_at_50%_0%,#000,transparent_78%)]" />

      <div className="resume-grain pointer-events-none absolute inset-0" />

      <div className="scanlines pointer-events-none absolute inset-0 opacity-25" />

      {/* Hairline frame */}
      <div className="pointer-events-none absolute inset-[22px] border border-line/90" />

      <FrameCorners />

      {/* ---------------- Content ---------------- */}
      <div className="absolute inset-[22px] flex flex-col p-[30px]">
        {/* ============ Header ============ */}
        <motion.header
          {...rise(0.02)}
          className="flex h-[88px] shrink-0 items-center justify-between border-b border-line"
        >
          <div className="flex items-center gap-5">
            {/* Monogram */}
            <div className="relative h-[56px] w-[56px] shrink-0 notch-sm border border-cyan/40 bg-cyan/[0.07]">
              <span className="absolute inset-0 flex items-center justify-center font-display text-[17px] font-bold tracking-[0.04em] text-chalk">
                AS
              </span>

              <span className="absolute -right-px -top-px h-[7px] w-[7px] bg-cyan" />
            </div>

            <div>
              <h1 className="font-display text-[26px] font-bold leading-none tracking-[-0.02em] text-chalk">
                {profile.name}
              </h1>

              <div className="mt-[10px] flex items-center gap-2.5">
                <span className="h-px w-7 bg-cyan/60" />

                <p className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[0.22em] text-cyan">
                  {profile.role}
                </p>

                <span className="font-mono text-[10.5px] leading-none text-dim">
                  /
                </span>

                <p className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[0.22em] text-mist">
                  Full-Stack Engineer
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            {/* Status */}
            <div className="flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/[0.07] px-3.5 py-[7px]">
              <span className="relative flex h-[5px] w-[5px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-cyan" />
              </span>

              <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.2em] text-chalk">
                Open to opportunities
              </span>
            </div>

            {/* Actions */}
            <a
              href="/Amir-Abbas-Salari-Nasab-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-line px-3.5 py-[7px] font-mono text-[9.5px] font-medium uppercase tracking-[0.18em] text-mist transition-colors duration-300 hover:border-cyan/50 hover:text-chalk"
            >
              <Download size={11} />
              CV / PDF
            </a>

            <Link
              href="/"
              className="group flex items-center gap-1.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.18em] text-dim transition-colors duration-300 hover:text-chalk"
            >
              Portfolio
              <ArrowUpRight
                size={11}
                className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
              />
            </Link>
          </div>
        </motion.header>

        {/* ============ Body ============ */}
        <div className="relative mt-[18px] flex min-h-0 flex-1 gap-7">
          {/* Column rules */}
          <span className="pointer-events-none absolute -top-2 bottom-0 left-[344px] w-px bg-line/70" />
          <span className="pointer-events-none absolute -top-2 bottom-0 left-[1012px] w-px bg-line/70" />

          {/* ---------------------------------------------------- */}
          {/* Left column — identity                                */}
          {/* ---------------------------------------------------- */}
          <motion.aside
            {...rise(0.1)}
            className="flex w-[330px] shrink-0 flex-col"
          >
            {/* Portrait */}
            <div className="relative h-[318px] w-full">
              {/* Offset frame */}
              <span className="absolute left-[16px] top-[18px] h-[292px] w-[286px] border border-cyan/25" />

              {/* Photo */}
              <div className="absolute left-0 top-0 h-[292px] w-[286px] overflow-hidden bg-panel">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  priority
                  sizes="286px"
                  className="duotone object-cover object-top"
                />

                <span className="duotone-tint" />
                <span className="duotone-tint-strong" />

                <div className="scanlines absolute inset-0" />

                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/15 to-transparent" />
              </div>

              {/* Crop marks */}
              <span className="absolute -left-[6px] -top-[6px] h-3 w-3 border-l border-t border-white/25" />
              <span className="absolute -top-[6px] right-[22px] h-3 w-3 border-r border-t border-white/25" />
              <span className="absolute -left-[6px] bottom-[2px] h-3 w-3 border-b border-l border-white/25" />
              <span className="absolute bottom-[2px] right-[22px] h-3 w-3 border-b border-r border-white/25" />
            </div>

            {/* Caption */}
            <div className="mt-1 flex items-center justify-end gap-2">
              <span className="h-px w-8 bg-cyan/50" />
              <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-dim">
                Fig. 01 — {profile.shortName}
              </span>
            </div>

            {/* Contact */}
            <div className="mt-[22px]">
              <SectionHead index="01" title="Contact" />

              <div className="mt-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const inner = (
                    <>
                      <Icon
                        size={12}
                        className="shrink-0 text-cyan/70 transition-colors duration-300 group-hover:text-cyan"
                      />

                      <span className="w-[42px] shrink-0 font-mono text-[8.5px] uppercase tracking-[0.18em] text-dim">
                        {item.label}
                      </span>

                      <span className="truncate text-[11px] leading-[15px] text-mist transition-colors duration-300 group-hover:text-chalk">
                        {item.value}
                      </span>
                    </>
                  );

                  const shared =
                    "group flex items-center gap-3 border-b border-line/60 py-[8px] transition-colors duration-300 hover:border-cyan/30";

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={shared}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label} className={shared}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Languages */}
            <div className="mt-auto">
              <SectionHead index="02" title="Languages" />

              <div className="mt-2.5 flex flex-col gap-[9px]">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[11px] leading-[15px] text-mist">
                      {language.name}
                    </span>

                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-[3px]">
                        {[1, 2, 3, 4, 5].map((step) => (
                          <span
                            key={step}
                            className={`h-[3px] w-[7px] ${
                              step <= language.proficiency
                                ? "bg-cyan/80"
                                : "bg-white/[0.08]"
                            }`}
                          />
                        ))}
                      </div>

                      <span className="w-[92px] text-right font-mono text-[8.5px] uppercase tracking-[0.12em] text-dim">
                        {language.level.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* ---------------------------------------------------- */}
          {/* Middle column — profile, work, education             */}
          {/* ---------------------------------------------------- */}
          <motion.section
            {...rise(0.16)}
            className="flex w-[640px] shrink-0 flex-col"
          >
            {/* Statement */}
            <div>
              <SectionHead index="03" title="Profile" />

              <p className="mt-3 font-display text-[18px] font-medium leading-[27px] tracking-[-0.01em] text-mist">
                <span className="text-chalk">{statementLead}</span>{" "}
                {statementTail}
              </p>
            </div>

            {/* Selected work */}
            <div className="mt-4">
              <SectionHead
                index="04"
                title="Selected Work"
                meta={`${projects.length} builds`}
              />

              <div className="mt-1.5">
                {projects.map((project, index) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group relative flex items-center gap-3 border-b border-line/60 py-[6px] transition-colors duration-300 hover:border-cyan/30"
                  >
                    <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-cyan transition-all duration-300 group-hover:h-[26px]" />

                    <span className="w-[26px] shrink-0 font-mono text-[9.5px] text-cyan/50 transition-colors duration-300 group-hover:text-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2.5">
                        <h3 className="font-display text-[13.5px] font-semibold leading-[18px] text-chalk transition-colors duration-300 group-hover:text-cyan">
                          {project.title}
                        </h3>

                        <span className="h-px flex-1 bg-line/70" />
                      </div>

                      <p className="mt-[3px] truncate text-[10.5px] leading-[15px] text-mist/70">
                        {project.subtitle}
                        <span className="px-[6px] text-dim">/</span>
                        <span className="text-dim">
                          {project.technologies.slice(0, 3).join(" · ")}
                        </span>
                      </p>
                    </div>

                    <span className="flex shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
                      <span
                        className={`h-[5px] w-[5px] rounded-full ${
                          project.status === "Completed"
                            ? "bg-mist"
                            : "bg-magenta"
                        }`}
                      />
                      {project.status}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Education + Certifications */}
            <div className="mt-4 grid min-h-0 flex-1 grid-cols-[300px_1fr] gap-5">
              {/* Education */}
              <div className="hud hud-sm hud-quiet flex flex-col p-4">
                <SectionHead index="05" title="Education" />

                {education.map((item) => (
                  <div key={item.degree} className="mt-3.5 flex flex-1 flex-col">
                    <h3 className="font-display text-[12.5px] font-semibold leading-[18px] text-chalk">
                      {item.degree}
                    </h3>

                    <p className="mt-1.5 text-[10.5px] leading-[15px] text-mist/70">
                      {item.institution}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.14em] text-dim">
                      <MapPin size={9} className="text-cyan/70" />
                      {item.location}
                    </div>

                    {/* Duration */}
                    <div className="mt-auto pt-6">
                      <div className="flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.16em] text-dim">
                        <span>{item.period.split(" — ")[0]}</span>
                        <span>{item.period.split(" — ")[1]}</span>
                      </div>

                      <div className="mt-2 h-[3px] w-full bg-white/[0.06]">
                        <div className="h-full w-[82%] bg-gradient-to-r from-cyan via-violet/70 to-magenta/60" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Decorative ruler */}
                <div className="mt-5 flex items-end gap-[3px]">
                  {Array.from({ length: 34 }).map((_, index) => (
                    <span
                      key={index}
                      className={`w-px ${
                        index % 6 === 0
                          ? "h-[10px] bg-cyan/40"
                          : "h-[4px] bg-white/[0.09]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="hud hud-sm hud-quiet flex flex-col p-4">
                <SectionHead
                  index="06"
                  title="Certifications"
                  meta={`${certifications.length}`}
                />

                <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-[6px]">
                  {certifications.map((certificate, index) => (
                    <div key={certificate.title} className="flex gap-2">
                      <span className="mt-[2px] shrink-0 font-mono text-[8.5px] text-cyan/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[10px] font-medium leading-[13px] text-chalk">
                          {certificate.title}
                        </p>

                        <p className="mt-[2px] text-[9px] leading-[12px] text-dim">
                          {certificate.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ---------------------------------------------------- */}
          {/* Right column — capabilities + strengths              */}
          {/* ---------------------------------------------------- */}
          <motion.section
            {...rise(0.22)}
            className="flex w-[470px] shrink-0 flex-col"
          >
            {/* Capabilities */}
            <div className="min-h-0 flex-1 overflow-hidden">
              <SectionHead
                index="07"
                title="Capabilities"
                meta={`${skillCategories.length} domains`}
              />

              <div className="mt-3 flex flex-col gap-[11px]">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <p className="font-mono text-[9px] font-medium uppercase leading-[11px] tracking-[0.2em] text-cyan/60">
                      {category.title}
                    </p>

                    <p className="mt-[3px] text-[11px] leading-[15px] text-mist/80">
                      {category.skills.map((skill, index) => (
                        <span key={skill}>
                          <span
                            className={index < 2 ? "text-chalk" : "text-mist/80"}
                          >
                            {skill}
                          </span>

                          {index < category.skills.length - 1 ? (
                            <span className="px-[5px] text-dim">/</span>
                          ) : null}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="mt-4 shrink-0">
              <SectionHead index="08" title="Strengths" />

              <div className="mt-2.5 grid grid-cols-3 gap-4">
                {strengths.map((strength) => {
                  const Icon = strength.icon;

                  return (
                    <div
                      key={strength.number}
                      className="border-t border-line pt-2.5"
                    >
                      <div className="flex items-center gap-1.5">
                        <Icon size={11} className="text-cyan/70" />

                        <span className="text-[10.5px] font-medium leading-[13px] text-chalk">
                          {strength.title}
                        </span>
                      </div>

                      <p className="mt-1.5 text-[9px] leading-[12.5px] text-mist/70">
                        {strength.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        </div>

        {/* ============ Footer ============ */}
        <motion.footer
          {...rise(0.28)}
          className="mt-[16px] flex h-[44px] shrink-0 items-center justify-between border-t border-line font-mono text-[9px] uppercase tracking-[0.2em] text-dim"
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold tracking-[0.3em] text-mist">
              AASN
            </span>

            <span className="h-3 w-px bg-line" />

            <span>One-screen résumé · {year} edition</span>
          </div>

          {/* Ruler */}
          <div className="flex items-center gap-[3px]">
            {Array.from({ length: 52 }).map((_, index) => (
              <span
                key={index}
                className={`w-px ${
                  index % 6 === 0
                    ? "h-[9px] bg-cyan/40"
                    : "h-[4px] bg-white/[0.09]"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors duration-300 hover:text-cyan"
            >
              {profile.email}
            </a>

            <span className="h-3 w-px bg-line" />

            <span>{profile.location}</span>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
