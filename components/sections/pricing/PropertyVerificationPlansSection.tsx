"use client";

import { motion } from "motion/react";
import Link from 'next/link';

const plans = [
  {
    name: 'Exterior Care Verification Plan',
    price: '$399',
    period: '/MONTH',
    features: [
      'Exterior-only property verification',
      'One scheduled visit per month',
      '25 photographs',
      '3-minute exterior video',
      'GPS verification',
      'Condition summary report',
    ],
    highlight: false,
  },
  {
    name: 'Property Care Plan',
    price: '$699',
    period: '/MONTH',
    features: [
      'Interior and exterior property verification',
      'One scheduled visit per month',
      '40 photographs',
      '5-minute video',
      'Room-by-room observations',
      'Detailed report',
    ],
    highlight: true,
  },
  {
    name: 'Property Steward Plan',
    price: '$999',
    period: '/MONTH',
    features: [
      'Premium protection plan',
      'Two visits per month',
      '60 photographs',
      'Owner support',
      'Priority scheduling',
      'Detailed reporting after each visit',
    ],
    highlight: false,
  },
];

function CheckIcon() {
  return (
    <div className="size-9 inline-flex flex-col justify-start items-start overflow-hidden shrink-0">
      <div className="self-stretch h-9 relative overflow-hidden">
        <div className="size-8 left-[1.28px] top-[1.28px] absolute bg-white outline outline-[2.57px] outline-offset-[-1.28px] outline-white rounded-full" />
        <div className="w-3.5 h-2.5 left-[10.91px] top-[12.52px] absolute outline outline-[2.57px] outline-offset-[-1.28px] outline-black" />
        <div className="size-10 left-[-1.93px] top-[-1.93px] absolute bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-full" />
      </div>
    </div>
  );
}

function WhiteCheckIcon() {
  return (
    <div className="size-9 inline-flex flex-col justify-start items-start overflow-hidden shrink-0">
      <div className="self-stretch h-9 relative overflow-hidden">
        <div className="size-8 left-[1.28px] top-[1.28px] absolute bg-white outline outline-[2.57px] outline-offset-[-1.28px] outline-white rounded-full" />
        <div className="w-3.5 h-2.5 left-[10.91px] top-[12.52px] absolute outline outline-[2.57px] outline-offset-[-1.28px] outline-black" />
        <div className="size-10 left-[-1.93px] top-[-1.93px] absolute bg-neutral-50 rounded-full" />
      </div>
    </div>
  );
}

export function PropertyVerificationPlansSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-10">
        <div className="flex flex-col items-center gap-16 w-full">
          <div className="flex flex-col items-center gap-4 md:gap-5">
            <div className="text-center text-amber-200 text-base sm:text-lg md:text-xl font-medium uppercase leading-6 md:leading-7 tracking-widest">
              MONTHLY PLANS
            </div>
            <div className="flex flex-col items-center">
              <div className="text-center text-white text-3xl sm:text-4xl md:text-5xl sm:text-6xl font-medium leading-tight md:leading-[65.36px]">
                Property Verification Plans
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-6 mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 60, damping: 14, delay: idx * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`w-full lg:w-[567px] max-w-[567px] mx-auto flex flex-col ${
                  idx !== 1 ? 'lg:pt-0 xl:pt-36' : ''
                }`}
              >
                <div
                  className={`w-full flex flex-col rounded-[34.66px] ${
                    plan.highlight
                      ? 'bg-gradient-to-b from-yellow-600 via-yellow-600 to-yellow-700'
                      : 'bg-zinc-300/20'
                  }`}
                >
                  <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-8 md:gap-10 lg:gap-14">
                    <div className="self-stretch flex flex-col justify-start items-start gap-5 md:gap-7">
                      <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="text-neutral-50 text-xl sm:text-2xl md:text-3xl font-medium leading-8 md:leading-10">
                          {plan.name}
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="text-neutral-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-[83.19px]">
                          {plan.price}{' '}
                          <span className="text-neutral-50 text-lg sm:text-xl md:text-2xl md:text-3xl font-normal leading-7 md:leading-10">USD </span>
                          <span className="text-zinc-400 text-lg sm:text-xl md:text-2xl md:text-3xl font-normal leading-7 md:leading-10">{plan.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6 lg:gap-7">
                      {plan.features.map((f) => (
                        <div key={f} className="self-stretch inline-flex justify-start items-center gap-3 md:gap-4">
                          {plan.highlight ? <WhiteCheckIcon /> : <CheckIcon />}
                          <div className="text-white text-base sm:text-lg md:text-xl font-normal leading-6 md:leading-7">{f}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="self-stretch h-28 md:h-32 lg:h-36 relative flex items-start justify-center p-4 md:p-6">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full max-w-[468px] h-14 md:h-16 lg:h-20 rounded-2xl outline outline-[1.24px] outline-offset-[-1.24px] outline-gray-200 flex items-center justify-center cursor-pointer ${
                        plan.highlight ? 'bg-gray-200/30' : 'bg-gray-200/10'
                      }`}
                    >
                      <span className="text-neutral-50 text-base sm:text-lg md:text-xl md:text-2xl font-medium leading-7 md:leading-8">Request Service</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
