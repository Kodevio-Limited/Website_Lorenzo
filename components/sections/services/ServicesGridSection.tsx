import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Property Verification Services',
    desc: 'Document property condition, status, and perimeter markers with on-site confirmation.',
    href: '/services/property-verification',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    title: 'Construction & Project Verification',
    desc: 'Track progress, monitor contractors, and validate material delivery.',
    href: '/services/construction-verification',
    img: 'https://images.unsplash.com/photo-1541888087588-8260655514ee?w=800&q=80',
  },
  {
    title: 'Family Welfare Verification',
    desc: 'Check on the wellbeing of your loved ones through documented in-person visits.',
    href: '/services/family-welfare',
    img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
  },
  {
    title: 'Business Verification Services',
    desc: 'Confirm operations, vendors, and business locations with real-world checks.',
    href: '/services/business-verification',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  },
  {
    title: 'Eagle Eye Drone Verification™',
    desc: 'Get high resolution drone documented observation and footage.',
    href: '/services/drone-verification',
    img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
  },
  {
    title: 'Hurricane & Storm Services',
    desc: 'Document property condition before and after severe weather events.',
    href: '/services/hurricane-storm',
    img: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80',
  },
  {
    title: 'Vacation Rental & Airbnb Support',
    desc: 'Verify guest readiness and visually review property condition.',
    href: '/services/vacation-rental',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
  },
  {
    title: 'Building & Renovation Advisory',
    desc: 'Obtain local supplier information and on ground documentation to aid your project decisions.',
    href: '/services/renovation-advisory',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
];

export function ServicesGridSection() {
  return (
    <section className="bg-[#000B03] pb-24 lg:pb-32">
      <div className="max-w-[1755px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-stone-900 rounded-3xl overflow-hidden flex flex-col group min-h-[502px]"
            >
              <div className="p-5 pb-0">
                <div className="w-full h-72 relative rounded-lg overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 px-6 pb-6 pt-4 flex flex-col gap-3">
                <h3 className="text-white text-2xl font-medium leading-8">
                  {service.title}
                </h3>
                <p className="flex-1 text-neutral-400 text-lg font-normal leading-7">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2.5 pt-1.5">
                  <span className="text-amber-200 text-base font-medium uppercase tracking-wider leading-6">
                    View Services
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
