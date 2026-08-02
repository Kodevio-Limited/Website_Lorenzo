"use client";

import React from "react";
import { motion } from "motion/react";

export function CtaBannerSection() {
  return (
    <section className="relative w-full bg-[#000B03] min-h-[560px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <motion.img
        src="/assets/images/cta-banner-bg.png"
        alt=""
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative w-full h-full px-6 md:px-12 lg:px-16 py-20 lg:py-0 flex items-center">
        <div className="w-full max-w-[843px] flex flex-col justify-start items-start gap-6 lg:gap-9">
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="self-stretch"
          >
            <span className="text-zinc-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:text-7xl font-medium leading-tight md:leading-[99.02px]">
              You Can&apos;t Be Everywhere.{' '}
            </span>
            <span className="text-amber-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:text-7xl font-bold leading-tight md:leading-[110.82px]" style={{ fontFamily: "'Times New Roman', serif" }}>
                We Are
              </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[802px] text-zinc-400 text-lg sm:text-xl md:text-2xl md:text-3xl font-normal leading-7 md:leading-8 md:leading-10"
          >
            Get reliable verification, strict documentation, and dedicated representation exactly when and where you need it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-start items-center gap-4 sm:gap-6"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 sm:px-3.5 py-3 sm:py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm text-stone-900 text-lg sm:text-xl md:text-2xl font-medium leading-7 sm:leading-8"
            >
              Request a Quote
            </motion.a>
            <motion.a
              href="https://clientdashbaordlorenzo.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 sm:px-3.5 py-3 sm:py-5 bg-zinc-100/30 rounded-sm outline outline-1 outline-offset-[-1px] outline-neutral-400 text-white text-lg sm:text-xl md:text-2xl font-medium leading-7 sm:leading-8"
            >
              Client Portal
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
