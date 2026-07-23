const processSteps = [
  {
    title: 'Request & Detail',
    desc: 'Submit your request with property details, location, and specific concerns.',
  },
  {
    title: 'Schedule Dispatch',
    desc: 'Our team schedules a visit with our verified local agent within 48-72 hours.',
  },
  {
    title: 'On-Ground Visit',
    desc: 'The agent conducts a meticulous site visit, capturing high-resolution photos and notes.',
  },
  {
    title: 'Quality Assurance',
    desc: 'Our central office reviews the data for accuracy and completeness.',
  },
];

const whoNeedsThis = [
  {
    title: 'Overseas Property Owners',
    desc: 'Verify your asset is visually undisturbed and properly maintained while you are abroad.',
  },
  {
    title: 'Diaspora Members',
    desc: 'Confirm family lands or inherited properties are undisturbed and accurately represented.',
  },
  {
    title: 'Real Estate Investors',
    desc: 'Perform due diligence and verify physical conditions before closing deals remotely.',
  },
  {
    title: 'Absentee Clients',
    desc: 'Verify if tenants or caretakers are upholding their agreements through random verifications.',
  },
];

function GoldIconBox({ className }: { className?: string }) {
  return (
    <div className="size-6 overflow-hidden shrink-0">
      <div className="size-full bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
    </div>
  );
}

export function ResidentialContent() {
  return (
    <section className="py-24 bg-[#000B03]">
      <div className="max-w-[1755px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12 lg:gap-20">
          <div className="w-full lg:w-[895px] flex flex-col gap-10">
            <div className="flex flex-col gap-10">
              <h2 className="text-white text-4xl sm:text-5xl font-medium leading-tight sm:leading-[63px]">
                What This Service Covers
              </h2>
              <p className="text-neutral-400 text-xl lg:text-2xl font-normal leading-7 lg:leading-8">
                When you are miles away, knowing the true condition of your property can be stressful. Our Residential Property Verification service sends a trained, professional agent directly to your Jamaican property.<br /><br />We act as your eyes and ears, conducting a thorough visual condition review of both the exterior and interior to verify that everything is exactly as it should be. We look for signs of unauthorized occupation, damage, maintenance issues, and general upkeep.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-white text-2xl lg:text-3xl font-medium leading-8 lg:leading-10">
                How It Works
              </h3>
              <div className="flex flex-col gap-12">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                  {processSteps.slice(0, 2).map((step, i) => (
                    <div key={i} className="w-full sm:w-96 h-56 bg-stone-900 rounded-sm overflow-hidden relative">
                      <div className="size-12 absolute left-[18px] top-[14px] bg-neutral-600 rounded-full flex items-center justify-center">
                        <GoldIconBox />
                      </div>
                      <div className="absolute left-[18px] top-[102px] flex flex-col gap-5 pr-4">
                        <h4 className="text-white text-xl lg:text-2xl font-normal leading-8">
                          {step.title}
                        </h4>
                        <p className="text-zinc-400 text-sm lg:text-base font-normal leading-6">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                  {processSteps.slice(2, 4).map((step, i) => (
                    <div key={i} className="w-full sm:w-96 h-56 bg-stone-900 rounded-sm overflow-hidden relative">
                      <div className="size-12 absolute left-[18px] top-[14px] bg-neutral-600 rounded-full flex items-center justify-center">
                        <GoldIconBox />
                      </div>
                      <div className="absolute left-[18px] top-[102px] flex flex-col gap-5 pr-4">
                        <h4 className="text-white text-xl lg:text-2xl font-normal leading-8">
                          {step.title}
                        </h4>
                        <p className="text-zinc-400 text-sm lg:text-base font-normal leading-6">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full sm:w-[879px] h-32 bg-stone-900 rounded-sm overflow-hidden relative">
                  <div className="size-12 absolute left-[17px] top-[29px] bg-neutral-600 rounded-full flex items-center justify-center">
                    <GoldIconBox />
                  </div>
                  <div className="absolute left-[85px] top-[29px] flex flex-col gap-5 pr-12">
                    <h4 className="text-white text-xl lg:text-2xl font-normal leading-8">
                      Final Report Delivery
                    </h4>
                    <p className="text-zinc-400 text-sm lg:text-base font-normal leading-6 max-w-[717px]">
                      You receive a comprehensive, secure digital report detailing our documented observations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[700px] bg-stone-900 rounded-sm overflow-hidden p-10 lg:p-12">
            <h3 className="text-white text-3xl lg:text-5xl font-medium leading-10 lg:leading-[63px] mb-10 lg:mb-16">
              Who Needs This?
            </h3>
            <div className="flex flex-col gap-10 lg:gap-16">
              {whoNeedsThis.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div className="size-9 relative">
                      <div className="size-7 left-[3px] top-[3px] absolute bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
                    </div>
                    <h4 className="text-white text-xl lg:text-3xl font-medium leading-8 lg:leading-10">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-neutral-400 text-lg lg:text-2xl font-normal leading-7 lg:leading-9 max-w-[551px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
