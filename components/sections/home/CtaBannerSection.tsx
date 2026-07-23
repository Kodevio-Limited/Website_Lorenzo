import React from "react";

export function CtaBannerSection() {
  return (
    <section className="relative w-full bg-[#000B03] h-[700px] overflow-hidden">
      <img
        src="/assets/images/cta-banner-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative w-full h-full px-6 md:px-12 lg:px-16 flex items-center">
        <div className="w-full max-w-[843px] flex flex-col justify-start items-start gap-9">
          <h2 className="self-stretch">
            <span className="text-zinc-100 text-6xl md:text-7xl font-medium leading-tight md:leading-[99.02px]">
              You Can&apos;t Be Everywhere.{' '}
            </span>
            <span className="text-amber-200 text-6xl md:text-7xl font-bold leading-tight md:leading-[110.82px]" style={{ fontFamily: "'Times New Roman', serif" }}>
              we are
            </span>
          </h2>
          <p className="w-full max-w-[802px] text-zinc-400 text-2xl md:text-3xl font-normal leading-8 md:leading-10">
            Get reliable verification, strict documentation, and dedicated representation exactly when and where you need it.
          </p>
          <div className="inline-flex justify-start items-center gap-6">
            <a
              href="/contact"
              className="px-3.5 py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm text-stone-900 text-2xl font-medium leading-8"
            >
              Request a Quote
            </a>
            <a
              href="/contact"
              className="px-3.5 py-5 bg-zinc-100/30 rounded-sm outline outline-1 outline-offset-[-1px] outline-neutral-400 text-white text-2xl font-medium leading-8"
            >
              Client Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
