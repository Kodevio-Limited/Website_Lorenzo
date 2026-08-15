"use client";

import { motion } from "motion/react";
import Link from 'next/link';
import { useServicePlans } from '@/hooks/use-service-plans';

const DEFAULT_PLANS = [
  {
    id: 1,
    name: 'Exterior Care Verification Plan',
    price: '$399',
    currency: 'USD',
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
    id: 2,
    name: 'Property Care Plan',
    price: '$699',
    currency: 'USD',
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
    id: 3,
    name: 'Property Steward Plan',
    price: '$999',
    currency: 'USD',
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

function CheckIcon({ gradient }: { gradient?: boolean }) {
  return (
    <div className="size-9 relative shrink-0">
      <div className="size-8 rounded-full absolute left-0.5 top-0.5 flex items-center justify-center
        bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700">
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path d="M2 5l3.5 3.5L12 2" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export function PricingPreviewSection() {
  const { data: apiPlans } = useServicePlans();

  const plans = apiPlans && apiPlans.length > 0
    ? [...apiPlans]
        .filter((plan) => !plan.status || plan.status === 'ACTIVE')
        .sort((a, b) => a.price - b.price)
        .slice(0, 3)
        .map((plan, idx) => ({
          id: plan.id,
          name: plan.name,
          price: `$${plan.price}`,
          currency: plan.currency || 'USD',
          period: `/${plan.billingType === 'MONTHLY' ? 'MONTH' : plan.billingType}`,
          features: Array.isArray(plan.features) ? plan.features : [],
          highlight: idx === 1,
        }))
    : DEFAULT_PLANS;
  return (
    <section className="section-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center gap-8 lg:gap-10">

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-amber-200 text-2xl font-normal leading-8"
          >
            PRICING
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-4xl sm:text-5xl font-normal leading-tight sm:leading-[63px] text-center"
          >
            Flexible Plans for Every Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[763px] text-neutral-400 text-xl sm:text-2xl font-normal leading-8 text-center"
          >
            Whether you&apos;re a single home buyer or a corporate investor, we have a plan suited for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/pricing"
              className="px-3.5 py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm inline-flex items-center justify-center gap-2.5 text-stone-900 text-2xl font-medium leading-8 hover:opacity-90 transition-all"
            >
              See More
            </Link>
          </motion.div>

          <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 60, damping: 14, delay: idx * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`w-full lg:w-[460px] flex flex-col rounded-[34.66px] overflow-hidden ${
                plan.highlight
                  ? 'bg-gradient-to-b from-yellow-600 via-yellow-600 to-yellow-700'
                  : 'bg-zinc-300/20'
              } ${idx !== 1 ? 'lg:mt-16' : ''}`}
            >
              <div className="flex-1 p-6 lg:p-8 flex flex-col gap-4 lg:gap-6">
                <div className="flex flex-col gap-3 lg:gap-4">
                  <h3 className="text-neutral-50 text-xl lg:text-2xl font-medium leading-7 lg:leading-8">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-neutral-50 text-3xl lg:text-4xl font-semibold leading-tight lg:leading-[56px]">
                      {plan.price}
                    </span>
                    <span className="text-neutral-50 text-lg lg:text-xl font-normal leading-7 lg:leading-8">USD</span>
                    <span className="text-zinc-400 text-lg lg:text-xl font-normal leading-7 lg:leading-8">/MONTH</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:gap-4">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckIcon gradient={!plan.highlight} />
                      <span className="text-white text-base lg:text-lg font-normal leading-6 lg:leading-7">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-20 lg:h-24 relative flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[90%] lg:w-[400px] h-14 lg:h-16 bg-gray-200/10 rounded-2xl outline outline-[1.24px] outline-gray-200 flex items-center justify-center hover:bg-gray-200/20 transition-all cursor-pointer"
                >
                  <span className="text-neutral-50 text-lg lg:text-xl font-medium leading-7 lg:leading-8">Get Access</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
