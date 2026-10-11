"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

import { profile } from "@/data/profile";

const links = [
  ...(profile.github
    ? [
        {
          href: profile.github,
          label: "GitHub",
          icon: <FaGithub size={14} />,
          external: true,
        },
      ]
    : []),
  {
    href: profile.linkedin,
    label: "LinkedIn",
    icon: <FaLinkedin size={14} />,
    external: true,
  },
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: <Mail size={14} />,
    external: false,
  },
];

export default function SocialRail() {
  return (
    <aside className="fixed left-7 top-0 z-30 hidden h-screen w-6 flex-col items-center 2xl:flex">
      <span className="h-32 w-px bg-line" />

      <div className="mt-5 flex flex-col items-center gap-5">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className="group relative flex h-8 w-8 items-center justify-center text-cream-3 transition-colors duration-300 hover:text-sepia"
          >
            {link.icon}

            <span className="absolute -left-[7px] top-1/2 h-8 w-px -translate-y-1/2 bg-transparent transition-colors duration-300 group-hover:bg-cream/40" />
          </a>
        ))}
      </div>

      <span className="mt-5 h-28 w-px bg-line" />

      <span
        className="label mt-7 text-cream-3"
        style={{ writingMode: "vertical-rl" }}
      >
        {profile.shortName} · {new Date().getFullYear()}
      </span>
    </aside>
  );
}
