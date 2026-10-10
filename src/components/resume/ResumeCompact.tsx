"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";
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
    <div className="relative min-h-full w-full overflow-hidden bg-[#08080A] font-display">
      {/* Ambient light */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#C778DD]/[0.12] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#4D6BFF]/[0.1] blur-[120px]" />
      <div className="resume-grain pointer-events-none fixed inset-0" />

      <div className="relative mx-auto w-full max-w-[560px] px-5 pb-14 pt-6">
        {/* ---------------- Top bar ---------------- */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={12}
              className="transition-transform duration-300 group-hover:-translate-x-[2px]"
            />
            Portfolio
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-[#C778DD]/25 bg-[#C778DD]/[0.07] px-3 py-[6px]">
            <span className="relative flex h-[5px] w-[5px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C778DD] opacity-70" />
              <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-[#C778DD]" />
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-300">
              Open to opportunities
            </span>
          </div>
        </div>

        {/* ---------------- Identity ---------------- */}
        <header className="mt-8 flex items-center gap-5">
          <div className="relative h-[104px] w-[104px] shrink-0">
            <span className="absolute left-[7px] top-[7px] h-[97px] w-[97px] border border-[#C778DD]/30" />

            <div className="absolute left-0 top-0 h-[97px] w-[97px] overflow-hidden bg-[#101014]">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                priority
                sizes="104px"
                className="object-cover object-top grayscale contrast-[1.05] brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent" />
            </div>
          </div>

          <div className="min-w-0">
            <h1 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
              {profile.name}
            </h1>

            <div className="mt-2.5 flex items-center gap-2">
              <span className="h-px w-5 bg-[#C778DD]/60" />
              <p className="text-[9.5px] font-medium uppercase tracking-[0.2em] text-[#C778DD]">
                {profile.role}
              </p>
            </div>

            <p className="mt-2 text-[10.5px] leading-[16px] text-zinc-500">
              {profile.tagline}
            </p>
          </div>
        </header>

        {/* ---------------- Contact ---------------- */}
        <div className="mt-8">
          <SectionHead index="01" title="Contact" />

          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 border-b border-white/[0.06] py-2.5"
            >
              <Mail size={12} className="shrink-0 text-[#C778DD]/70" />
              <span className="truncate text-[11px] text-zinc-300">
                {profile.email}
              </span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 border-b border-white/[0.06] py-2.5"
            >
              <Phone size={12} className="shrink-0 text-[#C778DD]/70" />
              <span className="text-[11px] text-zinc-300">{profile.phone}</span>
            </a>

            <div className="flex items-center gap-2.5 border-b border-white/[0.06] py-2.5">
              <MapPin size={12} className="shrink-0 text-[#C778DD]/70" />
              <span className="text-[11px] text-zinc-300">
                {profile.location}
              </span>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border-b border-white/[0.06] py-2.5"
            >
              <FaLinkedin size={12} className="shrink-0 text-[#C778DD]/70" />
              <span className="truncate text-[11px] text-zinc-300">
                /in/amirabbas-salari
              </span>
            </a>
          </div>
        </div>

        {/* ---------------- Profile ---------------- */}
        <div className="mt-9">
          <SectionHead index="02" title="Profile" />

          <p className="mt-3.5 font-editorial text-[16px] italic leading-[26px] text-zinc-400">
            <span className="text-zinc-100">{statementLead}</span>{" "}
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
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#C778DD]/60">
                  {category.title}
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {category.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`border px-2 py-[3px] text-[10px] ${
                        index < 2
                          ? "border-[#C778DD]/25 bg-[#C778DD]/[0.06] text-zinc-100"
                          : "border-white/[0.08] bg-white/[0.02] text-zinc-400"
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
                className="group flex gap-3 border-b border-white/[0.06] py-3.5 transition-colors hover:border-white/[0.14]"
              >
                <span className="mt-[3px] shrink-0 font-mono text-[9.5px] text-[#C778DD]/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[13px] font-medium text-white transition-colors group-hover:text-[#C778DD]">
                      {project.title}
                    </h3>

                    <span className="flex shrink-0 items-center gap-1.5 text-[8.5px] uppercase tracking-[0.14em] text-zinc-500">
                      <span
                        className={`h-[5px] w-[5px] rounded-full ${
                          project.status === "Completed"
                            ? "bg-zinc-400"
                            : "bg-[#C778DD]"
                        }`}
                      />
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-1 text-[10.5px] leading-[16px] text-zinc-500">
                    {project.subtitle}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9.5px] text-zinc-600"
                      >
                        {tech}
                        <span className="pl-1.5 text-zinc-800">·</span>
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
              <div
                key={item.degree}
                className="border border-white/[0.07] bg-white/[0.012] p-4"
              >
                <h3 className="text-[13px] font-medium text-white">
                  {item.degree}
                </h3>

                <p className="mt-1.5 text-[11px] text-zinc-500">
                  {item.institution}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="border border-white/[0.09] px-2 py-[3px] text-[9px] uppercase tracking-[0.14em] text-zinc-400">
                    {item.period}
                  </span>

                  <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.14em] text-zinc-600">
                    <MapPin size={9} />
                    {item.location}
                  </span>
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
                className="border border-white/[0.07] bg-white/[0.012] p-3"
              >
                <span className="font-mono text-[8.5px] text-[#C778DD]/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-1 text-[11px] font-medium leading-[15px] text-zinc-200">
                  {certificate.title}
                </p>

                <p className="mt-1 text-[9px] leading-[13px] text-zinc-600">
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
                <span className="text-[11.5px] text-zinc-300">
                  {language.name}
                </span>

                <div className="flex items-center gap-2.5">
                  <div className="flex gap-[3px]">
                    {[1, 2, 3, 4, 5].map((step) => (
                      <span
                        key={step}
                        className={`h-[3px] w-[7px] ${
                          step <= language.proficiency
                            ? "bg-[#C778DD]/80"
                            : "bg-white/[0.08]"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.12em] text-zinc-600">
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
                  className="flex gap-3 border border-white/[0.07] bg-white/[0.012] p-4"
                >
                  <Icon size={14} className="mt-[2px] shrink-0 text-[#C778DD]/70" />

                  <div>
                    <h3 className="text-[12px] font-medium text-zinc-100">
                      {strength.title}
                    </h3>

                    <p className="mt-1.5 text-[10.5px] leading-[16px] text-zinc-500">
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
            className="flex w-full items-center justify-center gap-2 border border-[#C778DD]/40 bg-[#C778DD]/[0.08] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#C778DD]/[0.14]"
          >
            <Download size={13} />
            Download full CV
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="mt-2.5 flex w-full items-center justify-center gap-2 border border-white/[0.1] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
          >
            <Mail size={13} />
            Send message
          </a>
        </div>

        {/* ---------------- Footer ---------------- */}
        <footer className="mt-10 flex items-center justify-between border-t border-white/[0.07] pt-5 text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          <span>{profile.shortName}</span>
          <span>
            {year} · {profile.location}
          </span>
        </footer>
      </div>
    </div>
  );
}
