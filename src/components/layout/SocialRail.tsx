"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

import { profile } from "@/data/profile";

export default function SocialRail() {
  return (
    <aside className="fixed left-5 top-0 z-40 hidden h-screen w-6 flex-col items-center lg:flex">
      {/* Vertical line */}
      <div className="h-28 w-px bg-zinc-600" />

      {/* Icons */}
      <div className="mt-3 flex flex-col items-center gap-4">
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 transition-colors hover:text-white"
          >
            <FaGithub size={15} />
          </a>
        )}

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-zinc-500 transition-colors hover:text-white"
        >
          <FaLinkedin size={15} />
        </a>

        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="text-zinc-500 transition-colors hover:text-white"
        >
          <Mail size={15} />
        </a>
      </div>
    </aside>
  );
}