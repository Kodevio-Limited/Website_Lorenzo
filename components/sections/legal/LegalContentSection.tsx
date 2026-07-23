interface Section {
  title: string;
  content: string;
}

interface LegalContentProps {
  sections: Section[];
}

export function LegalContentSection({ sections }: LegalContentProps) {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full max-w-[1755px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Table of Contents Sidebar */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="w-full h-[582px] bg-stone-900 rounded-sm overflow-hidden">
              <div className="text-neutral-400 text-3xl font-medium leading-10 pt-[26px] px-6">
                Table of Contents
              </div>
              <div className="text-zinc-400 text-2xl font-normal leading-[51.52px] pt-[37px] px-6">
                {sections.map((s, i) => (
                  <a
                    key={i}
                    href={`#section-${i + 1}`}
                    className="block hover:text-amber-200 transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-start gap-16">
            {sections.map((s, i) => (
              <div key={i} id={`section-${i + 1}`} className="w-full flex flex-col items-start gap-8 scroll-mt-24">
                <div className="text-white text-4xl font-medium leading-[56px]">{s.title}</div>
                <div className="w-full text-zinc-400 text-2xl font-normal leading-9 whitespace-pre-line">
                  {s.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
