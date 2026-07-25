'use client';

import { useState } from 'react';
import { motion } from "motion/react";
import Link from 'next/link';

export function ContactPageSection() {
  const [inquiryType, setInquiryType] = useState('general');

  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full max-w-[1755px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[968px] bg-stone-900 rounded-sm overflow-hidden"
          >
            <div className="p-8 lg:p-[53px]">
              <div className="flex flex-col items-start gap-5 mb-10">
                <div className="text-white text-3xl font-medium leading-10">Send a Message</div>
                <div className="text-zinc-400 text-xl font-normal leading-7">
                  Fill out the form below and our regional specialists will get back to you within 24 hours.
                </div>
              </div>

              <div className="flex flex-col items-start gap-10">
                {/* Purpose of Inquiry */}
                <div className="w-full flex flex-col items-start gap-4">
                  <label className="text-neutral-50 text-xl font-medium leading-7">Purpose of Inquiry *</label>
                  <div className="w-full px-6 py-3.5 bg-black rounded-sm flex flex-wrap items-center gap-6 lg:gap-28">
                    {[
                      { value: 'general', label: 'General Inquiry' },
                      { value: 'consultation', label: 'Schedule Consultation' },
                      { value: 'quote', label: 'Request a Quote' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setInquiryType(opt.value)}
                        className="flex items-center gap-2"
                      >
                        <div className="size-6 relative">
                          <div
                            className={`size-5 left-[2px] top-[2px] absolute rounded-full ${
                              inquiryType === opt.value ? 'bg-green-500' : 'bg-white'
                            }`}
                          />
                        </div>
                        <span className="text-white text-lg font-medium leading-7">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="w-full flex flex-col lg:flex-row items-start gap-14">
                  <div className="w-full lg:w-96 flex flex-col items-start gap-4">
                    <label className="text-neutral-50 text-xl font-medium leading-7">Name</label>
                    <div className="w-full pl-7 pr-4 py-5 bg-neutral-600 rounded-sm flex items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" className="shrink-0">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-transparent text-white text-base font-medium leading-6 placeholder-neutral-400 outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-96 flex flex-col items-start gap-4">
                    <label className="text-neutral-50 text-xl font-medium leading-7">Phone Number (Optional)</label>
                    <div className="w-full h-16 pl-7 pr-4 py-6 bg-neutral-600 rounded-sm flex items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" className="shrink-0">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.39 2 2 0 0 1 3.66 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.42-1.42a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full bg-transparent text-white text-base font-medium leading-6 placeholder-neutral-400 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="w-full flex flex-col items-start gap-4">
                  <label className="text-neutral-50 text-xl font-medium leading-7">Email</label>
                  <div className="w-full h-16 pl-7 pr-4 py-6 bg-neutral-600 rounded-sm flex items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" className="shrink-0">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-white text-base font-medium leading-6 placeholder-neutral-400 outline-none"
                    />
                  </div>
                </div>

                {/* Service Required & Property Parish */}
                <div className="w-full flex flex-col lg:flex-row items-start gap-14">
                  <div className="w-full lg:w-96 flex flex-col items-start gap-4">
                    <label className="text-neutral-50 text-xl font-medium leading-7">Service Required *</label>
                    <div className="w-full pl-7 pr-4 py-5 bg-neutral-600 rounded-sm flex items-center justify-between">
                      <select
                        defaultValue=""
                        className="w-full bg-transparent text-neutral-400 text-base font-medium leading-6 outline-none appearance-none"
                      >
                        <option value="" disabled>Select a Service type</option>
                        <option value="pv">Property Verification</option>
                        <option value="cv">Construction Verification</option>
                        <option value="bv">Business Verification</option>
                      </select>
                      <svg width="12" height="24" viewBox="0 0 12 24" fill="none" className="shrink-0">
                        <path d="M6 5L12 12H0L6 5Z" fill="#a3a3a3" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full lg:w-96 flex flex-col items-start gap-4">
                    <label className="text-neutral-50 text-xl font-medium leading-7">Property Parish *</label>
                    <div className="w-full pl-7 pr-4 py-5 bg-neutral-600 rounded-sm flex items-center justify-between">
                      <select
                        defaultValue=""
                        className="w-full bg-transparent text-neutral-400 text-base font-medium leading-6 outline-none appearance-none"
                      >
                        <option value="" disabled>Select target parish</option>
                        <option value="kingston">Kingston</option>
                        <option value="st-andrew">St. Andrew</option>
                        <option value="st-catherine">St. Catherine</option>
                      </select>
                      <svg width="12" height="24" viewBox="0 0 12 24" fill="none" className="shrink-0">
                        <path d="M6 5L12 12H0L6 5Z" fill="#a3a3a3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Your Message */}
                <div className="w-full flex flex-col items-start gap-6">
                  <div className="w-full flex flex-col items-start gap-4">
                    <label className="text-neutral-50 text-xl font-medium leading-7">Your Message</label>
                    <textarea
                      rows={5}
                      placeholder="How can we help you today?"
                      className="w-full pl-7 pr-4 py-6 bg-neutral-600 rounded-sm text-white text-base font-medium leading-6 placeholder-neutral-400 outline-none resize-none"
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="w-full h-20 bg-black rounded-sm overflow-hidden flex items-center px-4">
                    <div className="w-full flex justify-between items-center">
                      <div className="flex items-center gap-2.5">
                        <div className="size-6 relative">
                          <div className="size-4 left-[3px] top-[3px] absolute bg-green-500 rounded-sm" />
                        </div>
                        <span className="text-white text-xl font-normal leading-7">I am not a robot *</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <path d="M32 8v8h-8M8 32v-8h8" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
                          <path d="M8 20a12 12 0 0 1 22.5-5.5M32 20a12 12 0 0 1-22.5 5.5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="text-[10px] text-neutral-400 mt-0.5">reCAPTCHA</span>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Policy */}
                  <div className="w-full flex items-start gap-2">
                    <div className="size-4 bg-zinc-300 shrink-0 mt-1 flex items-center justify-center">
                      <div className="size-3.5 bg-zinc-500" />
                    </div>
                    <span className="text-zinc-500 text-base font-normal leading-6">
                      I consent to having this website store my submitted information so they can respond to my inquiry. I have read and agree to the{' '}
                      <Link href="/privacy-policy" className="text-amber-200 text-lg font-medium leading-6">Privacy Policy. *</Link>
                    </span>
                  </div>
                </div>

                {/* SEND MESSAGE */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm flex items-center justify-center gap-2.5 text-stone-900 text-2xl font-medium leading-8 hover:opacity-90 transition-all"
                >
                  SEND MESSAGE
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-stone-900">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[758px] flex flex-col gap-7"
          >
            {/* Call Us Directly */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-32 bg-stone-900 rounded-sm overflow-hidden relative"
            >
              <div className="absolute left-6 top-6 flex items-start gap-6">
                <div className="w-16 h-20 bg-stone-500 rounded-[3px] relative overflow-hidden flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.39 2 2 0 0 1 3.66 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.42-1.42a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <div className="text-neutral-400 text-base font-medium leading-6">CALL US DIRECTLY</div>
                  <div className="text-white text-3xl font-medium leading-10">USA OFFICE: (561) 639-8772</div>
                </div>
              </div>
            </motion.div>

            {/* Email Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-32 bg-stone-900 rounded-sm overflow-hidden relative"
            >
              <div className="absolute left-6 top-6 flex items-start gap-6">
                <div className="w-16 h-20 bg-stone-500 rounded-[3px] relative overflow-hidden flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <div className="text-neutral-400 text-base font-medium leading-6">EMAIL SUPPORT</div>
                  <div className="text-white text-3xl font-medium leading-10">info@nexuspbs.net</div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-64 bg-stone-900 rounded-sm overflow-hidden relative"
            >
              <div className="absolute left-7 top-[25px] flex items-center gap-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div className="text-white text-3xl font-medium leading-10">Business Hours</div>
              </div>
              <div className="absolute left-7 top-[102px] flex items-start gap-72">
                <div className="w-52 flex flex-col items-start gap-7">
                  <div className="text-neutral-400 text-lg font-normal leading-7">Monday - Friday</div>
                  <div className="text-neutral-400 text-lg font-normal leading-7">Saturday</div>
                  <div className="text-neutral-400 text-lg font-normal leading-7">Sunday</div>
                </div>
                <div className="w-52 flex flex-col items-start gap-7">
                  <div className="text-neutral-400 text-lg font-normal leading-7">9:00 AM - 5:00 PM</div>
                  <div className="text-neutral-400 text-lg font-normal leading-7">10:00 AM - 2:00 PM</div>
                  <div className="text-red-600 text-lg font-normal leading-7">CLOSED</div>
                </div>
              </div>
            </motion.div>

            {/* Service Area */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[482px] bg-stone-900 rounded-sm overflow-hidden relative"
            >
              <div className="absolute left-7 top-[25px] flex items-center gap-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="text-white text-3xl font-medium leading-10">Service Area</div>
              </div>
              <div className="absolute left-[42px] top-[170px] w-full max-w-[674px] h-64 rounded-xs overflow-hidden">
                <img
                  src="/assets/images/map.png"
                  alt="Map of Jamaica"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-[83px] top-[82px] text-zinc-400 text-xl font-normal leading-7 max-w-[607px]">
                Serving Kingston, St. Andrew, and the wider Jamaican corporate area. Full island coverage available upon request.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
