import Link from 'next/link';

interface LegalHeroProps {
  title: string;
  description: string;
  date: string;
}

export function LegalHeroSection({ title, description, date }: LegalHeroProps) {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner pt-24 lg:pt-[120px] pb-10">
        <div className="flex flex-col items-center gap-5">
          <div className="self-start flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase">
            <Link href="/" className="text-neutral-400 hover:text-amber-200 transition-colors">Home</Link>
            <span className="text-amber-200 size-1.5 rounded-full bg-current" />
            <span className="text-white">{title}</span>
          </div>

          <div className="text-center text-amber-200 text-2xl font-normal leading-8">Legal Documentation</div>
          <div className="text-center text-white text-5xl font-normal leading-[63px]">{title}</div>
          <div className="w-full max-w-[1074px] text-center text-neutral-400 text-2xl font-normal leading-8">
            {description}
          </div>
          <div className="px-5 py-3.5 bg-white/20 rounded-[38px] outline outline-1 outline-offset-[-1px] outline-zinc-400 inline-flex justify-center items-center gap-2.5">
            <span className="text-white text-2xl font-normal leading-8">Last Updated: {date}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
