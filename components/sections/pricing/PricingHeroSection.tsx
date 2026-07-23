import Link from 'next/link';

export function PricingHeroSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner pt-24 lg:pt-[120px] pb-10">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="self-start flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase">
            <Link href="/" className="text-white hover:text-amber-200 transition-colors">Home</Link>
            <span className="text-amber-200 size-1.5 rounded-full bg-current" />
            <span className="text-white">Pricing</span>
          </div>

          <div className="text-center text-amber-200 text-xl font-medium uppercase leading-7 tracking-widest">
            PRICING &amp; SERVICES
          </div>
          <div className="flex flex-col items-center">
            <div className="text-center text-white text-5xl sm:text-6xl font-medium leading-[65.36px]">
              Pricing &amp; Services
            </div>
          </div>
          <div className="text-center text-neutral-400 text-xl font-normal leading-8">
            Clear overview of all available verification and support services
          </div>
        </div>
      </div>
    </section>
  );
}
