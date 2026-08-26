"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
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
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <nav
            className={`flex h-20 items-center justify-between transition-all duration-500 ${
              scrolled
                ? "border-b border-white/[0.06]"
                : ""
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-xs font-semibold tracking-tight text-white transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/10">
                AS
              </span>

              <span className="hidden text-sm font-medium tracking-tight text-white sm:block">
                AmirAbbas Salari
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.025] p-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-xs font-medium text-zinc-500 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/projects/projects"
                className="text-xs font-medium text-zinc-500 transition-colors hover:text-white"
              >
                All projects
              </Link>

              <Link
                href="#contact"
                className="rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black transition-colors hover:bg-zinc-200"
              >
                Let&apos;s talk
              </Link>
            </div>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={
                isOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
            >
              {isOpen ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505] transition-all duration-500 md:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[120px]" />

        <div className="relative flex min-h-full flex-col px-5 pb-8 pt-28 sm:px-6">
          {/* Navigation links */}
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-white/[0.06] py-5"
              >
                <span className="text-3xl font-medium tracking-tight text-zinc-400 transition-colors duration-300 group-hover:text-white">
                  {item.label}
                </span>

                <span className="text-[10px] tracking-[0.2em] text-zinc-700">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-auto">
            <Link
              href="/projects/projects"
              onClick={closeMenu}
              className="mb-3 flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
            >
              View all projects
            </Link>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Let&apos;s talk
            </Link>

            <p className="mt-8 text-center text-[10px] uppercase tracking-[0.25em] text-zinc-700">
              AI · Computer Vision · Full-Stack
            </p>
          </div>
        </div>
      </div>
    </>
  );
}