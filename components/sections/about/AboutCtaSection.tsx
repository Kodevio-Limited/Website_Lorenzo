"use client";

import { motion } from "motion/react";
import Link from 'next/link';

export function AboutCtaSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="relative w-full min-h-[856px] overflow-hidden">
        <div className="w-full h-[700px] absolute left-0 top-[91px]">
          <motion.img
            className="w-full h-full object-cover absolute inset-0"
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1921&q=60"
            alt=""
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-[843px] left-[82px] top-[135px] flex flex-col items-start gap-9"
          >
            <div className="flex flex-col">
              <span className="text-zinc-100 text-7xl font-medium leading-[99.02px]">You Can&apos;t Be Everywhere.</span>
              <span className="text-amber-200 text-7xl font-bold italic leading-[110.82px]">We Are</span>
            </div>
            <div className="w-[802px] text-zinc-400 text-3xl font-normal leading-10">
              At Nexus Property &amp; Business Services, we represent your interests as if they were our own.
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6"
            >
              <Link
                href="/contact"
                className="px-3.5 py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm flex items-center justify-center gap-2.5 text-stone-900 text-2xl font-medium leading-8 hover:opacity-90 transition-all"
              >
                REQUEST SERVICE
              </Link>
              <Link
                href="/contact"
                className="px-3.5 py-5 bg-zinc-100/30 rounded-sm outline outline-1 outline-offset-[-1px] outline-neutral-400 flex items-center justify-center gap-2.5 text-white text-2xl font-medium leading-8 hover:bg-zinc-100/40 transition-all"
              >
                CONTACT US
              </Link>
              <Link
                href="/sample-reports"
                className="px-3.5 py-5 bg-zinc-100/30 rounded-sm outline outline-1 outline-offset-[-1px] outline-neutral-400 flex items-center justify-center gap-2.5 text-white text-2xl font-medium leading-8 hover:bg-zinc-100/40 transition-all"
              >
                SAMPLE REPORT
              </Link>
              <Link
                href="/dashboard"
                className="px-3.5 py-5 bg-zinc-100/30 rounded-sm outline outline-1 outline-offset-[-1px] outline-neutral-400 flex items-center justify-center gap-2.5 text-white text-2xl font-medium leading-8 hover:bg-zinc-100/40 transition-all"
              >
                CLIENT PORTAL
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full h-48 absolute left-[0.26px] bottom-0 bg-gradient-to-b from-black/0 to-black" />
        <div className="w-full h-44 absolute left-[0.26px] top-0 bg-gradient-to-b from-black to-black/5" />
      </div>
    </section>
  );
}
