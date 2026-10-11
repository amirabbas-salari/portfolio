import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FileText, Mail } from "lucide-react";

import { profile } from "@/data/profile";

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-line/80 bg-ink-2/40">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Poster wordmark */}
        <div className="flex flex-col gap-6 border-b border-line/70 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-5xl font-semibold leading-none tracking-tight text-cream sm:text-6xl">
              A.A.S
            </p>

            <p className="label mt-4 text-cream-3">
              {"// Striving for a better tomorrow"}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 border border-cream/25 px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-ink"
            >
              <FileText size={13} />
              One-screen résumé
            </Link>

            <Link
              href="/projects/projects"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream-2 transition-colors duration-300 hover:border-cream/45 hover:text-cream"
            >
              All projects
            </Link>
          </div>
        </div>

        <div className="grid gap-12 pt-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-cream">
              Amir Abbas Salari Nasab
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-cream-3">
              {profile.tagline}
            </p>

            <p className="mt-6 text-sm text-cream-2">
              {profile.location} · {profile.phone}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label">{"// Navigate"}</p>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-cream-3 transition-colors duration-300 hover:text-cream"
                  >
                    <span className="h-px w-0 bg-cream transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label">{"// Contact"}</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="block break-all text-sm text-cream-2 transition-colors hover:text-cream"
                >
                  {profile.email}
                </a>
              </li>

              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="block text-sm text-cream-2 transition-colors hover:text-cream"
                >
                  {profile.phone}
                </a>
              </li>

              <li className="text-sm text-cream-3">{profile.location}</li>
            </ul>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-line text-cream-3 transition-all duration-300 hover:border-cream/50 hover:text-sepia"
              >
                <FaLinkedin size={14} />
              </a>

              {profile.github ? (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center border border-line text-cream-3 transition-all duration-300 hover:border-cream/50 hover:text-sepia"
                >
                  <FaGithub size={14} />
                </a>
              ) : null}

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center border border-line text-cream-3 transition-all duration-300 hover:border-cream/50 hover:text-sepia"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-cream-3">
            © {year} {profile.shortName}. All rights reserved.
          </p>

          <p className="label text-cream-3">
            {"// Next.js · Tailwind — designed & built from scratch"}
          </p>
        </div>
      </div>
    </footer>
  );
}
