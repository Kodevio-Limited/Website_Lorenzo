import type { Metadata } from 'next';
import { PropertyVerificationHero } from '@/components/sections/propertyverification/PropertyVerificationHero';
import { PropertyVerificationServices } from '@/components/sections/propertyverification/PropertyVerificationServices';
import { PropertyVerificationScope } from '@/components/sections/propertyverification/PropertyVerificationScope';
import { CtaSection } from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'Property Verification Services',
  description: 'Document property condition, status, and perimeter markers with on-site confirmation.',
};

export default function PropertyVerificationPage() {
  return (
    <>
      <PropertyVerificationHero />
      <PropertyVerificationServices />
      <PropertyVerificationScope />
      <CtaSection 
        title="Ready to Verify Your Property?"
        description="Get independent, on-site documentation and secure your peace of mind from anywhere in the world."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
