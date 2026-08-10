"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02]"
      >
        {/* Certificate Image */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative block w-full overflow-hidden bg-zinc-950"
          aria-label={`View ${certification.title} certificate`}
        >
          <Image
            src={certification.image}
            alt={certification.title}
            width={1600}
            height={1100}
            className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/45" />

          {/* View button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-md">
              View Certificate

              <ArrowUpRight size={14} />
            </span>
          </div>
        </button>

        {/* Content */}
        <div className="flex items-start justify-between gap-5 p-6">
          <div>
            <h3 className="text-base font-semibold leading-6 text-white">
              {certification.title}
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              {certification.issuer}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-zinc-600 transition-colors hover:border-white/[0.15] hover:text-white"
            aria-label={`Open ${certification.title}`}
          >
            <ArrowUpRight size={15} />
          </button>
        </div>
      </motion.article>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md sm:p-10"
            onClick={() => setIsOpen(false)}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close certificate"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
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
        )}
      </AnimatePresence>
    </>
  );
}