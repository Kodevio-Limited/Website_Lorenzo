"use client";

import React, { useSyncExternalStore } from "react";
import { motion } from "motion/react";

function useHasMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

const parishPins = [
  { name: "Hanover", x: "13%", y: "20%"},
  { name: "Westmoreland", x: "13%", y: "37%" },
  { name: "St. James", x: "24%", y: "21%" },
  { name: "St. Elizabeth", x: "29%", y: "61%" },
  { name: "Trelawny", x: "35%", y: "25%" },
  { name: "Manchester", x: "39%", y: "63%" },
  { name: "St. Ann", x: "50%", y: "30%" },
  { name: "Clarendon", x: "50%", y: "67%" },
  { name: "St. Mary", x: "69%", y: "35%" },
  { name: "St. Catherine", x: "62%", y: "63%" },
  { name: "St. Andrew", x: "72%", y: "58%" },
  { name: "Kingston", x: "74%", y: "70%" },
  { name: "Portland", x: "84%", y: "53%" },
  { name: "St. Thomas", x: "87%", y: "73%" },
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
  const hasMounted = useHasMounted();

  return (
    <section className="section-full bg-[#000B03]">
      <div className="section-inner py-12 lg:py-16">
        <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col justify-center gap-6 lg:gap-8">

        <div className="w-full flex flex-col lg:flex-row justify-between items-end gap-6 lg:gap-12">
          <motion.div
            initial={hasMounted ? { opacity: 0, y: 30, scale: 0.95 } : false}
            animate={hasMounted ? undefined : { opacity: 1, y: 0, scale: 1 }}
            whileInView={hasMounted ? { opacity: 1, y: 0, scale: 1 } : undefined}
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
            initial={hasMounted ? { opacity: 0, y: 20 } : false}
            animate={hasMounted ? undefined : { opacity: 1, y: 0 }}
            whileInView={hasMounted ? { opacity: 1, y: 0 } : undefined}
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
          initial={hasMounted ? { opacity: 0, scale: 0.9 } : false}
          animate={hasMounted ? undefined : { opacity: 1, scale: 1 }}
          whileInView={hasMounted ? { opacity: 1, scale: 1 } : undefined}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[800px] lg:max-w-[1074px] mx-auto"
          suppressHydrationWarning
        >
          <img
            src="/assets/images/map.png"
            alt="Map of Jamaica with 14 parishes"
            className="w-full h-auto object-contain"
            suppressHydrationWarning
          />

          {parishPins.map((pin, idx) => (
            <motion.div
              key={idx}
              initial={hasMounted ? { opacity: 0, scale: 0 } : false}
              animate={hasMounted ? undefined : { opacity: 1, scale: 1 }}
              whileInView={hasMounted ? { opacity: 1, scale: 1 } : undefined}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 + idx * 0.1 }}
              className="absolute z-10 -translate-x-1/2 -translate-y-full group cursor-default"
              style={{ left: pin.x, top: pin.y }}
            >
              <div className="relative flex flex-col items-center">
                <svg
                  className="w-7 h-9 lg:w-10 lg:h-12 drop-shadow-[0_4px_12px_rgba(209,167,54,0.45)] transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 32 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id={`pinGradHome-${idx}`} x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEF3C7" />
                      <stop offset="0.45" stopColor="#FB923C" />
                      <stop offset="1" stopColor="#A16207" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 2C9.373 2 4 7.373 4 14c0 8.5 12 24 12 24s12-15.5 12-24C28 7.373 22.627 2 16 2z"
                    fill={`url(#pinGradHome-${idx})`}
                    stroke="#1C1917"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <circle cx="16" cy="14" r="5.2" fill="#000B03" stroke="#FDE68A" strokeWidth="1.6" />
                  <circle cx="16" cy="14" r="2.2" fill="#FBBF24" />
                </svg>
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full mt-0.5 bg-[#000B03]/95 border border-amber-500/30 text-[10px] lg:text-xs font-bold text-amber-400 px-2 py-0.5 lg:py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 translate-y-0 group-hover:translate-y-1"
                >
                  {pin.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={hasMounted ? { opacity: 0, y: 30, scale: 0.97 } : false}
          animate={hasMounted ? undefined : { opacity: 1, y: 0, scale: 1 }}
          whileInView={hasMounted ? { opacity: 1, y: 0, scale: 1 } : undefined}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-wrap justify-center gap-6 lg:gap-12 xl:gap-24 pt-6 lg:pt-8 border-t border-zinc-900/40"
        >
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={hasMounted ? { opacity: 0, y: 30, scale: 0.9 } : false}
              animate={hasMounted ? undefined : { opacity: 1, y: 0, scale: 1 }}
              whileInView={hasMounted ? { opacity: 1, y: 0, scale: 1 } : undefined}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.6 + idx * 0.12 }}
              whileHover={hasMounted ? { y: -8, scale: 1.05 } : undefined}
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
