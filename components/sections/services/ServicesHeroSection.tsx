"use client";

import { motion } from "motion/react";

export function ServicesHeroSection() {
  return (
    <section className="bg-[#000B03]">
      <div className="max-w-[1755px] mx-auto px-6 lg:px-12 pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-20 xl:gap-[507px]">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[547px]"
          >
            <div className="text-zinc-100 text-5xl lg:text-7xl font-medium leading-tight lg:leading-[105.71px]">
              What We Verify
            </div>
            <div className="text-amber-200 text-5xl lg:text-7xl font-bold italic font-serif leading-tight lg:leading-[105.71px]">
              &amp; Represent
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[794px] text-neutral-400 text-xl lg:text-3xl font-normal leading-relaxed lg:leading-10"
          >
            Professional on-ground verification services across Jamaica—built exclusively for property owners, investors, and families abroad.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
