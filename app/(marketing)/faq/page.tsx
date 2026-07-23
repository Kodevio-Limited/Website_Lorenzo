import type { Metadata } from 'next';
import { FaqHeroSection } from '@/components/sections/faq/FaqHeroSection';
import { FaqAccordionSection } from '@/components/sections/faq/FaqAccordionSection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Everything you need to know about Nexus Property & Business Services.',
};

export default function FaqPage() {
  return (
    <>
      <FaqHeroSection />
      <FaqAccordionSection />
    </>
  );
}
