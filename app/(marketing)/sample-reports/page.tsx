import type { Metadata } from 'next';
import { SampleReportHero } from '@/components/sections/samplereport/SampleReportHero';
import { InteractiveVerificationSection } from '@/components/sections/samplereport/InteractiveVerificationSection';
import { DocumentBankSection } from '@/components/sections/samplereport/DocumentBankSection';
import { WhatIsIncludedSection } from '@/components/sections/samplereport/WhatIsIncludedSection';

export const metadata: Metadata = {
  title: 'Sample Reports',
  description: 'Explore professionally prepared property verification reports and insights by Nexus.',
};

export default function SampleReportsPage() {
  return (
    <>
      <SampleReportHero />
      <InteractiveVerificationSection />
      <DocumentBankSection />
      <WhatIsIncludedSection />
    </>
  );
}
