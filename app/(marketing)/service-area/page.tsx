import type { Metadata } from 'next';
import { ServiceAreaHeroSection } from '@/components/sections/servicearea/ServiceAreaHeroSection';
import { ServiceAreaMapSection } from '@/components/sections/servicearea/ServiceAreaMapSection';
import { ParishesListSection } from '@/components/sections/servicearea/ParishesListSection';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'We proudly serve all 14 parishes across Jamaica.',
};

export default function ServiceAreaPage() {
  return (
    <>
      <ServiceAreaHeroSection />
      <ServiceAreaMapSection />
      <ParishesListSection />
    </>
  );
}
