import Link from 'next/link';
import Image from 'next/image';

const subServices = [
  {
    title: 'Residential Property Verification',
    desc: 'Comprehensive exterior and interior checks to ensure your residential investment is secure and maintained.',
    href: '/services/residential-property-verification',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    title: 'Vacant Land Verification',
    desc: 'Our Vacant Land Verification service provides professional, on-ground representation to handle tasks you cannot execute from abroad.',
    href: '/services/vacant-land-verification',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  },
  {
    title: 'Boundary Verification',
    desc: 'Our Boundary Verification service provides professional, on-ground representation to handle tasks you cannot execute from abroad.',
    href: '/services/boundary-verification',
    img: 'https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=800&q=80',
  },
  {
    title: 'Owner Representation',
    desc: 'Our Owner Representation service provides professional, on-ground representation to handle tasks you cannot execute from abroad.',
    href: '/services/owner-representation',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  },
];

export function PropertyVerificationServices() {
  return (
    <section className="bg-[#000B03] pb-24 lg:pb-32">
      <div className="max-w-[1755px] mx-auto px-6 lg:px-12">
        <div className="mb-10 lg:mb-12">
          <h2 className="text-white text-4xl sm:text-5xl font-normal leading-tight sm:leading-[63px] mb-2">
            Available Services
          </h2>
          <p className="text-neutral-400 text-xl sm:text-2xl font-normal leading-8">
            Select a specific service below for detailed information.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subServices.map((service, index) => (
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
