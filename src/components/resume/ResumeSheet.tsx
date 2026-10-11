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
/* Content */
/* ------------------------------------------------------------------ */

const statementLead =
  "Computer Engineering student building real-time computer-vision systems";

const statementTail =
  "and full-stack products with Python, PyTorch and Django.";

const contactItems = [
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
  { label: "Base", value: profile.location, href: undefined, icon: MapPin },
  {
    label: "In",
    value: "linkedin.com/in/amirabbas-salari",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
];

/* ------------------------------------------------------------------ */
/* Frame decoration */
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
          className={`pointer-events-none absolute h-[26px] w-[26px] border-cream/25 ${position}`}
        />
      ))}

      {/* Edge markers */}
      <span className="pointer-events-none absolute left-1/2 top-[22px] h-[3px] w-[3px] -translate-x-1/2 bg-sepia" />
      <span className="pointer-events-none absolute bottom-[22px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 bg-sepia" />
      <span className="pointer-events-none absolute left-[22px] top-1/2 h-[3px] w-[3px] -translate-y-1/2 bg-sepia" />
      <span className="pointer-events-none absolute right-[22px] top-1/2 h-[3px] w-[3px] -translate-y-1/2 bg-sepia" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Sheet — authored at 1600 x 930 and scaled to fit the viewport */
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
    <div className="relative h-[930px] w-[1600px] overflow-hidden bg-ink font-sans">
      {/* Ambient light */}
      <div className="drift pointer-events-none absolute -left-52 -top-56 h-[640px] w-[640px] rounded-full bg-sepia/[0.11] blur-[130px]" />

      <div
        className="drift pointer-events-none absolute -bottom-64 -right-40 h-[620px] w-[760px] rounded-full bg-sepia-soft/[0.09] blur-[140px]"
        style={{ animationDelay: "-7s" }}
      />

      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_rgba(2,3,10,0.9)]" />

      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(110%_80%_at_50%_0%,#000,transparent_78%)]" />

      <div className="paper-grain pointer-events-none absolute inset-0" />

      <div className="tech-grid pointer-events-none absolute inset-0 opacity-25" />

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
            <div className="relative h-[56px] w-[56px] shrink-0 border border-cream/25 bg-sepia/[0.07]">
              <span className="absolute inset-0 flex items-center justify-center font-display text-[17px] font-bold tracking-[0.04em] text-cream">
                AS
              </span>

              <span className="absolute -right-px -top-px h-[7px] w-[7px] bg-sepia" />
            </div>

            <div>
              <h1 className="font-display text-[26px] font-bold leading-none tracking-[-0.02em] text-cream">
                {profile.name}
              </h1>

              <div className="mt-[10px] flex items-center gap-2.5">
                <span className="h-px w-7 bg-sepia" />

                <p className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[0.22em] text-sepia">
                  {profile.role}
                </p>

                <span className="font-mono text-[10.5px] leading-none text-cream-3">
                  /
                </span>

                <p className="font-mono text-[10.5px] font-medium uppercase leading-none tracking-[0.22em] text-cream-2">
                  Full-Stack Engineer
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            {/* Status */}
            <div className="flex items-center gap-2 rounded-full border border-cream/25 bg-sepia/[0.07] px-3.5 py-[7px]">
              <span className="relative flex h-[5px] w-[5px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sepia opacity-70" />
                <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-sepia" />
              </span>

              <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.2em] text-cream">
                Open to opportunities
              </span>
            </div>

            {/* Actions */}
            <a
              href="/Amir-Abbas-Salari-Nasab-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-line px-3.5 py-[7px] font-mono text-[9.5px] font-medium uppercase tracking-[0.18em] text-cream-2 transition-colors duration-300 hover:border-cream/25 hover:text-cream"
            >
              <Download size={11} />
              CV / PDF
            </a>

            <Link
              href="/"
              className="group flex items-center gap-1.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.18em] text-cream-3 transition-colors duration-300 hover:text-cream"
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
          {/* Left column — identity */}
          {/* ---------------------------------------------------- */}
          <motion.aside
            {...rise(0.1)}
            className="flex w-[330px] shrink-0 flex-col"
          >
            {/* Portrait */}
            <div className="relative h-[318px] w-full">
              {/* Offset frame */}
              <span className="absolute left-[16px] top-[18px] h-[292px] w-[286px] border border-cream/25" />

              {/* Photo */}
              <div className="absolute left-0 top-0 h-[292px] w-[286px] overflow-hidden bg-ink-2">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  priority
                  sizes="286px"
                  className="sepia-img object-cover object-top"
                />

                <div className="tech-grid absolute inset-0" />

                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
              </div>

              {/* Crop marks */}
              <span className="absolute -left-[6px] -top-[6px] h-3 w-3 border-l border-t border-cream/25" />
              <span className="absolute -top-[6px] right-[22px] h-3 w-3 border-r border-t border-cream/25" />
              <span className="absolute -left-[6px] bottom-[2px] h-3 w-3 border-b border-l border-cream/25" />
              <span className="absolute bottom-[2px] right-[22px] h-3 w-3 border-b border-r border-cream/25" />
            </div>

            {/* Caption */}
            <div className="mt-1 flex items-center justify-end gap-2">
              <span className="h-px w-8 bg-sepia" />
              <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-cream-3">
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
                        className="shrink-0 text-sepia transition-colors duration-300 group-hover:text-sepia"
                      />

                      <span className="w-[42px] shrink-0 font-mono text-[8.5px] uppercase tracking-[0.18em] text-cream-3">
                        {item.label}
                      </span>

                      <span className="truncate text-[11px] leading-[15px] text-cream-2 transition-colors duration-300 group-hover:text-cream">
                        {item.value}
                      </span>
                    </>
                  );

                  const shared =
                    "group flex items-center gap-3 border-b border-line/60 py-[8px] transition-colors duration-300 hover:border-cream/25";

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
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
                    <span className="text-[11px] leading-[15px] text-cream-2">
                      {language.name}
                    </span>

                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-[3px]">
                        {[1, 2, 3, 4, 5].map((step) => (
                          <span
                            key={step}
                            className={`h-[3px] w-[7px] ${
                              step <= language.proficiency
                                ? "bg-sepia"
                                : "bg-cream/10"
                            }`}
                          />
                        ))}
                      </div>

                      <span className="w-[92px] text-right font-mono text-[8.5px] uppercase tracking-[0.12em] text-cream-3">
                        {language.level.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* ---------------------------------------------------- */}
          {/* Middle column — profile, work, education */}
          {/* ---------------------------------------------------- */}
          <motion.section
            {...rise(0.16)}
            className="flex w-[640px] shrink-0 flex-col"
          >
            {/* Statement */}
            <div>
              <SectionHead index="03" title="Profile" />

              <p className="mt-3 font-display text-[18px] font-medium leading-[27px] tracking-[-0.01em] text-cream-2">
                <span className="text-cream">{statementLead}</span>{" "}
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
                    className="group relative flex items-center gap-3 border-b border-line/60 py-[6px] transition-colors duration-300 hover:border-cream/25"
                  >
                    <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-sepia transition-all duration-300 group-hover:h-[26px]" />

                    <span className="w-[26px] shrink-0 font-mono text-[9.5px] text-sepia transition-colors duration-300 group-hover:text-sepia">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2.5">
                        <h3 className="font-display text-[13.5px] font-semibold leading-[18px] text-cream transition-colors duration-300 group-hover:text-sepia">
                          {project.title}
                        </h3>

                        <span className="h-px flex-1 bg-line/70" />
                      </div>

                      <p className="mt-[3px] truncate text-[10.5px] leading-[15px] text-cream-3">
                        {project.subtitle}
                        <span className="px-[6px] text-cream-3">/</span>
                        <span className="text-cream-3">
                          {project.technologies.slice(0, 3).join(" · ")}
                        </span>
                      </p>
                    </div>

                    <span className="flex shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cream-3">
                      <span
                        className={`h-[5px] w-[5px] rounded-full ${
                          project.status === "Completed"
                            ? "bg-cream-2"
                            : "bg-sepia-soft"
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
              <div className="border border-line bg-ink-2/50 flex flex-col p-4">
                <SectionHead index="05" title="Education" />

                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="mt-3.5 flex flex-1 flex-col"
                  >
                    <h3 className="font-display text-[12.5px] font-semibold leading-[18px] text-cream">
                      {item.degree}
                    </h3>

                    <p className="mt-1.5 text-[10.5px] leading-[15px] text-cream-3">
                      {item.institution}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.14em] text-cream-3">
                      <MapPin size={9} className="text-sepia" />
                      {item.location}
                    </div>

                    {/* Duration */}
                    <div className="mt-auto pt-6">
                      <div className="flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.16em] text-cream-3">
                        <span>{item.period.split(" — ")[0]}</span>
                        <span>{item.period.split(" — ")[1]}</span>
                      </div>

                      <div className="mt-2 h-[3px] w-full bg-cream/10">
                        <div className="h-full w-[82%] bg-gradient-to-r from-sepia via-sepia/70 to-cream/50" />
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
                          ? "h-[10px] bg-sepia"
                          : "h-[4px] bg-cream/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="border border-line bg-ink-2/50 flex flex-col p-4">
                <SectionHead
                  index="06"
                  title="Certifications"
                  meta={`${certifications.length}`}
                />

                <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-[6px]">
                  {certifications.map((certificate, index) => (
                    <div key={certificate.title} className="flex gap-2">
                      <span className="mt-[2px] shrink-0 font-mono text-[8.5px] text-sepia">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[10px] font-medium leading-[13px] text-cream">
                          {certificate.title}
                        </p>

                        <p className="mt-[2px] text-[9px] leading-[12px] text-cream-3">
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
          {/* Right column — capabilities + strengths */}
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
                    <p className="font-mono text-[9px] font-medium uppercase leading-[11px] tracking-[0.2em] text-sepia">
                      {category.title}
                    </p>

                    <p className="mt-[3px] text-[11px] leading-[15px] text-cream-3">
                      {category.skills.map((skill, index) => (
                        <span key={skill}>
                          <span
                            className={
                              index < 2 ? "text-cream" : "text-cream-3"
                            }
                          >
                            {skill}
                          </span>

                          {index < category.skills.length - 1 ? (
                            <span className="px-[5px] text-cream-3">/</span>
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
                        <Icon size={11} className="text-sepia" />

                        <span className="text-[10.5px] font-medium leading-[13px] text-cream">
                          {strength.title}
                        </span>
                      </div>

                      <p className="mt-1.5 text-[9px] leading-[12.5px] text-cream-3">
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
          className="mt-[16px] flex h-[44px] shrink-0 items-center justify-between border-t border-line font-mono text-[9px] uppercase tracking-[0.2em] text-cream-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold tracking-[0.3em] text-cream-2">
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
                  index % 6 === 0 ? "h-[9px] bg-sepia" : "h-[4px] bg-cream/10"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors duration-300 hover:text-sepia"
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
