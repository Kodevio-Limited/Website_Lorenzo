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
  { name: "St. Andrew", x: "66%", y: "45%" },
  { name: "Kingston", x: "72%", y: "54%" },
  { name: "Portland", x: "85%", y: "48%" },
  { name: "St. Thomas", x: "87%", y: "69%" },
];

export function ServiceAreaMapSection() {
  const hasMounted = useHasMounted();

  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-10">
        <div className="w-full max-w-[1754px] mx-auto relative rounded-sm overflow-hidden" suppressHydrationWarning>
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
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 + idx * 0.08 }}
              className="absolute z-10 -translate-x-1/2 -translate-y-full group cursor-default"
              style={{ left: pin.x, top: pin.y }}
            >
              <div className="relative flex flex-col items-center">
                <svg
                  className="w-9 h-12 drop-shadow-[0_4px_12px_rgba(209,167,54,0.45)] transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 32 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id={`pinGradMap-${idx}`} x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEF3C7" />
                      <stop offset="0.45" stopColor="#FB923C" />
                      <stop offset="1" stopColor="#A16207" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 2C9.373 2 4 7.373 4 14c0 8.5 12 24 12 24s12-15.5 12-24C28 7.373 22.627 2 16 2z"
                    fill={`url(#pinGradMap-${idx})`}
                    stroke="#1C1917"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <circle cx="16" cy="14" r="5.2" fill="#000B03" stroke="#FDE68A" strokeWidth="1.6" />
                  <circle cx="16" cy="14" r="2.2" fill="#FBBF24" />
                </svg>
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full mt-0.5 bg-[#000B03]/95 border border-amber-500/30 text-xs font-bold text-amber-400 px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 translate-y-0 group-hover:translate-y-1"
                >
                  {pin.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
