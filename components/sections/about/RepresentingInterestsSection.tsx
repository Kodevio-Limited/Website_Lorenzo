export function RepresentingInterestsSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="relative w-full min-h-[893px]">
        <img
          className="w-full h-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 section-inner py-20 flex items-center justify-center min-h-[893px]">
          <div className="max-w-[937px] flex flex-col items-center gap-8">
            <div className="text-center text-white text-5xl font-normal leading-[70px]">
              REPRESENTING YOUR INTERESTS
            </div>
            <div className="text-center text-gray-200 text-3xl font-normal leading-10">
              At Nexus, we are not just taking pictures. We are providing peace of mind. We help clients confirm what is happening on the ground. We document conditions. We verify progress. We communicate clearly. We protect the client from guesswork, confusion, and uncertainty. Whether it is a property, construction project, business location, material delivery, or other situation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
