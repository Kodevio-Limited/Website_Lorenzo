"use client";

import { motion } from "motion/react";
import Link from 'next/link';

const reports = [
  {
    category: 'RESIDENTIAL PROPERTY',
    title: 'Property Verification Report – Kingston',
    desc: 'Comprehensive visual condition review, perimeter documentation, and visual utility status for buyers.',
    pages: '3 pages',
    type: 'Residential',
  },
  {
    category: 'Construction Project',
    title: 'Builder Escrow Verification – St. Ann',
    desc: 'Complete visual, safety, and utility documentation for buyers.',
    pages: '3 pages',
    type: 'Residential',
  },
  {
    category: 'Vacant Land Verification',
    title: 'Vacant Land Documentation – Trelawny',
    desc: 'Complete visual, safety, and utility documentation for buyers.',
    pages: '3 pages',
    type: 'Residential',
  },
];

export function DocumentBankSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full max-w-[1755px] mx-auto flex flex-col items-center gap-16">
          <div className="w-full max-w-[1378px] flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center text-amber-200 text-2xl font-normal leading-8"
            >
              INTERACTIVE DOCUMENT BANK
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center text-white text-5xl font-normal leading-[63px]"
            >
              Select a Sample Report
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[992px] text-center text-neutral-400 text-2xl font-normal leading-8"
            >
              Click any document thumbnail card below to instantly populate the primary viewer with its tailored specifications and layout pages.
            </motion.div>
          </div>

          <div className="self-stretch flex justify-start items-center gap-14">
            {reports.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 60, damping: 14, delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="w-[549px] bg-stone-900 rounded-[10px] overflow-hidden group"
              >
                <div className="p-[11px]">
                  <div className="h-80 bg-white rounded-[5px] relative overflow-hidden">
                    {i === 0 && (
                      <div className="p-4 h-full">
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-amber-200/30 rounded-full" />
                            <div className="text-amber-900 text-[10px] font-bold">NEXUS</div>
                          </div>
                          <div className="text-gray-400 text-[8px] text-right">
                            <div>KV-2026-0710</div>
                          </div>
                        </div>
                        <div className="text-gray-900 text-xs font-bold mb-2">Property Verification Report</div>
                        <div className="text-gray-500 text-[9px] mb-3">Kingston, St. Andrew | 4 Bed Detached</div>
                        <div className="space-y-1.5">
                          <div className="h-2 bg-gray-200 rounded w-full" />
                          <div className="h-2 bg-gray-200 rounded w-10/12" />
                          <div className="h-2 bg-gray-200 rounded w-3/4" />
                          <div className="h-2 bg-gray-200 rounded w-11/12" />
                          <div className="h-2 bg-gray-200 rounded w-2/3" />
                          <div className="h-2 bg-gray-200 rounded w-4/5" />
                          <div className="h-2 bg-gray-200 rounded w-9/12" />
                        </div>
                        <div className="mt-3 pt-2 border-t border-gray-200 flex justify-between text-gray-400 text-[8px]">
                          <span>Page 1 of 3</span>
                          <span>NX-KG-2026-0710</span>
                        </div>
                      </div>
                    )}
                    {i === 1 && (
                      <div className="p-4 h-full">
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-amber-200/30 rounded-full" />
                            <div className="text-amber-900 text-[10px] font-bold">NEXUS</div>
                          </div>
                          <div className="text-gray-400 text-[8px] text-right">
                            <div>BE-2026-0710</div>
                          </div>
                        </div>
                        <div className="text-gray-900 text-xs font-bold mb-2">Builders Escrow Verification</div>
                        <div className="text-gray-500 text-[9px] mb-3">St. Ann | Construction Project</div>
                        <div className="space-y-1.5">
                          <div className="h-2 bg-gray-200 rounded w-full" />
                          <div className="h-2 bg-gray-200 rounded w-11/12" />
                          <div className="h-2 bg-gray-200 rounded w-4/5" />
                          <div className="h-2 bg-gray-200 rounded w-full" />
                          <div className="h-2 bg-gray-200 rounded w-3/4" />
                          <div className="h-2 bg-gray-200 rounded w-10/12" />
                          <div className="h-2 bg-gray-200 rounded w-5/6" />
                        </div>
                        <div className="mt-3 pt-2 border-t border-gray-200 flex justify-between text-gray-400 text-[8px]">
                          <span>Page 1 of 3</span>
                          <span>BE-ST-2026</span>
                        </div>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="p-4 h-full">
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-amber-200/30 rounded-full" />
                            <div className="text-amber-900 text-[10px] font-bold">NEXUS</div>
                          </div>
                          <div className="text-gray-400 text-[8px] text-right">
                            <div>VL-2026-0710</div>
                          </div>
                        </div>
                        <div className="text-gray-900 text-xs font-bold mb-2">Vacant Land Documentation</div>
                        <div className="text-gray-500 text-[9px] mb-3">Trelawny | Land Parcel</div>
                        <div className="space-y-1.5">
                          <div className="h-2 bg-gray-200 rounded w-full" />
                          <div className="h-2 bg-gray-200 rounded w-9/12" />
                          <div className="h-2 bg-gray-200 rounded w-11/12" />
                          <div className="h-2 bg-gray-200 rounded w-3/4" />
                          <div className="h-2 bg-gray-200 rounded w-4/5" />
                          <div className="h-2 bg-gray-200 rounded w-full" />
                          <div className="h-2 bg-gray-200 rounded w-2/3" />
                        </div>
                        <div className="mt-3 pt-2 border-t border-gray-200 flex justify-between text-gray-400 text-[8px]">
                          <span>Page 1 of 3</span>
                          <span>VL-TR-2026</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 rounded-[5px] flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        href="#interactive-verification-desk"
                        className="px-24 py-4 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm text-stone-900 text-xl font-medium leading-7 hover:opacity-90 transition-all"
                      >
                        VIEW SAMPLE
                      </Link>
                      <Link
                        href="/assets/sample-report.pdf"
                        target="_blank"
                        download
                        className="px-3.5 py-4 bg-white/50 rounded-sm outline outline-1 outline-offset-[-0.89px] outline-neutral-400 text-stone-900 text-xl font-medium leading-7 hover:bg-white/60 transition-all"
                      >
                        DOWNLOAD PDF
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-[11px] pb-4">
                  <div className="text-amber-200 text-base font-medium leading-6">{r.category}</div>
                  <div className="text-white text-2xl font-bold leading-8 mt-2">{r.title}</div>
                  <div className="text-zinc-400 text-lg font-normal leading-7 mt-3">{r.desc}</div>

                  <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-400 my-4" />

                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-6">
                      <span className="text-neutral-400 text-lg font-normal leading-7">{r.pages}</span>
                      <span className="text-neutral-400 text-lg font-normal leading-7">{r.type}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-amber-200 text-base font-medium uppercase tracking-wider">PREVIEW</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-200">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
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
