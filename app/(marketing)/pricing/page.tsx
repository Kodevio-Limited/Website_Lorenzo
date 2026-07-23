import type { Metadata } from 'next';
import { PricingHeroSection } from '@/components/sections/pricing/PricingHeroSection';
import { PropertyVerificationPlansSection } from '@/components/sections/pricing/PropertyVerificationPlansSection';
import { AdvisoryPlansSection } from '@/components/sections/pricing/AdvisoryPlansSection';
import { OtherServicesSection } from '@/components/sections/pricing/OtherServicesSection';

export const metadata: Metadata = {
  title: 'Pricing & Services',
  description: 'Clear overview of all available property verification, construction monitoring, and support services from Nexus.',
};

export default function PricingPage() {
  return (
    <>
      <PricingHeroSection />
      <PropertyVerificationPlansSection />
      <AdvisoryPlansSection />
      <OtherServicesSection />
    </>
  );
}
