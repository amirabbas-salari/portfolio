import Link from "next/link";
import {
  FileText,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


import { profile } from "@/data/profile";


export default function Footer() {
  return (
    <footer className="border-t border-zinc-600/60">

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">


          {/* Brand */}
          <div>

            <Link
              href="/"
              className="text-lg font-bold text-white"
            >
              AASN
            </Link>


            <p className="mt-2 text-xs text-zinc-600">
              Full-Stack Developer & AI Engineer
            </p>

          </div>



          {/* Social */}
          <div className="flex items-center gap-3">

            <Link
              href="/resume"
              className="flex h-9 items-center gap-2 border border-zinc-500 px-4 text-xs text-zinc-500 transition-colors hover:border-violet-400 hover:text-violet-400"
            >
              <FileText size={13} />
              One-screen résumé
            </Link>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center border border-zinc-500 text-zinc-500 transition-colors hover:border-violet-400 hover:text-violet-400"
            >
              <FaLinkedin size={15}/>
            </a>


            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center border border-zinc-500 text-zinc-500 transition-colors hover:border-violet-400 hover:text-violet-400"
            >
              <FaGithub size={15}/>
            </a>


            <a
              href={`mailto:${profile.email}`}
              className="flex h-9 w-9 items-center justify-center border border-zinc-500 text-zinc-500 transition-colors hover:border-violet-400 hover:text-violet-400"
            >
              <Mail size={15}/>
            </a>

          </div>


        </div>



        <div className="mt-8 border-t border-zinc-700 pt-6">

          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Amir Abbas Salari Nasab.
            All rights reserved.
          </p>

        </div>


      </div>

    </footer>
  );
}