import type { Metadata } from 'next';
import { ServicesHeroSection } from '@/components/sections/services/ServicesHeroSection';
import { ServicesGridSection } from '@/components/sections/services/ServicesGridSection';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional on-ground verification services across Jamaica.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection />
    </>
  );
}
