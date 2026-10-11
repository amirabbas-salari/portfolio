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
    <aside className="fixed left-6 top-0 z-30 hidden h-screen w-6 flex-col items-center 2xl:flex">
      <span className="h-28 w-px bg-line" />

      <div className="mt-4 flex flex-col items-center gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className="group relative flex h-8 w-8 items-center justify-center text-dim transition-colors duration-300 hover:text-cyan"
          >
            {link.icon}

            <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 border border-transparent transition-colors duration-300 group-hover:border-cyan/40" />
          </a>
        ))}
      </div>

      <span className="mt-4 h-24 w-px bg-line" />

      <span
        className="label mt-6 text-dim"
        style={{ writingMode: "vertical-rl" }}
      >
        {profile.shortName} · {new Date().getFullYear()}
      </span>
    </aside>
  );
}
