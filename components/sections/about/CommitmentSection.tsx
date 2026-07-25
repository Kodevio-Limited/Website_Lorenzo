"use client";

import { motion } from "motion/react";

const notItems = [
  'Not the contractor.',
  'Not the supplier.',
  'Not the neighbor.',
  'Not the property manager.',
  'Not anyone else.',
];

export function CommitmentSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-10">
        <div className="w-full flex flex-col items-center gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[670px] flex flex-col items-center gap-5"
          >
            <div className="text-center text-white text-5xl font-normal leading-[63px]">Our Commitment to You</div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="text-neutral-400 text-2xl font-normal leading-8">
                When you hire Nexus, our loyalty belongs to one person:
              </span>
              <span className="text-amber-200 text-3xl font-medium leading-10">YOU</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center items-start gap-20"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-96 inline-flex flex-col justify-start items-start gap-6"
            >
              {notItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="self-stretch inline-flex justify-start items-center gap-5"
                >
                  <div className="size-12 relative overflow-hidden shrink-0">
                    <div className="size-10 left-[4.11px] top-[4.11px] absolute bg-red-500" />
                  </div>
                  <div className="text-white text-3xl font-normal leading-10">{item}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="w-[516px] h-96 relative bg-stone-900 rounded-2xl overflow-hidden shrink-0"
            >
              <div className="w-[464px] left-[26px] top-[51px] absolute inline-flex flex-col justify-start items-center gap-7">
                <div className="size-11 relative overflow-hidden">
                  <div className="w-4 h-6 left-[5.38px] top-[14.33px] absolute bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
                  <div className="w-4 h-6 left-[21.50px] top-[14.33px] absolute opacity-50 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
                  <div className="size-4 left-[5.38px] top-[3.58px] absolute opacity-50 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
                  <div className="size-4 left-[21.50px] top-[3.58px] absolute bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
                </div>
                <div className="self-stretch text-left text-neutral-400 text-2xl font-normal leading-9">
                  Our responsibility is to provide independent verification, clear communication, and professional documentation so you can make decisions with confidence.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
