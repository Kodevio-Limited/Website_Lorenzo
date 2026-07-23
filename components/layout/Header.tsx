'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { label: 'Property Verification Services', href: '/services/property-verification' },
  { label: 'Residential Property Verification', href: '/services/residential-property-verification' },
  { label: 'Service Areas', href: '/service-area' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
  { label: 'FAQ', href: '/faq' },
];

const navLinks = [
  { label: 'Services', href: '/services', hasDropdown: 'services' as const },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Sample Reports', href: '/sample-reports' },
  { label: 'Contact', href: '/contact' },
  { label: 'Legal', hasDropdown: 'legal' as const },
];

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const legalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        if (dropdownOpen === 'services') setDropdownOpen(null);
      }
      if (legalRef.current && !legalRef.current.contains(target)) {
        if (dropdownOpen === 'legal') setDropdownOpen(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      if (currentY < 50) {
        setVisible(true);
      } else if (currentY > prevScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      prevScrollY.current = currentY;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full bg-[#000B03] flex items-center justify-between h-20 md:h-24 px-6 md:px-12 lg:px-16">

        <Link href="/" className="flex items-center gap-3 md:gap-4 shrink-0">
          <div className="size-14 md:size-24 relative shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Nexus"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-white font-bold text-lg md:text-3xl leading-none tracking-tight">
            NEXUS
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 xl:gap-16 2xl:gap-24">
          {navLinks.map((link) => {
            if (link.hasDropdown === 'services') {
              return (
                <div key={link.label} className="relative" ref={servicesRef}>
                  <button
                    className="flex items-center gap-2 text-zinc-400 text-lg xl:text-xl 2xl:text-2xl font-normal leading-6 xl:leading-7 2xl:leading-8 hover:text-white transition-colors cursor-pointer"
                    onClick={() => setDropdownOpen('services')}
                    aria-expanded={dropdownOpen === 'services'}
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${dropdownOpen === 'services' ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {dropdownOpen === 'services' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#131410] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden z-50">
                      <div className="py-2">
                        {services.map((s) => (
                          <Link
                            key={s.label}
                            href={s.href}
                            onClick={() => setDropdownOpen(null)}
                            className="block px-5 py-3 text-sm text-zinc-400 hover:text-white hover:bg-[#1A1B16] transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                        <div className="border-t border-zinc-800 mt-2 pt-2 px-5 pb-3">
                          <Link
                            href="/services"
                            onClick={() => setDropdownOpen(null)}
                            className="text-sm text-amber-500 hover:text-amber-300 transition-colors font-medium"
                          >
                            View All Services &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (link.hasDropdown === 'legal') {
              return (
                <div key={link.label} className="relative" ref={legalRef}>
                  <button
                    className="flex items-center gap-2 text-zinc-400 text-lg xl:text-xl 2xl:text-2xl font-normal leading-6 xl:leading-7 2xl:leading-8 hover:text-white transition-colors cursor-pointer"
                    onClick={() => setDropdownOpen('legal')}
                    aria-expanded={dropdownOpen === 'legal'}
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${dropdownOpen === 'legal' ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {dropdownOpen === 'legal' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#131410] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden z-50">
                      <div className="py-2">
                        {legalLinks.map((l) => (
                          <Link
                            key={l.label}
                            href={l.href}
                            onClick={() => setDropdownOpen(null)}
                            className="block px-5 py-3 text-sm text-zinc-400 hover:text-white hover:bg-[#1A1B16] transition-colors"
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-zinc-400 text-lg xl:text-xl 2xl:text-2xl font-normal leading-6 xl:leading-7 2xl:leading-8 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex px-3.5 py-5 items-center justify-center gap-2 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm text-stone-900 text-lg xl:text-2xl font-medium leading-6 xl:leading-8 hover:opacity-90 transition-all"
        >
          REQUEST SERVICE
        </Link>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#000B03] border-t border-zinc-800 px-6 md:px-12 lg:px-16 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href || '#'}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-zinc-400 hover:text-white border-b border-zinc-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {legalLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 pl-4 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center h-10 px-3.5 py-2 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm text-stone-900 text-sm font-medium leading-5"
            >
              REQUEST SERVICE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
