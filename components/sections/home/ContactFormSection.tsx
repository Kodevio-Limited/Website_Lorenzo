'use client';

import { useState } from 'react';
import { motion } from "motion/react";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section-full bg-[#000B03]" id="contact-form">
      <div className="section-inner py-12 lg:py-16">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-8 min-h-[calc(100vh-8rem)] justify-center">

        <div className="w-full flex flex-col items-center gap-5">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-amber-200 text-2xl font-normal leading-8 text-center"
          >
            Start Verification
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-4xl sm:text-5xl font-normal leading-tight sm:leading-[63px] text-center"
          >
            Request Consultation &amp; Quote
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[763px] text-neutral-400 text-xl sm:text-2xl font-normal leading-8 text-center"
          >
            Provide basic detail, and an on-site asset stewardship coordinator will connect shortly.
          </motion.p>
        </div>

        {submitted ? (
          <div className="w-full max-w-[968px] bg-stone-900 rounded-sm flex items-center justify-center min-h-[500px]">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D1A736" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Message Sent!</h3>
              <p className="text-zinc-400 text-sm">We&apos;ll get back to you within 24 business hours.</p>
            </div>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[900px] bg-stone-900 rounded-sm overflow-hidden"
          >
            <div className="px-6 md:px-10 pt-10 lg:pt-12 pb-10 lg:pb-12 flex flex-col gap-6 lg:gap-8">

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="w-full lg:w-[416px] flex flex-col gap-3">
                  <label className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7" style={{ fontFamily: "'Poppins', sans-serif" }}>Your Full Name *</label>
                  <div className="flex items-center gap-2 pl-5 lg:pl-7 pr-3 lg:pr-4 py-3 lg:py-5 bg-neutral-600 rounded-sm">
                    <svg className="size-5 lg:size-6 shrink-0 text-neutral-400" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 20c0-4 3.58-8 8-8s8 4 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-transparent text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6 focus:outline-none focus:text-white placeholder-neutral-400"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[416px] flex flex-col gap-3">
                  <label className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7" style={{ fontFamily: "'Poppins', sans-serif" }}>Phone / WhatsApp Number *</label>
                  <div className="flex items-center gap-2 pl-5 lg:pl-7 pr-3 lg:pr-4 py-3 lg:py-5 bg-neutral-600 rounded-sm">
                    <svg className="size-5 lg:size-6 shrink-0 text-neutral-400" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input
                      type="tel"
                      required
                      placeholder="Enter you phone number"
                      className="w-full bg-transparent text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6 focus:outline-none focus:text-white placeholder-neutral-400"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="w-full lg:w-[416px] flex flex-col gap-3">
                  <label className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7" style={{ fontFamily: "'Poppins', sans-serif" }}>Email Address *</label>
                  <div className="flex items-center gap-2 pl-5 lg:pl-7 pr-3 lg:pr-4 py-3 lg:py-5 bg-neutral-600 rounded-sm">
                    <svg className="size-5 lg:size-6 shrink-0 text-neutral-400" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M2 4l10 8 10-8" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <input
                      type="email"
                      required
                      placeholder="Enter you email"
                      className="w-full bg-transparent text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6 focus:outline-none focus:text-white placeholder-neutral-400"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[416px] flex flex-col gap-3">
                  <label className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7" style={{ fontFamily: "'Poppins', sans-serif" }}>Target Parish Zone *</label>
                  <div className="flex items-center justify-between pl-5 lg:pl-7 pr-3 lg:pr-4 py-3 lg:py-5 bg-neutral-600 rounded-sm">
                    <span className="text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6" style={{ fontFamily: "'Satoshi', sans-serif" }}>Select Parish...</span>
                    <svg className="w-2.5 h-2 lg:w-3 lg:h-2 rotate-180 text-white shrink-0" viewBox="0 0 12 8" fill="none">
                      <path d="M1 7l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[864px] flex flex-col gap-3">
                <label className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7" style={{ fontFamily: "'Poppins', sans-serif" }}>Service Required</label>
                <div className="flex items-center justify-between pl-5 lg:pl-7 pr-3 lg:pr-4 py-3 lg:py-5 bg-neutral-600 rounded-sm">
                  <span className="text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6" style={{ fontFamily: "'Satoshi', sans-serif" }}>Select a Service type</span>
                  <svg className="w-2.5 h-2 lg:w-3 lg:h-2 rotate-180 text-neutral-400 shrink-0" viewBox="0 0 12 8" fill="none">
                    <path d="M1 7l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="w-full lg:w-[864px] flex flex-col gap-3">
                <label className="text-neutral-50 text-lg lg:text-xl font-medium leading-6 lg:leading-7" style={{ fontFamily: "'Poppins', sans-serif" }}>Property Location &amp; Requirements Brief</label>
                <div className="pl-5 lg:pl-7 pr-3 lg:pr-4 py-4 lg:py-6 bg-neutral-600 rounded-sm">
                  <textarea
                    rows={3}
                    placeholder="Outline specific structural details, plot coordinates, boundaries, or general timeline expectations..."
                    className="w-full bg-transparent text-neutral-400 text-sm lg:text-base font-medium leading-5 lg:leading-6 focus:outline-none focus:text-white placeholder-neutral-400 resize-none"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full lg:w-[864px] py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm text-stone-900 text-lg lg:text-2xl font-medium leading-7 lg:leading-8"
                style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
              >
                SUBMIT FORMAL STEWARDSHIP REQUEST
              </motion.button>
            </div>
          </motion.form>
        )}

      </div>
      </div>
    </section>
  );
}
