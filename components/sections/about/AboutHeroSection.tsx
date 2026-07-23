import { Button } from '@/components/shared/Button';

export function AboutHeroSection() {
  return (
    <section className="py-16 bg-[#0A0B09]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founder portrait */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="rounded-2xl overflow-hidden border border-[#2A2B26]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="Lorenzo A. Campbell — Founder & Managing Director"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <p className="text-white font-semibold">Lorenzo A. Campbell</p>
                <p className="text-[#D1A736] text-sm">Founder & Managing Director</p>
              </div>
            </div>
          </div>

          {/* Headline + signature */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-3">
              Local Eyes.<br />
              Trusted Hands.
            </h1>
            <p className="text-4xl font-bold italic gold-text mb-6">
              Total Peace of Mind.
            </p>
            <div className="w-16 h-0.5 bg-[#D1A736] mb-6" />
            <p className="text-[#9B9B8A] text-base mb-2">
              You Can't Be Everywhere. We Are.
            </p>
            <p className="text-[#6B6B5A] text-sm mb-8 italic">
              Representing your interests when you cannot be there.
            </p>
            <p className="font-serif italic text-[#D1A736] text-2xl mb-8">
              Lorenzo Andrew Campbell
            </p>
            <div className="flex gap-4">
              <Button href="/contact" variant="gold" size="md">Request Service</Button>
              <Button href="/sample-reports" variant="outline" size="md">Sample Report</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
