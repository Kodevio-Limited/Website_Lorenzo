"use client";

import { motion } from "motion/react";

const items = [
  {
    title: "INDEPENDENT",
    desc: "We work for you, not the contractor, caretaker, tenant, or vendor.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-white shrink-0">
        <ellipse cx="14" cy="14" rx="12" ry="14" stroke="currentColor" strokeWidth="1" />
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "VERIFIED",
    desc: "Every visit is supported with photos, video, notes, timestamps & GPS.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-white shrink-0">
        <rect x="2" y="2" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1" />
        <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "TRUSTED",
    desc: "Professional, consistent and accountable service you can rely on.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-white shrink-0">
        <path d="M14 3L4 8v6c0 6 4 12 10 14 6-2 10-8 10-14V8l-10-5z" stroke="currentColor" strokeWidth="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "DOCUMENTED",
    desc: "If it wasn't documented, it didn't happen.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-white shrink-0">
        <rect x="5" y="2" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1" />
        <path d="M10 10h8M10 15h8M10 20h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "LOCAL KNOWLEDGE",
    desc: "We understand Jamaica, the people, the pace, and the risks.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-white shrink-0">
        <path d="M14 3c-4.5 0-8 3.5-8 8 0 6 8 14 8 14s8-8 8-14c0-4.5-3.5-8-8-8z" stroke="currentColor" strokeWidth="1" />
        <circle cx="14" cy="11" r="3" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
];

export function WhyNexusSection() {
  return (
    <section className="section-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[856px] flex flex-col items-start"
          >
            <div className="flex flex-col gap-5">
              <span className="text-amber-200 text-2xl font-normal leading-8" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Why Nexus</span>
              <h2 className="text-white text-5xl font-normal leading-[63px]" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
                THE TRUE VALUE<br />OF KNOWING.
              </h2>
            </div>
            <p className="mt-5 w-full max-w-[882px] text-neutral-400 text-2xl font-normal leading-8" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
              Without verification, small problems become expensive disasters. We provide the eyes, the ears, and the documentation you need to make confident decisions.
            </p>
            <div className="mt-8 lg:mt-10 w-full">
              <img
                src="/assets/images/why-nexus.jpg"
                alt="Professional verification in action"
                className="w-full object-cover rounded-sm"
                style={{ aspectRatio: '904/603' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[756px] flex flex-col gap-20 lg:pt-48"
          >
            {items.map((item, i) => (
              <div key={i} className="flex flex-col items-start gap-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="size-7 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-white text-3xl font-medium leading-10" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>{item.title}</span>
                </div>
                <span className="text-zinc-400 text-2xl font-normal leading-8" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>{item.desc}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
