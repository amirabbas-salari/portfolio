"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
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
            ? "border-b border-line/80 bg-void/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <nav className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center notch-sm border border-cyan/40 bg-cyan/[0.08] transition-all duration-300 group-hover:border-cyan group-hover:shadow-[0_0_24px_-6px_rgba(53,230,255,0.7)]">
                <span className="font-display text-[13px] font-bold tracking-tight text-chalk">
                  AS
                </span>

                <span className="absolute -right-px -top-px h-[5px] w-[5px] bg-cyan" />
              </span>

              <span className="hidden flex-col leading-none sm:flex">
                <span className="font-display text-[13px] font-semibold tracking-[0.14em] text-chalk">
                  AMIR ABBAS SALARI
                </span>

                <span className="label mt-1 text-dim">AI · Vision · Full-Stack</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    item.highlight
                      ? "text-cyan hover:text-chalk"
                      : "text-mist hover:text-chalk"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute inset-x-3 bottom-1.5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                      item.highlight ? "bg-cyan" : "bg-cyan/60"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/projects/projects"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-chalk"
              >
                All builds
              </Link>

              <Link
                href="#contact"
                className="notch-sm border border-cyan/45 bg-cyan/10 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk transition-all duration-300 hover:border-cyan hover:bg-cyan/20 hover:shadow-[0_0_30px_-8px_rgba(53,230,255,0.65)]"
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
              className="flex h-10 w-10 items-center justify-center notch-sm border border-line bg-panel/60 text-mist transition-colors hover:border-cyan/50 hover:text-chalk md:hidden"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-void/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(90%_60%_at_50%_0%,#000,transparent_75%)]" />

        <div className="relative flex min-h-full flex-col px-5 pb-8 pt-28 sm:px-6">
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
                      ? "text-cyan"
                      : "text-chalk/80 group-hover:text-chalk"
                  }`}
                >
                  {item.label}
                </span>

                <span className="label text-dim">{String(index + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <Link
              href="/resume"
              onClick={() => setIsOpen(false)}
              className="mb-3 flex items-center justify-center notch-sm border border-cyan/40 bg-cyan/10 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk"
            >
              One-screen résumé
            </Link>

            <p className="label mt-8 text-center text-dim">
              Kerman · IR — Open to work
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
