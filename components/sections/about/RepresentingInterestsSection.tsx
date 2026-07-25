"use client";

import { motion } from "motion/react";

export function RepresentingInterestsSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="relative w-full min-h-[893px]">
        <motion.img
          className="w-full h-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
          alt=""
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 section-inner py-20 flex items-center justify-center min-h-[893px]">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[937px] flex flex-col items-center gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-center text-white text-5xl font-normal leading-[70px]"
            >
              REPRESENTING YOUR INTERESTS
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-center text-gray-200 text-3xl font-normal leading-10"
            >
              At Nexus, we are not just taking pictures. We are providing peace of mind. We help clients confirm what is happening on the ground. We document conditions. We verify progress. We communicate clearly. We protect the client from guesswork, confusion, and uncertainty. Whether it is a property, construction project, business location, material delivery, or other situation.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
