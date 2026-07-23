import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { FounderSection } from '@/components/sections/home/FounderSection';
import { WhatWeDoSection } from '@/components/sections/home/WhatWeDoSection';
import { WhyNexusSection } from '@/components/sections/home/WhyNexusSection';
import { HowItWorksSection } from '@/components/sections/home/HowItWorksSection';
import { PricingPreviewSection } from '@/components/sections/home/PricingPreviewSection';
import { ServiceAreaSection } from '@/components/sections/home/ServiceAreaSection';
import { CtaBannerSection } from '@/components/sections/home/CtaBannerSection';
import { ContactFormSection } from '@/components/sections/home/ContactFormSection';

export const metadata: Metadata = {
  title: "Nexus Property & Business Services — Jamaica's #1 Property Verification",
  description:
    'Independent property verification, documentation, and business representation across all 14 parishes of Jamaica. You can\'t be everywhere. We are.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FounderSection />
      <WhatWeDoSection />
      <WhyNexusSection />
      <HowItWorksSection />
      <PricingPreviewSection />
      <ServiceAreaSection />
      <CtaBannerSection />
      <ContactFormSection />
    </>
  );
}
