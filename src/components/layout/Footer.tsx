import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FileText, Mail } from "lucide-react";

import { profile } from "@/data/profile";

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line/80 bg-abyss/40">
      {/* Neon rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center notch-sm border border-cyan/40 bg-cyan/[0.08]">
                <span className="font-display text-sm font-bold text-chalk">
                  AS
                </span>

                <span className="absolute -right-px -top-px h-[5px] w-[5px] bg-cyan" />
              </span>

              <div>
                <p className="font-display text-sm font-semibold tracking-[0.14em] text-chalk">
                  AMIR ABBAS SALARI NASAB
                </p>

                <p className="label mt-1.5 text-dim">
                  AI · Computer Vision · Full-Stack
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-mist/70">
              {profile.tagline}
            </p>

            <Link
              href="/resume"
              className="group mt-7 inline-flex items-center gap-2 notch-sm border border-line px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition-all duration-300 hover:border-cyan/50 hover:text-chalk"
            >
              <FileText size={13} className="text-cyan/70" />
              One-screen résumé
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="label text-cyan/70">[ Navigate ]</p>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mist transition-colors duration-300 hover:text-chalk"
                  >
                    <span className="h-px w-0 bg-cyan transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label text-cyan/70">[ Signal ]</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="block break-all text-sm text-mist transition-colors hover:text-chalk"
                >
                  {profile.email}
                </a>
              </li>

              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="block text-sm text-mist transition-colors hover:text-chalk"
                >
                  {profile.phone}
                </a>
              </li>

              <li className="text-sm text-mist/70">{profile.location}</li>
            </ul>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center notch-sm border border-line text-dim transition-all duration-300 hover:border-cyan/50 hover:text-cyan"
              >
                <FaLinkedin size={14} />
              </a>

              {profile.github ? (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center notch-sm border border-line text-dim transition-all duration-300 hover:border-cyan/50 hover:text-cyan"
                >
                  <FaGithub size={14} />
                </a>
              ) : null}

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center notch-sm border border-line text-dim transition-all duration-300 hover:border-cyan/50 hover:text-cyan"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-dim">
            © {year} {profile.shortName} — All rights reserved
          </p>

          <p className="label flex items-center gap-2 text-dim">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            System online — Next.js · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
