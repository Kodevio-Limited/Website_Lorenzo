"use client";

import { motion } from "motion/react";
import Link from 'next/link';

export function ResidentialHero() {
  return (
    <section className="bg-[#000B03]">
      <div className="max-w-[1755px] mx-auto px-6 lg:px-12 pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="flex items-center gap-3 mb-8 lg:mb-12">
          <div className="size-7 flex items-center justify-center">
            <div className="size-6 border-2 border-amber-200" />
          </div>
          <span className="text-neutral-400 text-xl lg:text-2xl font-normal">
            Property Verification Services / <span className="text-white">Residential Property verification</span>
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-20 xl:gap-[507px] mb-10">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[781px]"
          >
            <div className="text-zinc-100 text-5xl lg:text-7xl font-medium leading-tight lg:leading-[105.71px]">
              Residential Property
            </div>
            <div className="text-amber-200 text-5xl lg:text-7xl font-bold italic font-serif leading-tight lg:leading-[105.71px]">
              Verification
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4 mt-8"
            >
              <Link
                href="/contact"
                className="px-3.5 py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm inline-flex items-center justify-center gap-2.5 text-stone-900 text-xl lg:text-2xl font-medium leading-8 hover:opacity-90 transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="https://clientdashbaordlorenzo.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-5 bg-zinc-100/30 rounded-sm outline outline-1 outline-offset-[-1px] outline-neutral-400 inline-flex items-center justify-center gap-2.5 text-white text-xl lg:text-2xl font-medium leading-8 hover:bg-zinc-100/40 transition-all"
              >
                Client Portal
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[821px] text-neutral-400 text-xl lg:text-3xl font-normal leading-relaxed lg:leading-10"
          >
            Detailed visual verifications, high-resolution photos &amp; video reports, and documentation you can trust to confirm exact property conditions without leaving your home.
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
            alt="Residential Property Verification"
            className="w-full h-full object-cover"
            style={{ aspectRatio: '1755/952' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
