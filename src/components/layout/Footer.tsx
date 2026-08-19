import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";



import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="#home"
              className="text-lg font-semibold text-white"
            >
              AASN
            </Link>

            <p className="mt-2 text-xs text-zinc-600">
              Full-Stack Developer & AI Engineer | Django • React • Computer Vision
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
            >
              <FaLinkedin size={16} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-full border border-white/10 p-2.5 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Mail size={16} />
            </a>

            <a
              href="#"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2.5 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.05] pt-6">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Amir Abbas Salari Nasab. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
