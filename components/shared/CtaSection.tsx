import Link from 'next/link';

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function CtaSection({ title, description, buttonText, buttonHref }: CtaSectionProps) {
  return (
    <section className="py-24 bg-[#000B03] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-white text-4xl sm:text-5xl font-normal leading-tight sm:leading-[63px] mb-6">
          {title}
        </h2>
        <p className="text-neutral-400 text-xl lg:text-2xl font-normal leading-relaxed lg:leading-8 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-block px-3.5 py-3 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm text-stone-900 text-lg font-medium leading-7 hover:opacity-90 transition-all uppercase tracking-wider"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
