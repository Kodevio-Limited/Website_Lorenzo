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
          <div className="w-full lg:w-[506px] flex flex-col gap-8">
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
                A Campbell Legacy Holdings, LLC Company&apos;
              </p>
            </div>
            <p className="text-neutral-400 text-base lg:text-lg font-normal leading-5 lg:leading-6">
              Service Area: All 14 Parishes, Jamaica<br />
              Phone: 561-NEXUS-PB<br />
              Phone USA OFFICE: (561) 639-8772<br />
              Email: info@nexuspbs.net<br />
              Office Hours: Mon-Fri, 9:00 AM-6:00 PM
            </p>
          </div>

          <div className="w-full lg:w-[1000px] flex flex-wrap lg:flex-nowrap justify-start items-start gap-8 lg:gap-12 xl:gap-24">
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
          </div>
        </div>

        <div className="w-full h-0 outline outline-[1px] outline-offset-[-0.5px] outline-neutral-600" />

        <div className="w-full max-w-[1758px] mx-auto px-6 lg:px-12 pb-6 lg:pb-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm lg:text-base font-normal leading-5">
            &copy; 2026 Nexus Property &amp; Business Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="size-9 lg:size-10 relative overflow-hidden flex items-center justify-center">
              <div className="size-7 lg:size-8 bg-neutral-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className="size-9 lg:size-10 relative overflow-hidden flex items-center justify-center">
              <div className="w-7 lg:w-8 h-6 lg:h-7 bg-neutral-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="size-9 lg:size-10 relative overflow-hidden flex items-center justify-center">
              <div className="size-7 lg:size-8 bg-neutral-400" />
            </a>
            <a href="https://wa.me/15616398772" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="size-9 lg:size-10 relative overflow-hidden flex items-center justify-center">
              <div className="size-7 lg:size-8 bg-neutral-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
