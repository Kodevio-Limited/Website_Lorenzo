export function AboutMapSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-10">
        <div className="max-w-[1762px] mx-auto flex justify-start items-center gap-32">
          <div className="w-[587px] flex flex-col justify-start items-start gap-10">
            <div className="w-[550px] text-white text-5xl font-normal leading-[63px]">
              SERVING ALL 14 PARISHES OF JAMAICA
            </div>
            <div className="text-neutral-400 text-2xl font-normal leading-8">
              Nexus proudly serves clients with interests across Jamaica. From Kingston to Montego Bay, St. Ann to Portland, Westmoreland to St. Thomas, our goal is to provide reliable eyes on the ground when you cannot be there.
            </div>
          </div>
          <div className="w-[1074px] h-96 relative overflow-hidden bg-stone-900 rounded-sm flex items-center justify-center">
            <img
              src="/assets/images/map.png"
              alt="Map of Jamaica - All 14 Parishes"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
