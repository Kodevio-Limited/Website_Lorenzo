import Link from 'next/link';

export function InteractiveVerificationSection() {
  return (
    <section className="w-full bg-[#000B03]">
      <div className="section-inner py-16 lg:py-20">
        <div className="w-full max-w-[1755px] mx-auto mt-5">
          <div className="flex justify-between items-center mb-10">
            <div className="w-[470px]">
              <div className="text-white text-5xl font-normal leading-[63px]">Interactive Verification Desk</div>
            </div>
            <div className="w-[555px] text-neutral-400 text-2xl font-normal leading-8">
              Review live sample layouts, zoom to read specific clauses, and export actual simulated mock documents.
            </div>
          </div>

          <div className="flex justify-between items-start gap-8">
            {/* PDF Viewer */}
            <div className="w-[1052px] bg-white rounded-xl overflow-hidden shadow-lg shrink-0">
              <div className="h-16 bg-slate-800 rounded-t-xl flex items-center px-6 justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="size-3.5 rounded-full bg-red-500" />
                    <div className="size-3.5 rounded-full bg-amber-300" />
                    <div className="size-3.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-white text-xs font-medium ml-4">NEXUS PDF-VIEWER V2.4</span>
                </div>
                <div className="flex items-center gap-4 bg-black/40 rounded-md px-3 py-1">
                  <button className="text-white/70 hover:text-white text-xs">&lt;</button>
                  <span className="text-white text-xs font-medium">PAGE 1/3</span>
                  <button className="text-white/70 hover:text-white text-xs">&gt;</button>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-white text-xs font-medium">100%</span>
                  <div className="flex gap-2">
                    <div className="size-6 bg-white/20 rounded" />
                    <div className="size-6 bg-white/20 rounded" />
                  </div>
                </div>
              </div>

              <div className="bg-white h-[1134px] relative overflow-hidden p-12">
                <div className="text-red-600/10 text-8xl font-black -rotate-[30deg] tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">SAMPLE</div>
                <div className="max-w-3xl mx-auto pt-8">
                  <div className="flex justify-between items-center mb-12 pb-6 border-b-2 border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-200/30 rounded-full" />
                      <div>
                        <div className="text-amber-900 text-xl font-bold tracking-tight">NEXUS</div>
                        <div className="text-gray-400 text-xs tracking-widest uppercase">Property Intelligence</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-800 text-lg font-bold">PROPERTY VERIFICATION REPORT</div>
                      <div className="text-gray-400 text-xs">Ref: NX-KG-2026-0710</div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <div className="text-gray-900 text-3xl font-bold mb-3">Property Verification Report</div>
                    <div className="text-gray-600 text-base leading-relaxed mb-2">
                      4 Bed Detached &bull; Kingston, Surrey &bull; JULY 10, 2026
                    </div>
                    <div className="w-24 h-1 bg-amber-500 rounded mt-4" />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-gray-800 text-lg font-semibold mb-3">1. Structural Overview</div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-11/12" />
                        <div className="h-4 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-5/6" />
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-800 text-lg font-semibold mb-3">2. Exterior Condition</div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-10/12" />
                        <div className="h-4 bg-gray-200 rounded w-4/5" />
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-800 text-lg font-semibold mb-3">3. Interior Assessment</div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-11/12" />
                        <div className="h-4 bg-gray-200 rounded w-2/3" />
                        <div className="h-4 bg-gray-200 rounded w-9/12" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-green-700">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                        <span className="text-xs font-semibold">STRUCTURAL INTEGRITY VERIFIED</span>
                      </div>
                      <div className="text-gray-400 text-xs">Digitally signed by RICs-accredited engineer</div>
                    </div>
                    <div className="flex gap-6 text-gray-400 text-xs">
                      <span>Page 1 of 3</span>
                      <span>NX-KG-2026-0710</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-8 bg-slate-800 flex justify-between items-center px-6">
                <span className="text-gray-200 text-xs font-medium">Secure SSL Previewing &bull; Decoupled sandbox environment</span>
                <span className="text-green-600 text-xs font-medium">READY FOR EXPORT</span>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-[659px] flex flex-col gap-11">
              <div className="bg-stone-900 rounded-sm overflow-hidden">
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col items-start gap-9">
                    <div className="w-full max-w-[495px] flex flex-col items-start gap-5">
                      <div className="text-amber-200 text-lg font-medium leading-7">RESIDENTIAL PROPERTY</div>
                      <div className="text-white text-3xl font-medium leading-10">Property Verification Report – Kingston</div>
                    </div>
                    <div className="text-zinc-400 text-xl font-normal leading-7">
                      A comprehensive structural, mechanical, cosmetic, and insulation audit designed to safeguard buyers acquiring older brick properties or estates throughout historical Kingston-upon-Thames.
                    </div>
                  </div>
                </div>

                <div className="mx-8 lg:mx-10 mb-8 bg-black rounded-xs p-8">
                  <div className="flex justify-start items-center gap-28">
                    <div className="flex flex-col gap-2 whitespace-nowrap">
                      <div className="text-zinc-400 text-xs font-medium leading-5">LOCATION</div>
                      <div className="text-white text-2xl font-normal leading-8">Kingston, Surrey</div>
                    </div>
                    <div className="flex flex-col gap-2 whitespace-nowrap">
                      <div className="text-zinc-400 text-xs font-medium leading-5">DATE OF AUDIT</div>
                      <div className="text-white text-2xl font-normal leading-8">JULY 10, 2026</div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-28 mt-8">
                    <div className="flex flex-col gap-2 whitespace-nowrap">
                      <div className="text-zinc-400 text-xs font-medium leading-5">PROPERTY TYPE</div>
                      <div className="text-white text-2xl font-normal leading-8">4 Bed Detached</div>
                    </div>
                    <div className="flex flex-col gap-2 whitespace-nowrap">
                      <div className="text-zinc-400 text-xs font-medium leading-5">STATUS CODE</div>
                      <div className="text-green-400 text-2xl font-normal leading-8">Verified</div>
                    </div>
                  </div>
                </div>

                <div className="px-8 lg:px-10 pb-8 lg:pb-10 flex flex-col gap-7">
                  <Link
                    href="/contact"
                    className="w-full py-5 bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm flex items-center justify-center text-stone-900 text-2xl font-medium leading-8 hover:opacity-90 transition-all"
                  >
                    DOWNLOAD FULL SAMPLE PDF
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full py-5 bg-zinc-100/30 rounded-sm outline outline-1 outline-offset-[-1px] outline-neutral-400 flex items-center justify-center text-white text-2xl font-medium leading-8 hover:bg-zinc-100/40 transition-all"
                  >
                    VIEW FULL SCREEN MODE
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 rounded-sm p-8 lg:p-10">
                <div className="text-black text-3xl font-medium leading-10 mb-6">Encrypted Sign-off</div>
                <div className="text-stone-700 text-2xl font-medium leading-8">
                  All formal reports are signed off dynamically by RICs-accredited structural engineers and certified business auditors.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
