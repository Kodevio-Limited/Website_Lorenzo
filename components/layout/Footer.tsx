"use client";

import { motion } from "motion/react";
import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Sample Reports', href: '/sample-reports' },
  { label: 'Service Areas', href: '/service-area' },
];

const coreServices = [
  { label: 'Property Verification Services', href: '/services/property-verification' },
  { label: 'Construction & Project Verification', href: '/services' },
  { label: 'Family Wellness & Care Services', href: '/services' },
  { label: 'Business Verification Services', href: '/services' },
  { label: 'Eagle Eye Drone Verification™', href: '/services' },
  { label: 'Hurricane & Storm Services', href: '/services' },
  { label: 'Vacation Rental & Airbnb Support', href: '/services' },
  { label: 'Building & Renovation Advisory', href: '/services' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#000B03]">
      <div className="w-full flex flex-col items-center gap-12">
        <div className="w-full h-0 outline outline-[1px] outline-offset-[-0.5px] outline-neutral-600" />

        <div className="w-full max-w-[1758px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[506px] flex flex-col gap-8"
          >
            <div className="w-full max-w-[466px] flex flex-col gap-4">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="size-16 lg:size-20 relative shrink-0">
                  <Image
                    src="/assets/logo.png"
                    alt="Nexus"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white font-bold text-xl lg:text-2xl leading-none tracking-tight">NEXUS</span>
              </Link>
              <p className="text-white text-lg lg:text-xl font-normal leading-6 lg:leading-7">
                A Campbell Legacy Holdings, LLC Company
              </p>
            </div>
            <p className="text-neutral-400 text-base lg:text-lg font-normal leading-5 lg:leading-6">
              Service Area: All 14 Parishes, Jamaica<br />
              Phone: 561-NEXUS-PB<br />
              Phone USA OFFICE: (561) 639-8772<br />
              Email: info@nexuspbs.net<br />
              Office Hours: Mon-Fri, 9:00 AM-6:00 PM
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[1000px] flex flex-wrap lg:flex-nowrap justify-start items-start gap-8 lg:gap-12 xl:gap-24"
          >
            <div className="w-44 flex flex-col gap-5">
              <h3 className="text-white text-xl lg:text-2xl font-normal leading-7 lg:leading-8">Quick Links</h3>
              <div className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-neutral-400 text-base lg:text-lg font-normal leading-5 lg:leading-6 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-72 flex flex-col gap-5">
              <h3 className="text-white text-xl lg:text-2xl font-normal leading-7 lg:leading-8">Core Services</h3>
              <div className="flex flex-col gap-4">
                {coreServices.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="text-neutral-400 text-base lg:text-lg font-normal leading-5 lg:leading-6 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-72 flex flex-col gap-5">
              <h3 className="text-white text-xl lg:text-2xl font-normal leading-7 lg:leading-8">Legal</h3>
              <div className="flex flex-col gap-4">
                {legal.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-neutral-400 text-base lg:text-lg font-normal leading-5 lg:leading-6 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full h-0 outline outline-[1px] outline-offset-[-0.5px] outline-neutral-600" />

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[1758px] mx-auto px-6 lg:px-12 pb-6 lg:pb-8 flex flex-col lg:flex-row justify-between items-center gap-4"
          >
            <p className="text-neutral-400 text-sm lg:text-base font-normal leading-5">
              &copy; 2026 Nexus Property &amp; Business Services. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <motion.span title="Facebook — coming soon" aria-label="Facebook — coming soon"
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="size-9 lg:size-10 flex items-center justify-center rounded-full bg-neutral-700/50 opacity-60 cursor-not-allowed transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#A1A1AA" className="lg:w-5 lg:h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </motion.span>
            <motion.span title="Twitter — coming soon" aria-label="Twitter — coming soon"
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="size-9 lg:size-10 flex items-center justify-center rounded-full bg-neutral-700/50 opacity-60 cursor-not-allowed transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#A1A1AA" className="lg:w-5 lg:h-5">
                <path d="M4 4l6.25 8.333L4 20h1.416l5.5-7.333L15.833 20H21l-6.667-8.889L20.5 4h-1.416l-5.084 6.778L9.167 4H4z" />
              </svg>
            </motion.span>
            <motion.span title="Instagram — coming soon" aria-label="Instagram — coming soon"
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="size-9 lg:size-10 flex items-center justify-center rounded-full bg-neutral-700/50 opacity-60 cursor-not-allowed transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:w-5 lg:h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </motion.span>
            <motion.a href="https://wa.me/15616398772" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="size-9 lg:size-10 flex items-center justify-center rounded-full bg-neutral-700/50 hover:bg-neutral-600/50 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#A1A1AA" className="lg:w-5 lg:h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
