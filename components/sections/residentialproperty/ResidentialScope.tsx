"use client";

import { motion } from "motion/react";

const scopeItems = [
  {
    iconColor: 'bg-amber-400',
    title: 'Access Requirements',
    desc: 'Client must provide necessary gate codes, security guard authorizations, or tenant notices at least 48 hours prior to the scheduled site visit.',
  },
  {
    iconColor: 'bg-amber-400',
    title: 'Exact Deliverables',
    desc: '25-50 high-resolution RAW photographs, one continuous unedited walk-through video, and a standardized PDF visual verification audit.',
  },
  {
    iconColor: 'bg-orange-500',
    title: 'Approved Turnaround',
    desc: 'Standard verification reports are delivered within 3 to 5 business days following confirmed physical access to the property.',
  },
  {
    iconColor: 'bg-amber-500',
    title: 'Applicable Travel Fees',
    desc: 'Base rates include travel within a 20km radius of regional parish hubs. Excess mileage is billed at standard equivalent rates.',
  },
  {
    iconColor: 'bg-red-500',
    title: 'Exclusions',
    desc: 'Structural engineering assessments, legally binding boundary surveys, financial valuations, and hazardous material testing.',
  },
  {
    iconColor: 'bg-orange-600',
    title: 'Limitations',
    desc: 'Observations are strictly visual. Agents will not move furniture, access locked utility panels, or verify hidden structural elements.',
  },
];

export function ResidentialScope() {
  return (
    <section className="py-24 bg-[#000B03]">
      <div className="max-w-[1755px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-20"
        >
          <div className="w-full lg:w-[856px] flex flex-col gap-5">
            <h2 className="w-full lg:w-[742px] text-white text-3xl lg:text-5xl font-normal leading-10 lg:leading-[63px]">
              Service Scope &amp; Delivery Specifications
            </h2>
            <p className="w-full lg:w-[651px] text-neutral-400 text-xl lg:text-2xl font-normal leading-7 lg:leading-8">
              Detailed parameters of our residential verification engagement.
            </p>
          </div>
          <p className="w-full lg:w-[494px] lg:absolute lg:right-0 lg:top-0 text-neutral-400 text-xl lg:text-2xl font-normal leading-7 lg:leading-8 mt-6 lg:mt-0">
            Transparency is our priority. Below are the exact deliverables, requirements, and limitations for all Property Verification tracks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-11">
          {scopeItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 60, damping: 14, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-stone-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-900 p-6 lg:p-9 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="size-6 relative">
                  <div className={`size-4 left-[2.22px] top-[2.23px] absolute ${item.iconColor}`} />
                </div>
                <h3 className="text-gray-100 text-xl lg:text-2xl font-bold leading-7 lg:leading-8">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm lg:text-lg font-normal leading-6 lg:leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
