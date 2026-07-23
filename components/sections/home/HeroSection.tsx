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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-zinc-100 text-5xl sm:text-6xl lg:text-7xl font-medium leading-tight lg:leading-[105.71px] max-w-4xl drop-shadow-lg"
            >
              You Can't Be Everywhere.<br className="hidden sm:block" />
              <span className="lowercase font-medium">we are</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-96 shrink-0"
            >
              <p className="text-white text-2xl font-normal leading-8">
                YOUR EYES. YOUR EARS. YOUR IN-PERSON REPRESENTATIVE IN JAMAICA.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-9 w-full max-w-[493px]"
          >
            <p className="text-amber-200 text-2xl font-normal leading-8 whitespace-nowrap">
              A Campbell Legacy Holdings, LLC Company
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-6 mt-9"
            >
              <button
                onClick={handleRequestService}
                className="px-3.5 py-3 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm inline-flex items-center justify-center gap-2.5 text-stone-900 text-xl font-medium leading-7 hover:opacity-90 transition-all"
              >
                REQUEST SERVICE
              </button>
              <a
                href="/pricing"
                className="px-3.5 py-3 bg-zinc-100/30 rounded-sm outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex items-center justify-center gap-2.5 text-white text-xl font-medium leading-7 hover:bg-zinc-100/40 transition-all"
              >
                View Plans
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
