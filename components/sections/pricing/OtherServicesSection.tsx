const services = [
  {
    title: 'Owner Support Services',
    price: 'Starting at $499',
    features: [
      'Meeting attendance',
      'Vendor coordination',
      'Utility coordination',
      'Document submission',
      'Errands',
      'Local representation',
    ],
  },
  {
    title: 'Business Facility Verification',
    price: 'Starting at $899',
    features: [
      'Business site verification',
      'Staff presence observations',
      'Inventory observations',
      'Equipment verification',
      'Operational reporting',
    ],
  },
  {
    title: 'Construction & Project Verification',
    price: 'Starting at $899',
    features: [
      'Construction progress verification',
      'Milestone documentation',
      'Contractor activity observations',
      'Progress reporting',
    ],
  },
  {
    title: 'Vacation Rental / Airbnb Verification',
    price: 'Starting at $499',
    features: [
      'Guest-readiness verification',
      'Turnover verification',
      'Cleaning verification',
      'Restocking verification',
      'Readiness reporting',
    ],
  },
  {
    title: 'Family Wellness Services',
    price: 'Starting at $499',
    features: [
      'Wellness and safety verification visits',
      'Documented observations',
      'Family reporting',
      'No medical services provided',
    ],
  },
  {
    title: 'Eagle Eye Drone Services',
    price: 'Starting at $599',
    features: [
      'Aerial photography',
      'Aerial video',
      'Roof observations',
      'Land and boundary overview documentation',
    ],
  },
  {
    title: 'Storm Verification & Documentation',
    price: 'Starting at $999',
    features: [
      'Pre-storm verification',
      'Post-storm verification',
      'Visible damage documentation',
      'Insurance-supporting documentation',
    ],
  },
  {
    title: 'Material Delivery Verification',
    price: 'Starting at $499',
    features: [
      'Verification of delivered materials',
      'Fixtures',
      'Appliances',
      'Finishes before acceptance',
    ],
  },
  {
    title: 'Property Concierge Coordination',
    price: 'Starting at $499',
    features: [
      'Vendor scheduling',
      'Appointment coordination',
      'Errands',
      'Property-related support',
    ],
  },
  {
    title: 'Urgent Property Verification',
    price: 'Starting at $1,499',
    features: [
      'Priority dispatch',
      'Urgent property concerns',
      'Storm-related concerns',
      'Access issues',
      'Security concerns',
      'Time-sensitive verification requests',
    ],
  },
];

export function OtherServicesSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-10">
        <div className="flex flex-col items-center gap-16 w-full">
          <div className="flex flex-col items-center gap-5">
            <div className="text-center text-amber-200 text-xl font-medium uppercase leading-7 tracking-widest">
              ADDITIONAL SERVICES
            </div>
            <div className="flex flex-col items-center">
              <div className="text-center text-white text-5xl sm:text-6xl font-medium leading-[65.36px]">
                Other Services
              </div>
            </div>
            <div className="text-center text-neutral-400 text-xl font-normal leading-8">
              All pricing displayed in USD. Starting-at rates apply.
            </div>
          </div>

          <div className="w-full max-w-[1771px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="self-stretch p-10 bg-zinc-300/10 rounded-3xl outline outline-[1.24px] outline-offset-[-1.24px] outline-white/10 inline-flex flex-col justify-start items-start gap-6"
              >
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="text-white text-2xl font-medium leading-8">{service.title}</div>
                  </div>
                  <div className="w-[488.97px] h-10 relative">
                    <div className="text-amber-200 text-3xl font-semibold leading-10">{service.price}</div>
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                  {service.features.map((f) => (
                    <div key={f} className="self-stretch inline-flex justify-start items-start gap-3">
                      <div className="w-9 h-10 pt-1.5 inline-flex flex-col justify-start items-start overflow-hidden shrink-0">
                        <div className="self-stretch h-9 relative overflow-hidden">
                          <div className="size-8 left-[1.28px] top-[1.28px] absolute bg-white outline outline-[2.57px] outline-offset-[-1.28px] outline-white rounded-full" />
                          <div className="w-3.5 h-2.5 left-[10.91px] top-[12.52px] absolute outline outline-[2.57px] outline-offset-[-1.28px] outline-black" />
                          <div className="size-10 left-[-1.93px] top-[-1.93px] absolute bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-full" />
                        </div>
                      </div>
                      <div className="text-zinc-400 text-lg font-normal leading-6">{f}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
