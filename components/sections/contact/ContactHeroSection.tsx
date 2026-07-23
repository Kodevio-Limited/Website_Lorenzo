import Link from 'next/link';

export function ContactHeroSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner pt-24 lg:pt-[120px] pb-10">
        <div className="flex flex-col items-center gap-5">
          <div className="self-start flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase">
            <Link href="/" className="text-neutral-400 hover:text-amber-200 transition-colors">Home</Link>
            <span className="text-amber-200 size-1.5 rounded-full bg-current" />
            <span className="text-white">Contact</span>
          </div>

          <div className="text-center text-amber-200 text-2xl font-normal leading-8">Contact Us</div>
          <div className="w-full max-w-[1046px] text-center text-white text-5xl font-normal leading-[63px]">
            We&apos;re here to assist you with property verification and business services.
          </div>
          <div className="w-full max-w-[1074px] text-center text-neutral-400 text-2xl font-normal leading-8">
            Reach out to our team for inquiries, professional consultations, or direct service requests. We guarantee a prompt and thorough response.
          </div>
        </div>
      </div>
    </section>
  );
}
