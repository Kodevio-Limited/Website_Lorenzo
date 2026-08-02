"use client";

import React from "react";
import { motion } from "motion/react";

interface HeroSectionProps {
  setView?: (view: string) => void;
}

export function HeroSection({ setView }: HeroSectionProps) {
  const handleRequestService = () => {
    window.location.href = '/contact';
  };

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-bg.png"
          alt=""
          className="h-full w-full object-cover object-center select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 to-black z-[1]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-28 lg:pt-36 pb-24 min-h-screen flex flex-col">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-100 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-tight lg:leading-[105.71px] max-w-4xl drop-shadow-lg"
            >
              You Can't Be Everywhere.<br className="hidden sm:block" />
              <span className="font-medium">We Are</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-96 shrink-0"
            >
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-7 md:leading-8">
                YOUR EYES. YOUR EARS. YOUR IN-PERSON REPRESENTATIVE IN JAMAICA.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 w-full max-w-[493px]"
          >
            <p className="text-amber-200 text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-7 md:leading-8">
              A Campbell Legacy Holdings, LLC Company
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 sm:gap-6 mt-9"
            >
              <motion.button
                onClick={handleRequestService}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 sm:px-3.5 py-2.5 sm:py-3 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm inline-flex items-center justify-center gap-2 sm:gap-2.5 text-stone-900 text-base sm:text-lg lg:text-xl font-medium leading-6 sm:leading-7 hover:opacity-90 transition-all"
              >
                REQUEST SERVICE
              </motion.button>
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 sm:px-3.5 py-2.5 sm:py-3 bg-zinc-100/30 rounded-sm outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex items-center justify-center gap-2 sm:gap-2.5 text-white text-base sm:text-lg lg:text-xl font-medium leading-6 sm:leading-7 hover:bg-zinc-100/40 transition-all"
              >
                View Plans
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
