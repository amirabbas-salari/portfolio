"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Education",
    href: "#education",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className={`rounded-2xl border px-4 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border-white/[0.1] bg-black/70 shadow-2xl shadow-black/20 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link
              href="#home"
              className="text-sm font-semibold tracking-tight text-white"
            >
              AASN
            </Link>

            {/* Desktop */}
            <div className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-zinc-500 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="group flex items-center gap-1.5 text-xs font-medium text-white"
              >
                Let&apos;s talk

                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Mobile */}
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="Toggle navigation"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-zinc-400 md:hidden"
            >
              {mobileOpen ? (
                <X size={17} />
              ) : (
                <Menu size={17} />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              mobileOpen
                ? "max-h-80 pb-4 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/[0.06] pt-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-xl bg-white px-3 py-3 text-center text-sm font-medium text-black"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}