import Link from 'next/link';

export function SampleReportHero() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner pt-24 lg:pt-[120px] pb-10">
        <div className="flex flex-col items-center gap-5">
          <div className="self-start flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase">
            <Link href="/" className="text-neutral-400 hover:text-amber-200 transition-colors">Home</Link>
            <span className="text-amber-200 size-1.5 rounded-full bg-current" />
            <span className="text-white">Sample Reports</span>
          </div>

          <div className="text-center text-amber-200 text-2xl font-normal leading-8">Sample Reports</div>
          <div className="w-full max-w-[1046px] text-center text-white text-5xl font-normal leading-[63px]">
            Explore our professionally prepared property reports and insights.
          </div>
          <div className="w-full max-w-[1074px] text-center text-neutral-400 text-2xl font-normal leading-8">
            Get a clear understanding of the absolute quality, meticulous structure, and precise detail included in our independent reports before buying or renting.
          </div>
        </div>
      </div>
    </section>
  );
}
