"use client";

import { motion } from "motion/react";

interface Section {
  title: string;
  content: string;
}

interface LegalContentProps {
  sections: Section[];
}

export function LegalContentSection({ sections }: LegalContentProps) {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full max-w-[1755px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Table of Contents Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-96 shrink-0"
          >
            <div className="w-full h-[582px] bg-stone-900 rounded-sm overflow-hidden">
              <div className="text-neutral-400 text-3xl font-medium leading-10 pt-[26px] px-6">
                Table of Contents
              </div>
              <div className="text-zinc-400 text-2xl font-normal leading-[51.52px] pt-[37px] px-6">
                {sections.map((s, i) => (
                  <a
                    key={i}
                    href={`#section-${i + 1}`}
                    className="block hover:text-amber-200 transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col items-start gap-16"
          >
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                id={`section-${i + 1}`}
                className="w-full flex flex-col items-start gap-8 scroll-mt-24"
              >
                <div className="text-white text-4xl font-medium leading-[56px]">{s.title}</div>
                <div className="w-full text-zinc-400 text-2xl font-normal leading-9 whitespace-pre-line">
                  {s.content}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
