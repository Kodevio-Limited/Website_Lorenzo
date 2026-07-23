const features = [
  {
    title: 'Property Details',
    desc: 'Accurate plot specs, land boundaries, historical records, and zoning allowances.',
  },
  {
    title: 'High-Quality Photos',
    desc: 'High-definition thermal, macro, and wide-angle visual evidence cataloged page-by-page.',
  },
  {
    title: 'Video Walkthroughs',
    desc: 'Secure QR links embedded directly in paper reports linking to interactive video audits.',
  },
  {
    title: 'Condition & Analysis',
    desc: 'Comprehensive evaluation of masonry, foundations, electrical grids, and utility lines.',
  },
  {
    title: 'Recommendations',
    desc: 'Clear, actionable repairs prioritizations with estimated repair costs.',
  },
];

export function WhatIsIncludedSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full max-w-[1762px] mx-auto flex flex-col items-center gap-20">
          <div className="w-full max-w-[670px] flex flex-col items-center gap-5">
            <div className="text-center">
              <span className="text-white text-5xl font-normal leading-[63px]">What&apos;s Included in Our </span>
              <span className="text-amber-200 text-5xl font-normal italic leading-[63px]">Reports</span>
            </div>
            <div className="text-center text-neutral-400 text-2xl font-normal leading-8">
              Every verification report we deliver is standardized and organized for straightforward viewing.
            </div>
          </div>

          <div className="self-stretch flex justify-center items-center gap-3">
            {features.map((f, i) => (
              <div key={i} className="w-80 h-96 relative bg-stone-900 rounded-sm overflow-hidden outline outline-2 outline-offset-[-2px]">
                <div className="w-72 left-[24px] top-[162px] absolute flex flex-col justify-start items-start gap-7">
                  <div className="text-white text-3xl font-medium leading-10">{f.title}</div>
                  <div className="text-zinc-400 text-lg font-normal leading-7">{f.desc}</div>
                </div>
                <div className="size-16 left-[24px] top-[41px] absolute rounded-full border-2 border-amber-200" />
                <div className="size-5 left-[44px] top-[60px] absolute bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
