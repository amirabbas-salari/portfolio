"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({
  certification,
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

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen]);

  return (
    <>
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className="group overflow-hidden border border-zinc-500 bg-[#282c33] transition-colors hover:border-violet-400/70"
      >
        {/* Image */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative block w-full overflow-hidden bg-zinc-900"
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

          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />

          <span className="absolute bottom-3 right-3 flex items-center gap-2 border border-white/20 bg-[#282c33]/90 px-3 py-2 text-[10px] text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            View
            <ArrowUpRight size={12} />
          </span>
        </button>

        {/* Content */}
        <div className="flex items-start justify-between gap-4 border-t border-zinc-500 p-4">
          <div>
            <h3 className="text-xs font-bold leading-5 text-white">
              {certification.title}
            </h3>

            <p className="mt-1 text-[10px] text-zinc-500">
              {certification.issuer}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-7 w-7 shrink-0 items-center justify-center border border-zinc-500 text-zinc-500 transition-colors hover:border-violet-400 hover:text-violet-400"
            aria-label={`Open ${certification.title}`}
          >
            <ArrowUpRight size={12} />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm sm:p-10"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center border border-zinc-500 bg-[#282c33] text-zinc-400 transition-colors hover:border-violet-400 hover:text-white"
              aria-label="Close certificate"
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-6xl overflow-hidden border border-zinc-500 bg-zinc-950"
              onClick={(event) =>
                event.stopPropagation()
              }
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