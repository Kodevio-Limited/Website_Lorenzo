import Link from 'next/link';

export function FaqHeroSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner pt-24 lg:pt-[120px] pb-10">
        <div className="flex flex-col items-center gap-8">
          <div className="self-start flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase">
            <Link href="/" className="text-neutral-400 hover:text-amber-200 transition-colors">Home</Link>
            <span className="text-amber-200 size-1.5 rounded-full bg-current" />
            <span className="text-white">FAQ</span>
          </div>

          <div className="w-full max-w-[651px] flex flex-col items-center gap-6">
            <div className="text-center text-amber-200 text-2xl font-normal leading-8">FAQ</div>
            <div className="text-center text-white text-5xl font-normal leading-[70px]">
              Everything You Need to Know
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
