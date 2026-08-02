"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "Property Details",
    desc: "Accurate plot specs, land boundaries, historical records, and zoning allowances.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-200">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "High-Quality Photos",
    desc: "High-resolution wide-angle and detail photographs of the property, cataloged page-by-page.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-200">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: "Video Walkthroughs",
    desc: "Secure QR links embedded directly in paper reports linking to interactive video walkthroughs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-200">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    title: "Condition & Analysis",
    desc: "Comprehensive visual evaluation of masonry, foundations, and utility lines.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-200">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Recommendations",
    desc: "Clear, actionable visual observations and recommended next steps.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-200">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export function WhatIsIncludedSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full max-w-[1762px] mx-auto flex flex-col items-center gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[670px] flex flex-col items-center gap-5"
          >
            <div className="text-center">
              <span className="text-white text-5xl font-normal leading-[63px]">What&apos;s Included in Our </span>
              <span className="text-amber-200 text-5xl font-normal italic leading-[63px]">Reports</span>
            </div>
            <div className="text-center text-neutral-400 text-2xl font-normal leading-8">
              Every verification report we deliver is standardized and organized for straightforward viewing.
            </div>
          </motion.div>

          <div className="self-stretch flex justify-center items-center gap-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 70, damping: 10, delay: i * 0.15 }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="w-80 h-96 relative bg-stone-900 rounded-sm overflow-hidden outline outline-2 outline-offset-[-2px] outline-amber-500/0 hover:outline-amber-500/40 transition-all duration-500"
              >
                <div className="w-72 left-[24px] top-[162px] absolute flex flex-col justify-start items-start gap-7">
                  <div className="text-white text-3xl font-medium leading-10">{f.title}</div>
                  <div className="text-zinc-400 text-lg font-normal leading-7">{f.desc}</div>
                </div>
                <div className="size-16 left-[24px] top-[41px] absolute rounded-full border-2 border-amber-200 flex items-center justify-center">
                  {f.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
