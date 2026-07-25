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

export function ServiceAreaMapSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-10">
        <div className="w-full max-w-[1754px] mx-auto relative rounded-sm overflow-hidden">
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
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 + idx * 0.08 }}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group cursor-default"
              style={{ left: pin.x, top: pin.y }}
            >
              <div className="relative flex items-center justify-center">
                <div className="size-11 overflow-hidden absolute">
                  <div className="w-9 h-11 left-[5.63px] top-[0.94px] absolute bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
                </div>
                <div className="size-10 absolute bg-black rounded-full border-[2.82px] border-amber-200 z-10" />
                <svg className="w-7 h-8 relative z-20" viewBox="0 0 29 32" fill="none">
                  <path d="M14.5 2C10 2 6.5 5.5 6.5 10c0 7 8 20 8 20s8-13 8-20c0-4.5-3.5-8-8-8z" fill="#D1A736" />
                  <circle cx="14.5" cy="10" r="4" fill="black" />
                </svg>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-[#000B03]/95 border border-amber-500/30 text-[10px] font-bold text-amber-400 px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                {pin.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
