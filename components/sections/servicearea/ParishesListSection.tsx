import React from "react";

const parishes = [
  { name: "Kingston", county: "SURREY COUNTY" },
  { name: "St. Andrew", county: "SURREY COUNTY" },
  { name: "St. Thomas", county: "SURREY COUNTY" },
  { name: "Portland", county: "SURREY COUNTY" },
  { name: "St. Mary", county: "Middlesex County" },
  { name: "St. Ann", county: "Middlesex County" },
  { name: "St. Catherine", county: "Middlesex County" },
  { name: "Clarendon", county: "Middlesex County" },
  { name: "Manchester", county: "Middlesex County" },
  { name: "St. Elizabeth", county: "Cornwall County" },
  { name: "Westmoreland", county: "Cornwall County" },
  { name: "St. James", county: "Cornwall County" },
  { name: "Trelawny", county: "Cornwall County" },
  { name: "Hanover", county: "Cornwall County" },
];

function ParishCard({ name, county }: { name: string; county: string }) {
  return (
    <div className="w-80 h-28 bg-stone-900 rounded-sm overflow-hidden relative">
      <div className="absolute left-4 top-4 flex items-center gap-8">
        <div className="w-16 h-20 bg-stone-500 rounded-[3px] relative overflow-hidden">
          <div className="size-7 left-[19px] top-[20px] absolute overflow-hidden">
            <div className="w-6 h-7 left-[3.75px] top-[1.25px] absolute bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700" />
          </div>
        </div>
        <div className="w-48 flex flex-col items-start gap-3">
          <div className="self-stretch text-white text-3xl font-medium leading-10">{name}</div>
          <div className="self-stretch text-neutral-400 text-base font-medium leading-6">{county}</div>
        </div>
      </div>
    </div>
  );
}

export function ParishesListSection() {
  const row1 = parishes.slice(0, 5);
  const row2 = parishes.slice(5, 10);
  const row3 = parishes.slice(10, 14);

  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full max-w-[1755px] mx-auto flex flex-col items-center gap-24">
          <div className="w-full max-w-[1378px] flex flex-col items-center gap-5">
            <div className="text-center text-white text-5xl font-normal leading-[63px]">All 14 Parishes Covered</div>
            <div className="w-full max-w-[992px] text-center text-neutral-400 text-2xl font-normal leading-8">
              We operate comprehensively across all three counties of Jamaica, ensuring localized reporting wherever your property is located. Service is subject to field-agent availability and service-specific travel requirements.
            </div>
          </div>

          <div className="self-stretch flex flex-col items-start gap-11">
            <div className="self-stretch flex items-center gap-11">
              {row1.map((p) => (
                <ParishCard key={p.name} name={p.name} county={p.county} />
              ))}
            </div>
            <div className="self-stretch flex items-center gap-11">
              {row2.map((p) => (
                <ParishCard key={p.name} name={p.name} county={p.county} />
              ))}
            </div>
            <div className="self-stretch flex items-center gap-11">
              {row3.map((p) => (
                <ParishCard key={p.name} name={p.name} county={p.county} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
