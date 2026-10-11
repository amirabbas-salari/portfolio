"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  { label: "Résumé", href: "/resume", highlight: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line/80 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <nav className="flex h-[76px] items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <span className="font-display text-[19px] font-semibold tracking-[0.08em] text-cream transition-colors duration-300 group-hover:text-cream-2">
                A.A.S
              </span>

              <span className="hidden h-4 w-px bg-line-bright sm:block" />

              <span className="hidden flex-col leading-tight sm:flex">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-3">
                  Amir Abbas Salari Nasab
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-2 font-mono text-[10.5px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    item.highlight
                      ? "text-sepia hover:text-cream"
                      : "text-cream-3 hover:text-cream"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                      item.highlight ? "bg-sepia" : "bg-cream/50"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Poster tagline */}
            <div className="hidden items-center gap-4 xl:flex">
              <span className="h-4 w-px bg-line-bright" />

              <span className="label text-cream-3">
                {"// Build · Create · Improve"}
              </span>
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-4 md:flex">
              <Link
                href="#contact"
                className="border border-cream/30 px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-ink"
              >
                Let&apos;s talk
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center border border-line text-cream-2 transition-colors hover:border-cream/50 hover:text-cream lg:hidden"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(90%_60%_at_50%_0%,#000,transparent_75%)]" />

        <div className="relative flex min-h-full flex-col px-6 pb-8 pt-28 sm:px-8">
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between border-b border-line/70 py-5"
              >
                <span
                  className={`font-display text-3xl font-semibold tracking-tight transition-colors duration-300 ${
                    item.highlight
                      ? "text-sepia"
                      : "text-cream/85 group-hover:text-cream"
                  }`}
                >
                  {item.label}
                </span>

                <span className="label text-cream-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}

            <Link
              href="/projects/projects"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between border-b border-line/70 py-5"
            >
              <span className="font-display text-3xl font-semibold tracking-tight text-cream/85 transition-colors duration-300 group-hover:text-cream">
                All builds
              </span>

              <span className="label text-cream-3">07</span>
            </Link>
          </div>

          <div className="mt-auto">
            <Link
              href="/resume"
              onClick={() => setIsOpen(false)}
              className="mb-3 flex items-center justify-center border border-cream/30 px-6 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream"
            >
              One-screen résumé
            </Link>

            <p className="label mt-8 text-center text-cream-3">
              Kerman · IR — Open to work
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
