"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, Download, MapPin, Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import SectionHead from "./SectionHead";

import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { projects } from "@/data/projects";
import { languages } from "@/data/languages";
import { strengths } from "@/data/strengths";

const statementLead =
  "Computer Engineering student building real-time computer-vision systems";

const statementTail =
  "and full-stack products with Python, PyTorch and Django.";

export default function ResumeCompact() {
  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-full w-full bg-void font-sans">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="drift absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-cyan/[0.1] blur-[110px]" />

        <div
          className="drift absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-magenta/[0.08] blur-[120px]"
          style={{ animationDelay: "-8s" }}
        />

        <div className="tech-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(100%_60%_at_50%_0%,#000,transparent_75%)]" />

        <div className="noise-layer absolute inset-0 opacity-[0.04] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto w-full max-w-[560px] px-5 pb-14 pt-6">
        {/* ---------------- Top bar ---------------- */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-colors hover:text-chalk"
          >
            <ArrowLeft
              size={13}
              className="text-cyan transition-transform duration-300 group-hover:-translate-x-1"
            />
            Portfolio
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/[0.07] px-3 py-[6px]">
            <span className="relative flex h-[5px] w-[5px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
              <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-cyan" />
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-chalk">
              Open to work
            </span>
          </div>
        </div>

        {/* ---------------- Identity ---------------- */}
        <header className="mt-8 flex items-center gap-5">
          <div className="relative h-[104px] w-[104px] shrink-0">
            <span className="absolute left-[7px] top-[7px] h-[97px] w-[97px] border border-cyan/30" />

            <div className="absolute left-0 top-0 h-[97px] w-[97px] overflow-hidden bg-panel">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                priority
                sizes="104px"
                className="duotone object-cover object-top"
              />

              <span className="duotone-tint" />

              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
            </div>
          </div>

          <div className="min-w-0">
            <h1 className="font-display text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-chalk">
              {profile.name}
            </h1>

            <div className="mt-2.5 flex items-center gap-2">
              <span className="h-px w-5 bg-cyan/60" />

              <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-cyan">
                {profile.role}
              </p>
            </div>

            <p className="mt-2 text-[10.5px] leading-[16px] text-mist/70">
              {profile.tagline}
            </p>
          </div>
        </header>

        {/* ---------------- Contact ---------------- */}
        <div className="mt-9">
          <SectionHead index="01" title="Contact" />

          <div className="mt-3 grid grid-cols-2 gap-x-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 border-b border-line/60 py-2.5"
            >
              <Mail size={13} className="shrink-0 text-cyan/70" />
              <span className="truncate text-[11px] text-mist">
                {profile.email}
              </span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 border-b border-line/60 py-2.5"
            >
              <Phone size={13} className="shrink-0 text-cyan/70" />
              <span className="text-[11px] text-mist">{profile.phone}</span>
            </a>

            <div className="flex items-center gap-2.5 border-b border-line/60 py-2.5">
              <MapPin size={13} className="shrink-0 text-cyan/70" />
              <span className="text-[11px] text-mist">{profile.location}</span>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border-b border-line/60 py-2.5"
            >
              <FaLinkedin size={13} className="shrink-0 text-cyan/70" />
              <span className="truncate text-[11px] text-mist">
                /in/amirabbas-salari
              </span>
            </a>
          </div>
        </div>

        {/* ---------------- Profile ---------------- */}
        <div className="mt-9">
          <SectionHead index="02" title="Profile" />

          <p className="mt-3.5 font-display text-[16px] font-medium leading-[26px] text-mist">
            <span className="text-chalk">{statementLead}</span>{" "}
            {statementTail}
          </p>
        </div>

        {/* ---------------- Capabilities ---------------- */}
        <div className="mt-9">
          <SectionHead
            index="03"
            title="Capabilities"
            meta={`${skillCategories.length} domains`}
          />

          <div className="mt-4 flex flex-col gap-4">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-cyan/60">
                  {category.title}
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {category.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`notch-sm border px-2.5 py-1.5 text-[10px] ${
                        index < 2
                          ? "border-cyan/25 bg-cyan/[0.06] text-chalk"
                          : "border-line bg-white/[0.02] text-mist/80"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- Selected work ---------------- */}
        <div className="mt-9">
          <SectionHead
            index="04"
            title="Selected Work"
            meta={`${projects.length} builds`}
          />

          <div className="mt-3">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex gap-3 border-b border-line/60 py-3.5 transition-colors hover:border-cyan/30"
              >
                <span className="mt-[3px] shrink-0 font-mono text-[9.5px] text-cyan/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[13px] font-semibold text-chalk transition-colors group-hover:text-cyan">
                      {project.title}
                    </h3>

                    <span className="flex shrink-0 items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.14em] text-dim">
                      <span
                        className={`h-[5px] w-[5px] rounded-full ${
                          project.status === "Completed"
                            ? "bg-mist"
                            : "bg-magenta"
                        }`}
                      />
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-1 text-[10.5px] leading-[16px] text-mist/70">
                    {project.subtitle}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9.5px] text-dim"
                      >
                        {tech}
                        <span className="pl-1.5 text-line-bright">/</span>
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ---------------- Education ---------------- */}
        <div className="mt-9">
          <SectionHead index="05" title="Education" />

          <div className="mt-3 flex flex-col gap-2.5">
            {education.map((item) => (
              <div key={item.degree} className="hud hud-sm hud-quiet p-5">
                <h3 className="font-display text-[13px] font-semibold text-chalk">
                  {item.degree}
                </h3>

                <p className="mt-1.5 text-[11px] text-mist/70">
                  {item.institution}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="notch-sm border border-cyan/25 bg-cyan/[0.06] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cyan/90">
                    {item.period}
                  </span>

                  <span className="label flex items-center gap-1.5 text-dim">
                    <MapPin size={9} className="text-cyan/70" />
                    {item.location}
                  </span>
                </div>

                <div className="mt-5 h-[3px] w-full bg-white/[0.06]">
                  <div className="h-full w-[82%] bg-gradient-to-r from-cyan via-violet/70 to-magenta/60" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- Certifications ---------------- */}
        <div className="mt-9">
          <SectionHead
            index="06"
            title="Certifications"
            meta={`${certifications.length}`}
          />

          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {certifications.map((certificate, index) => (
              <div
                key={certificate.title}
                className="hud hud-sm hud-quiet p-4"
              >
                <span className="font-mono text-[8.5px] text-cyan/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-1 text-[11px] font-medium leading-[15px] text-chalk">
                  {certificate.title}
                </p>

                <p className="mt-1 text-[9px] leading-[13px] text-dim">
                  {certificate.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- Languages ---------------- */}
        <div className="mt-9">
          <SectionHead index="07" title="Languages" />

          <div className="mt-3 flex flex-col gap-3">
            {languages.map((language) => (
              <div
                key={language.name}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-[11.5px] text-mist">
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

                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-dim">
                    {language.level.split(" ")[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- Strengths ---------------- */}
        <div className="mt-9">
          <SectionHead index="08" title="Strengths" />

          <div className="mt-3 flex flex-col gap-2.5">
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <div
                  key={strength.number}
                  className="hud hud-sm hud-quiet flex gap-3 p-4"
                >
                  <Icon
                    size={15}
                    className="mt-[2px] shrink-0 text-cyan/70"
                  />

                  <div>
                    <h3 className="font-display text-[12px] font-semibold text-chalk">
                      {strength.title}
                    </h3>

                    <p className="mt-1.5 text-[10.5px] leading-[16px] text-mist/70">
                      {strength.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- Actions ---------------- */}
        <div className="mt-10">
          <a
            href="/Amir-Abbas-Salari-Nasab-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="notch-sm flex w-full items-center justify-center gap-2 border border-cyan/45 bg-cyan/10 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk transition-all duration-300 hover:bg-cyan/20"
          >
            <Download size={13} />
            Download full CV
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="notch-sm mt-2.5 flex w-full items-center justify-center gap-2 border border-line px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-all duration-300 hover:border-cyan/45 hover:text-chalk"
          >
            <Mail size={13} />
            Send message
          </a>
        </div>

        {/* ---------------- Footer ---------------- */}
        <footer className="mt-10 flex items-center justify-between border-t border-line/70 pt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
          <span>{profile.shortName}</span>
          <span>
            {year} · {profile.location}
          </span>
        </footer>
      </div>
    </div>
  );
}
