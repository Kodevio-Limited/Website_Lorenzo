"use client";

import React from "react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "CONSULTATION",
    description: "We discuss your needs, property, and goals."
  },
  {
    number: "02",
    title: "PLAN & SCOPE",
    description: "We recommend the right services for your situation."
  },
  {
    number: "03",
    title: "ON-SITE VERIFICATION",
    description: "We visit, verify, document and communicate."
  }
];

export function HowItWorksSection() {
  return (
    <section
      id="our-process"
      className="relative w-full min-h-screen overflow-hidden border-y border-zinc-900 bg-[#000B03]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/process-bg.jpg"
          alt=""
          className="h-full w-full object-cover object-center select-none scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 w-full min-h-screen px-6 md:px-12 lg:px-16 flex items-center py-16 lg:py-20">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">

          <div className="w-full lg:w-[580px] flex flex-col gap-5">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-amber-200 text-2xl font-normal leading-8"
            >
              OUR PROCESS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[580px] text-white text-4xl sm:text-5xl font-normal leading-tight sm:leading-[63px]"
            >
              SIMPLE. TRANSPARENT. EFFECTIVE.<br />FROM START TO FINISH
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[580px] text-neutral-400 text-xl sm:text-2xl font-normal leading-8"
            >
              Our streamlined process keeps every step clear and accountable&mdash;from booking to final report&mdash;so you can move forward with confidence.
            </motion.p>
          </div>

          <div className="w-full lg:w-[480px] flex flex-col gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.15 + idx * 0.2 }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
                className="relative rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-amber-500/20 backdrop-blur-md px-6 py-5 transition-all duration-300 shadow-xl group"
              >
                <div className="flex items-start gap-5">
                  <span className="text-amber-200 text-3xl sm:text-4xl font-medium leading-[48px] shrink-0">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-white text-xl sm:text-2xl font-medium leading-7 sm:leading-8 group-hover:text-amber-500/90 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-lg font-normal leading-6 sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
