import type { Metadata } from 'next';
import { ResidentialHero } from '@/components/sections/residentialproperty/ResidentialHero';
import { ResidentialContent } from '@/components/sections/residentialproperty/ResidentialContent';
import { ResidentialScope } from '@/components/sections/residentialproperty/ResidentialScope';
import { CtaSection } from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'Residential Property Verification',
  description: 'Detailed visual verifications, high-resolution photos & video reports, and documentation you can trust.',
};

export default function ResidentialPropertyVerificationPage() {
  return (
    <>
      <ResidentialHero />
      <ResidentialContent />
      <ResidentialScope />
      <CtaSection 
        title="Ready to Verify Your Property?"
        description="Get independent, on-site documentation and secure your peace of mind from anywhere in the world."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
