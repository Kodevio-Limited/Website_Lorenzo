'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    number: '01',
    question: 'How confidential is my case?',
    answer: 'Your case is handled with strict confidentiality. No information is shared, and all data is protected throughout the entire process.',
  },
  {
    number: '02',
    question: 'What type of investigations do you handle?',
    answer: 'We handle property verifications, construction monitoring, and business facility observations tailored to your specific needs.',
  },
  {
    number: '03',
    question: 'How long does an investigation usually take?',
    answer: 'Most standard verifications are completed within 48 to 72 hours, though complex projects may require extended timelines depending on scope.',
  },
  {
    number: '04',
    question: 'Will I receive evidence reports?',
    answer: 'Yes, all our services include comprehensive written reports backed by high-quality photographic and video evidence where applicable.',
  },
];

export function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full max-w-[1757px] mx-auto flex flex-col items-center gap-24">
          <div className="self-stretch flex flex-col items-start gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.number}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="self-stretch bg-stone-900 rounded-2xl overflow-hidden"
                >
                  <motion.button
                    onClick={() => toggle(index)}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.995 }}
                    className="w-full h-28 flex items-center justify-between px-[96px] text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-center text-white text-3xl font-normal leading-10">{faq.number}</span>
                      <span className="text-center text-white text-3xl font-normal leading-10">{faq.question}</span>
                    </div>
                    <div className="size-10 relative shrink-0 flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-white absolute transition-transform duration-300" />
                      <div
                        className={`w-0.5 h-8 bg-white absolute transition-transform duration-300 ${
                          isOpen ? 'rotate-90 opacity-0' : 'rotate-0'
                        }`}
                      />
                    </div>
                  </motion.button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-[108px] pb-10">
                          <div className="text-gray-200 text-3xl font-normal leading-10">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
