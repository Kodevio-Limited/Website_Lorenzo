import type { Metadata } from 'next';
import { ContactHeroSection } from '@/components/sections/contact/ContactHeroSection';
import { ContactPageSection } from '@/components/sections/contact/ContactPageSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach out to Nexus Property & Business Services for inquiries, consultations, or direct service requests in Jamaica.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactPageSection />
    </>
  );
}
