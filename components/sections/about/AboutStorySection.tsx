"use client";

import { motion } from "motion/react";

export function AboutStorySection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner pt-10 pb-0">
        <div className="max-w-[1760px] mx-auto flex flex-col justify-start items-start gap-9">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[856px] flex flex-col justify-start items-start gap-5"
          >
            <div className="text-amber-200 text-2xl font-normal leading-8">ABOUT US</div>
            <div className="text-white text-5xl font-normal leading-[63px]">Local Eyes. Trusted Hands.</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="self-stretch"
          >
            <span className="text-neutral-400 text-3xl font-medium leading-10">
              Nexus Property &amp; Business Services was created for property owners, investors, business owners, and families who have interests in Jamaica but cannot always be there in person. My name is{' '}
            </span>
            <span className="text-amber-200 text-3xl font-medium leading-10">Lorenzo Andrew Campbell</span>
            <span className="text-neutral-400 text-3xl font-medium leading-10">
              . I was born in Jamaica and built my career in the United States. For more than 40 years, I have worked in customer service, sales, project coordination, business development, and relationship management. Throughout my career, one lesson has always stayed with me: people do not just need information. They need confidence. When someone owns property, manages a construction project, ships materials, or handles business in Jamaica from overseas, they need someone they can trust to stand in their place, document the facts, and keep them informed. That is why I created Nexus. Nexus is built to provide independent property verification, construction monitoring, business support, and owner representation services throughout Jamaica. We give clients clear documentation, photos, videos, updates, and professional reports so they can make informed decisions with confidence.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
