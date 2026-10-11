"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export default function CertificationCard({
  certification,
  index,
}: CertificationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className="hud hud-quiet brackets group relative overflow-hidden"
      >
        {/* Image */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative block w-full overflow-hidden bg-panel"
          aria-label={`View ${certification.title} certificate`}
        >
          <Image
            src={certification.image}
            alt={certification.title}
            width={1600}
            height={1100}
            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <span className="duotone-tint" />

          <div className="absolute inset-0 bg-void/0 transition-colors duration-300 group-hover:bg-void/40" />

          <span className="label absolute left-4 top-4 border border-cyan/30 bg-void/70 px-2.5 py-2 text-cyan/80 backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="absolute bottom-4 right-4 flex items-center gap-2 border border-cyan/30 bg-void/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-chalk opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            Inspect
            <ArrowUpRight size={12} className="text-cyan" />
          </span>
        </button>

        {/* Content */}
        <div className="flex items-start justify-between gap-4 border-t border-line/70 p-5">
          <div>
            <h3 className="font-display text-sm font-semibold tracking-tight text-chalk transition-colors duration-300 group-hover:text-cyan">
              {certification.title}
            </h3>

            <p className="label mt-2 text-dim">{certification.issuer}</p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-8 w-8 shrink-0 items-center justify-center notch-sm border border-line text-dim transition-colors duration-300 hover:border-cyan/50 hover:text-cyan"
            aria-label={`Open ${certification.title}`}
          >
            <ArrowUpRight size={13} />
          </button>
        </div>
      </motion.article>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-void/95 p-5 backdrop-blur-md sm:p-10"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center notch-sm border border-line bg-panel text-mist transition-colors hover:border-cyan/50 hover:text-chalk"
              aria-label="Close certificate"
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="hud relative max-h-[90vh] max-w-6xl overflow-hidden bg-panel"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={certification.image}
                alt={certification.title}
                width={1600}
                height={1100}
                className="max-h-[85vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
