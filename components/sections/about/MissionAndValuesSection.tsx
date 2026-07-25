"use client";

import { motion } from "motion/react";

const valuesCol1 = [
  { title: 'Integrity', desc: 'We do what is right' },
  { title: 'Discretion', desc: 'Your privacy is respected.' },
  { title: 'Commitment', desc: 'Your satisfaction matters.' },
];

const valuesCol2 = [
  { title: 'Reliability', desc: 'You can count on us.' },
  { title: 'Accountability', desc: 'We document the facts.' },
];

function CheckIcon() {
  return (
    <div className="size-12 relative overflow-hidden shrink-0">
      <div className="size-10 left-[4.17px] top-[4.17px] absolute bg-white outline outline-2 outline-offset-[-1px] outline-white rounded-full" />
      <div className="w-5 h-3 left-[16.67px] top-[18.75px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
      <div className="size-12 left-0 top-0 absolute bg-green-500 rounded-full" />
    </div>
  );
}

export function MissionAndValuesSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-10">
        <div className="max-w-[1762px] mx-auto flex justify-between items-start gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-[855px] flex flex-col justify-start items-start gap-11"
          >
            <div className="w-72 flex flex-col justify-start items-start gap-6">
              <div className="text-white text-4xl font-medium leading-[56px]">OUR MISSION</div>
              <div className="w-32 outline outline-[6px] outline-offset-[-3px] outline-amber-200" />
            </div>
            <div className="text-zinc-400 text-3xl font-normal leading-10">
              Our mission is to reduce uncertainty for people who have property, business, construction, or personal interests in Jamaica. We provide trusted local representation, professional documentation, and dependable communication.
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-[799px] flex flex-col justify-start items-start gap-12"
          >
            <div className="w-72 flex flex-col justify-start items-start gap-6">
              <div className="text-white text-4xl font-medium leading-[56px]">OUR VALUES</div>
              <div className="w-32 outline outline-[6px] outline-offset-[-3px] outline-amber-200" />
            </div>
            <div className="self-stretch flex justify-start items-start gap-10">
              <div className="w-96 flex flex-col gap-10">
                {valuesCol1.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-10"
                  >
                    <div className="flex items-center gap-10">
                      <CheckIcon />
                      <span className="text-white text-3xl font-normal leading-10">{v.title}</span>
                    </div>
                    <div className="text-zinc-400 text-2xl font-light leading-9">{v.desc}</div>
                  </motion.div>
                ))}
              </div>
              <div className="w-96 flex flex-col gap-10">
                {valuesCol2.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-10"
                  >
                    <div className="flex items-center gap-10">
                      <CheckIcon />
                      <span className="text-white text-3xl font-normal leading-10">{v.title}</span>
                    </div>
                    <div className="text-zinc-400 text-2xl font-light leading-9">{v.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
