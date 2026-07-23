"use client";

import React from "react";
import { motion } from "motion/react";

export function FounderSection() {
  return (
    <section
      id="founder-section"
      className="section-full bg-[#000B03]"
    >
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full min-h-[calc(100vh-10rem)] flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[656px] shrink-0"
          >
            <img
              src="/assets/images/founder.jpg"
              alt="Lorenzo Andrew Campbell — Founder"
              className="w-full h-auto object-scale-down bg-[#000B03]"
              style={{ aspectRatio: '656/794' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:w-[964px] flex flex-col items-start gap-16 lg:gap-20"
          >
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-9">
                <div className="flex flex-col items-start gap-5">
                  <span className="text-amber-200 text-2xl font-normal leading-8">
                    Meet the founder
                  </span>
                  <h2 className="w-full max-w-[952px] text-white text-4xl sm:text-5xl font-normal leading-tight sm:leading-[63px]">
                    &ldquo;You Can&rsquo;t Be Everywhere. We Are.&rdquo;
                  </h2>
                </div>
                <p className="text-neutral-400 text-xl sm:text-2xl font-normal leading-8">
                  Founded by Lorenzo Andrew Campbell to provide property owners and overseas investors with a reliable, on-the-ground presence in Jamaica. We act as your eyes and ears, delivering professional verification so you can make decisions with confidence.
                </p>
              </div>
            </div>

            <a
              href="/about"
              className="px-3.5 py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm inline-flex items-center justify-center gap-2.5 text-stone-900 text-2xl font-medium leading-8 hover:opacity-90 transition-all"
            >
              About Us
            </a>

            <p className="font-['cursive'] text-4xl sm:text-5xl text-zinc-200/90 tracking-wide leading-snug">
              Lorenzo Andrew Campbell
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
