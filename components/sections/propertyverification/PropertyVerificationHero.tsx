"use client";

import { motion } from "motion/react";

export function PropertyVerificationHero() {
  return (
    <section className="bg-[#000B03]">
      <div className="max-w-[1755px] mx-auto px-6 lg:px-12 pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="flex items-center gap-3 mb-8 lg:mb-12">
          <div className="size-7 flex items-center justify-center">
            <div className="size-6 border-2 border-amber-200" />
          </div>
          <span className="text-neutral-400 text-xl lg:text-2xl font-normal">
            Home / <span className="text-white">Service</span> / <span className="text-white">Property Verification</span>
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-20 xl:gap-[507px] mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[547px]"
          >
            <div className="text-zinc-100 text-5xl lg:text-7xl font-medium leading-tight lg:leading-[105.71px]">
              Property
            </div>
            <div className="text-amber-200 text-5xl lg:text-7xl font-bold italic font-serif leading-tight lg:leading-[105.71px]">
              Verification
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[794px] text-neutral-400 text-xl lg:text-3xl font-normal leading-relaxed lg:leading-10"
          >
            Document property condition, status, and perimeter markers with on-site confirmation.
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden aspect-video md:aspect-[21/9]"
        >
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
            alt="Beautiful house representing property verification"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
