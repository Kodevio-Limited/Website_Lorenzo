import Link from 'next/link';

export function ServiceAreaHeroSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner pt-24 lg:pt-[120px] pb-10">
        <div className="flex flex-col items-center gap-5">
          <div className="self-start flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase">
            <Link href="/" className="text-neutral-400 hover:text-amber-200 transition-colors">Home</Link>
            <span className="text-amber-200 size-1.5 rounded-full bg-current" />
            <span className="text-white">Service Area</span>
          </div>

          <div className="text-center text-amber-200 text-2xl font-normal leading-8">Service Area</div>
          <div className="w-full max-w-[1188px] text-center text-white text-5xl font-normal leading-[63px]">
            Service Areas Across Jamaica
          </div>
          <div className="w-full max-w-[1074px] text-center text-neutral-400 text-2xl font-normal leading-8">
            We proudly serve all 14 parishes across Jamaica, ensuring reliable and professional service wherever your assets are located.
          </div>
        </div>
      </div>
    </section>
  );
}
