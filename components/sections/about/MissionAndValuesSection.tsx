const valuesCol1 = [
  { title: 'Integrity', desc: 'We do what is right' },
  { title: 'Discretion', desc: 'Your privacy is respected.' },
  { title: 'Commitment', desc: 'Your satisfaction matters.' },
];

const valuesCol2 = [
  { title: 'Reliability', desc: 'You can count on us.' },
  { title: 'Accountability', desc: 'We document the facts.' },
];

function CheckIcon() {
  return (
    <div className="size-12 relative overflow-hidden shrink-0">
      <div className="size-10 left-[4.17px] top-[4.17px] absolute bg-white outline outline-2 outline-offset-[-1px] outline-white rounded-full" />
      <div className="w-5 h-3 left-[16.67px] top-[18.75px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
      <div className="size-12 left-0 top-0 absolute bg-green-500 rounded-full" />
    </div>
  );
}

export function MissionAndValuesSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-10">
        <div className="max-w-[1762px] mx-auto flex justify-between items-start gap-12">
          {/* Mission */}
          <div className="w-[855px] flex flex-col justify-start items-start gap-11">
            <div className="w-72 flex flex-col justify-start items-start gap-6">
              <div className="text-white text-4xl font-medium leading-[56px]">OUR MISSION</div>
              <div className="w-32 outline outline-[6px] outline-offset-[-3px] outline-amber-200" />
            </div>
            <div className="text-zinc-400 text-3xl font-normal leading-10">
              Our mission is to reduce uncertainty for people who have property, business, construction, or personal interests in Jamaica. We provide trusted local representation, professional documentation, and dependable communication.
            </div>
          </div>

          {/* Values */}
          <div className="w-[799px] flex flex-col justify-start items-start gap-12">
            <div className="w-72 flex flex-col justify-start items-start gap-6">
              <div className="text-white text-4xl font-medium leading-[56px]">OUR VALUES</div>
              <div className="w-32 outline outline-[6px] outline-offset-[-3px] outline-amber-200" />
            </div>
            <div className="self-stretch flex justify-start items-start gap-10">
              <div className="w-96 flex flex-col gap-10">
                {valuesCol1.map((v) => (
                  <div key={v.title} className="flex flex-col gap-10">
                    <div className="flex items-center gap-10">
                      <CheckIcon />
                      <span className="text-white text-3xl font-normal leading-10">{v.title}</span>
                    </div>
                    <div className="text-zinc-400 text-2xl font-light leading-9">{v.desc}</div>
                  </div>
                ))}
              </div>
              <div className="w-96 flex flex-col gap-10">
                {valuesCol2.map((v) => (
                  <div key={v.title} className="flex flex-col gap-10">
                    <div className="flex items-center gap-10">
                      <CheckIcon />
                      <span className="text-white text-3xl font-normal leading-10">{v.title}</span>
                    </div>
                    <div className="text-zinc-400 text-2xl font-light leading-9">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
