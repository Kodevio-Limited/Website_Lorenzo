"use client";

import React from "react";
import { motion } from "motion/react";

const parishes = [
  { name: "Kingston", county: "SURREY COUNTY" },
  { name: "St. Andrew", county: "SURREY COUNTY" },
  { name: "St. Thomas", county: "SURREY COUNTY" },
  { name: "Portland", county: "SURREY COUNTY" },
  { name: "St. Mary", county: "Middlesex County" },
  { name: "St. Ann", county: "Middlesex County" },
  { name: "St. Catherine", county: "Middlesex County" },
  { name: "Clarendon", county: "Middlesex County" },
  { name: "Manchester", county: "Middlesex County" },
  { name: "St. Elizabeth", county: "Cornwall County" },
  { name: "Westmoreland", county: "Cornwall County" },
  { name: "St. James", county: "Cornwall County" },
  { name: "Trelawny", county: "Cornwall County" },
  { name: "Hanover", county: "Cornwall County" },
];

function ParishCard({ name, county, i }: { name: string; county: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 60, damping: 14, delay: i * 0.06 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="w-full max-w-[320px] h-24 md:h-28 bg-stone-900 rounded-sm overflow-hidden relative"
    >
      <div className="absolute left-3 md:left-4 top-3 md:top-4 flex items-center gap-4 md:gap-8 w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)]">
        <div className="w-12 h-16 md:w-16 md:h-20 bg-stone-500 rounded-[3px] relative overflow-hidden shrink-0">
          <div className="size-5 md:size-7 left-[15px] md:left-[19px] top-[16px] md:top-[20px] absolute overflow-hidden">
            <div className="w-4 h-5 md:w-6 md:h-7 left-[3px] md:left-[3.75px] top-[1px] md:top-[1.25px] absolute bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
          </div>
        </div>
        <div className="min-w-0 flex flex-col items-start gap-2 md:gap-3">
          <div className="self-stretch text-white text-xl md:text-2xl md:text-3xl font-medium leading-7 md:leading-10 truncate">{name}</div>
          <div className="self-stretch text-neutral-400 text-sm md:text-base font-medium leading-5 md:leading-6 truncate">{county}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function ParishesListSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-[1755px] mx-auto flex flex-col items-center gap-12 md:gap-20 lg:gap-24">
          <div className="w-full max-w-[1378px] flex flex-col items-center gap-4 md:gap-5">
            <div className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-normal leading-tight md:leading-[63px]">All 14 Parishes Covered</div>
            <div className="w-full max-w-[992px] text-center text-neutral-400 text-base sm:text-lg md:text-2xl font-normal leading-7 md:leading-8">
              We operate comprehensively across all three counties of Jamaica, ensuring localized reporting wherever your property is located. Service is subject to field-agent availability and service-specific travel requirements.
            </div>
          </div>

          <div className="self-stretch flex flex-col items-center gap-8 md:gap-11">
            <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-8 md:gap-x-8 md:gap-y-8 items-stretch">
              {parishes.map((p, idx) => (
                <ParishCard key={p.name} name={p.name} county={p.county} i={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
