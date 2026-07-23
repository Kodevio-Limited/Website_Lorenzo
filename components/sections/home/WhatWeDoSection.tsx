"use client";

import React from "react";
import { motion } from "motion/react";

const steps = [
  { number: "01", title: "Notice", text: "We receive and review your request, ensuring all required details are captured accurately to begin the process.", direction: "down" },
  { number: "02", title: "Evaluate", text: "Our team assesses the request and prepares for on-site verification, aligning the right approach for your needs.", direction: "up" },
  { number: "03", title: "Examine", text: "We visit the location and carry out a detailed inspection, documenting everything with photos, videos, and observations.", direction: "down" },
  { number: "04", title: "Update", text: "All findings are compiled into a clear, structured report with verified data and supporting media.", direction: "up" },
  { number: "05", title: "Support", text: "We deliver the report and remain available to assist you with any follow-up actions or clarifications.", direction: "down" },
];

export function WhatWeDoSection() {
  return (
    <section className="section-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full min-h-[calc(100vh-10rem)] flex flex-col justify-center gap-10 lg:gap-16">

        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-16">
          <div className="w-full lg:w-[856px] flex flex-col gap-5">
            <span className="text-amber-200 text-2xl font-normal leading-8">What we do</span>
            <h2 className="text-white text-4xl sm:text-5xl font-normal leading-tight sm:leading-[63px]">
              VERIFIED. DOCUMENTED. PROTECTING YOUR INVESTMENT.
            </h2>
          </div>
          <p className="w-full lg:w-[555px] text-neutral-400 text-xl sm:text-2xl font-normal leading-8">
            We deliver property inspections, detailed reports, and verified documentation to help you make confident investment decisions.
          </p>
        </div>

      <div className="hidden lg:block w-full">
        <div className="grid grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              {step.direction === "up" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: parseInt(step.number) * 0.1 }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <h3 className="text-white text-xl xl:text-3xl font-medium leading-snug xl:leading-10">
                    {step.number} | {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm xl:text-xl leading-relaxed xl:leading-8">
                    {step.text}
                  </p>
                </motion.div>
              ) : (
                <div className="flex-1" />
              )}

              {step.direction === "up" && (
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-white/20" />
              )}
            </div>
          ))}
        </div>

        <div className="relative flex items-center py-6">
          <div className="absolute left-0 right-0 h-px bg-white/20" />
          <div className="relative w-full grid grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex justify-center">
                <div className="size-8 rounded-full bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 shadow-lg shadow-amber-500/30 relative z-10" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              {step.direction === "down" && (
                <div className="w-px h-10 bg-gradient-to-b from-white/20 via-white/30 to-transparent" />
              )}

              {step.direction === "down" ? (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: parseInt(step.number) * 0.1 }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <h3 className="text-white text-xl xl:text-3xl font-medium leading-snug xl:leading-10">
                    {step.number} | {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm xl:text-xl leading-relaxed xl:leading-8">
                    {step.text}
                  </p>
                </motion.div>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden w-full">
        <div className="relative border-l border-white/10 ml-4 pl-8 space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[45px] top-1 z-10 size-8 rounded-full bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 shadow-lg" />
              <h3 className="text-white text-2xl font-medium leading-10">
                {step.number} | {step.title}
              </h3>
              <p className="text-neutral-400 text-base font-normal leading-8 mt-2">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      </div>
      </div>

    </section>
  );
}
