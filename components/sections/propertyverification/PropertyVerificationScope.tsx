"use client";

import { motion } from "motion/react";

const items = [
  {
    title: "WHAT IS INCLUDED",
    iconBg: "bg-[#1A4B2C]",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
    bullets: [
      "Comprehensive visual condition documentation",
      "GPS coordinate-tagged media files",
      "Date & time stamped photography",
      "Real-time status reporting via Client Portal",
    ],
  },
  {
    title: "WHAT IS EXCLUDED",
    iconBg: "bg-[#4B1A1A]",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
    bullets: [
      "Structural engineering assessments",
      "Legally binding boundary/land surveys",
      "Financial valuations or formal appraisals",
      "Mold, asbestos, or hazardous material testing",
    ],
  },
  {
    title: "STANDARD DELIVERABLES",
    iconBg: "bg-[#4B3B1A]",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>,
    bullets: [
      "25 - 50 High-Resolution RAW Photographs",
      "1 Continuous, unedited walk-through video",
      "Standardized PDF Verification Audit",
      "Secure cloud link active for 12 months",
    ],
  },
  {
    title: "APPROVED TURNAROUND",
    iconBg: "bg-[#1A324B]",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
    content: <>Standard verification reports are delivered within <strong className="text-white font-medium">3 to 5 business days</strong> following confirmed physical access to the property. Emergency 24-hour turnaround is available at a premium tier.</>,
  },
  {
    title: "ACCESS REQUIREMENTS",
    iconBg: "bg-[#3B1A4B]",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>,
    content: <>Client is responsible for providing all necessary gate codes, security guard authorizations, key placements, or tenant notices a minimum of <strong className="text-white font-medium">48 hours prior</strong> to the scheduled site visit.</>,
  },
  {
    title: "FEES & LIMITATIONS",
    iconBg: "bg-[#4B2A1A]",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    content: (
      <>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
          <strong className="text-white font-medium">Travel:</strong> Base rates include travel within a <strong className="text-white font-medium">20km radius of regional parish hubs. Excess mileage is billed at standard equivalent rates.</strong>
        </p>
        <p className="text-neutral-400 text-sm leading-relaxed">
          <strong className="text-white font-medium">Limitations:</strong> Observations are visual only. Agents will not move furniture, access locked utility panels, or verify hidden structural elements.
        </p>
      </>
    ),
  },
];

export function PropertyVerificationScope() {
  return (
    <section className="py-24 bg-[#000B03]">
      <div className="max-w-[1755px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-20 xl:gap-[507px] mb-16"
        >
          <div className="w-full lg:w-[547px]">
            <h2 className="text-white text-4xl sm:text-5xl font-normal leading-tight sm:leading-[63px]">
              Service Scope & Delivery<br />Specifications
            </h2>
          </div>
          <div className="w-full lg:w-[794px] text-neutral-400 text-xl lg:text-2xl font-normal leading-relaxed lg:leading-8">
            Transparency is our priority. Below are the exact deliverables, requirements, and limitations for all Property Verification tracks.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 60, damping: 14, delay: idx * 0.12 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">{item.title}</h3>
              {item.bullets ? (
                <ul className="space-y-4 text-neutral-400 text-sm">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start"><span className="mr-3 text-white">&bull;</span> {b}</li>
                  ))}
                </ul>
              ) : (
                item.content
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
