"use client";

import React from "react";
import { motion } from "motion/react";

const parishPins = [
  { name: "Hanover", x: "14%", y: "15%"},
  { name: "Westmoreland", x: "13%", y: "33%" },
  { name: "St. James", x: "24%", y: "21%" },
  { name: "St. Elizabeth", x: "29%", y: "60%" },
  { name: "Trelawny", x: "35%", y: "25%" },
  { name: "Manchester", x: "40%", y: "57%" },
  { name: "St. Ann", x: "50%", y: "30%" },
  { name: "Clarendon", x: "50%", y: "56%" },
  { name: "St. Mary", x: "69%", y: "30%" },
  { name: "St. Catherine", x: "60%", y: "56%" },
  { name: "Kingston", x: "72%", y: "54%" },
  { name: "Portland", x: "85%", y: "48%" },
  { name: "St. Thomas", x: "87%", y: "69%" },
];

const features = [
  {
    title: "Independent",
    subtitle: "Verification",
    icon: (
      <div className="size-11 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
        <div className="absolute left-[3.67px] top-[3.67px] size-9 bg-white outline outline-2 outline-offset-[-1px] outline-white rounded-full" />
        <svg className="absolute left-[14.67px] top-[16.5px] w-4 h-2.5" viewBox="0 0 16 10" fill="none">
          <path d="M2 5l4 4 8-8" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
  },
  {
    title: "Secure",
    subtitle: "Client portal",
    icon: (
      <div className="size-11 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
        <svg className="absolute left-[7.33px] top-[1.83px] w-7 h-10" viewBox="0 0 28 40" fill="currentColor">
          <rect x="4" y="14" width="20" height="24" rx="3" stroke="black" strokeWidth="2" fill="none" />
          <path d="M8 14V10a6 6 0 0112 0v4" stroke="black" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M14 24l2 2 4-4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
  },
  {
    title: "GPS Tagged",
    subtitle: "Documentation",
    icon: (
      <div className="size-11 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
        <svg className="absolute left-[7.33px] top-[3.67px] w-7 h-9" viewBox="0 0 28 36" fill="none">
          <path d="M14 4c-5 0-9 4-9 9 0 6 9 19 9 19s9-13 9-19c0-5-4-9-9-9z" stroke="black" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="14" cy="13" r="4" stroke="black" strokeWidth="2.5" />
        </svg>
      </div>
    ),
  },
  {
    title: "Visual Observation",
    subtitle: "Photos & Video",
    icon: (
      <div className="size-11 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
        <svg className="absolute left-[3.67px] top-[5.5px] w-9 h-8" viewBox="0 0 36 32" fill="none">
          <rect x="2" y="4" width="32" height="24" rx="3" stroke="black" strokeWidth="2.5" />
          <circle cx="14" cy="16" r="5" stroke="black" strokeWidth="2.5" />
          <path d="M24 10l2-2" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
];

export function ServiceAreaSection() {
  return (
    <section className="section-full bg-[#000B03]">
      <div className="section-inner py-12 lg:py-16">
        <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col justify-center gap-6 lg:gap-8">

        <div className="w-full flex flex-col lg:flex-row justify-between items-end gap-6 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[500px] flex flex-col gap-4"
          >
            <span className="text-amber-200 text-xl lg:text-2xl font-normal leading-7 lg:leading-8">Serving Zone</span>
            <h2 className="text-white text-3xl lg:text-5xl font-normal leading-tight lg:leading-[63px]">
              SERVING ALL 14 PARISHES OF JAMAICA
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[550px] text-neutral-400 text-lg lg:text-2xl font-normal leading-7 lg:leading-8"
          >
            From Negril to Morant Point, we provide independent verification and representation services across the entire island of Jamaica. You can&apos;t be everywhere. We are.
          </motion.p>
        </div>

        <div className="flex items-start gap-2 text-zinc-100 text-lg lg:text-2xl font-normal leading-7 lg:leading-8">
          <div className="size-3 lg:size-4 shrink-0 mt-1.5 lg:mt-2 rounded-full bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
          <span>Service is subject to field-agent availability and service-specific travel requirements.</span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[800px] lg:max-w-[1074px] mx-auto"
        >
          <img
            src="/assets/images/map.png"
            alt="Map of Jamaica with 14 parishes"
            className="w-full h-auto object-contain"
          />

          {parishPins.map((pin, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 + idx * 0.1 }}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group cursor-default"
              style={{ left: pin.x, top: pin.y }}
            >
              <div className="relative flex items-center justify-center">
                <div className="size-8 lg:size-11 overflow-hidden absolute">
                  <div className="w-[26px] h-8 lg:w-9 lg:h-11 left-[4px] lg:left-[5.63px] top-[0.7px] lg:top-[0.94px] absolute bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
                </div>
                <div className="size-[28px] lg:size-10 absolute bg-black rounded-full border-[2px] lg:border-[2.82px] border-amber-200 z-10" />
                <svg className="w-5 h-6 lg:w-7 lg:h-8 relative z-20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#D1A736" />
                  <circle cx="12" cy="9" r="3" fill="black" />
                </svg>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-[#000B03]/95 border border-amber-500/30 text-[10px] font-bold text-amber-400 px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                {pin.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-wrap justify-center gap-6 lg:gap-12 xl:gap-24 pt-6 lg:pt-8 border-t border-zinc-900/40"
        >
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.6 + idx * 0.12 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="w-36 lg:w-48 flex flex-col items-center gap-3 lg:gap-5"
            >
              <div className="size-16 lg:size-24 flex items-center justify-center bg-gray-200/10 rounded-full outline outline-[1px] lg:outline-[1.39px] outline-offset-[-1px] lg:outline-offset-[-1.39px] outline-gray-200">
                <div className="scale-[0.6] lg:scale-100">{f.icon}</div>
              </div>
              <h3 className="text-white text-xl lg:text-4xl font-normal leading-7 lg:leading-[53.20px] text-center" style={{ fontFamily: "'Times New Roman', serif" }}>
                {f.title}
              </h3>
              <p className="text-zinc-400 text-base lg:text-2xl font-normal leading-6 lg:leading-9 text-center">
                {f.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
      </div>
    </section>
  );
}
