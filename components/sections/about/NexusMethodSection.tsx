const steps = [
  { number: '1', title: 'Notice', desc: 'We identify what needs to be reviewed.' },
  { number: '2', title: 'Evaluate', desc: 'We assess the property, project, business location, or situation.' },
  { number: '3', title: 'Examine', desc: 'We document conditions with photos, video, notes, and verification details.' },
  { number: '4', title: 'Update', desc: 'We provide clear reports and timely communication.' },
  { number: '5', title: 'Support', desc: 'Deliver the final documented observations, documents, and visual evidence to the client.' },
];

export function NexusMethodSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-10">
        <div className="max-w-[1762px] mx-auto flex flex-col items-center gap-20">
          <div className="w-full max-w-[670px] flex flex-col items-center gap-5">
            <div className="text-center">
              <span className="text-white text-5xl font-normal leading-[63px]">The </span>
              <span className="text-amber-200 text-5xl font-bold italic leading-[63px]">Nexus</span>
              <span className="text-white text-5xl font-normal leading-[63px]"> Method</span>
            </div>
            <div className="text-center text-neutral-400 text-2xl font-normal leading-8">
              Our process is simple, structured, and accountable.
            </div>
          </div>

          <div className="self-stretch flex justify-center items-center gap-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="w-80 h-96 relative bg-stone-900 rounded-sm overflow-hidden outline outline-2 outline-offset-[-2px]"
              >
                <div className="w-72 left-[24px] top-[56px] absolute flex flex-col justify-start items-start gap-11">
                  <div className="size-16 rounded-full border-2 border-amber-200 flex items-center justify-center">
                    <span className="text-amber-200 text-3xl font-medium leading-10">{step.number}</span>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-7">
                    <div className="text-white text-3xl font-medium leading-10">{step.title}</div>
                    <div className="text-zinc-400 text-lg font-normal leading-7">{step.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
