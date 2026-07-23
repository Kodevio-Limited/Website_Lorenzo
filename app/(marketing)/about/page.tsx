import type { Metadata } from 'next';
import { FounderSection } from '@/components/sections/home/FounderSection';
import { AboutStorySection } from '@/components/sections/about/AboutStorySection';
import { RepresentingInterestsSection } from '@/components/sections/about/RepresentingInterestsSection';
import { CommitmentSection } from '@/components/sections/about/CommitmentSection';
import { NexusMethodSection } from '@/components/sections/about/NexusMethodSection';
import { MissionAndValuesSection } from '@/components/sections/about/MissionAndValuesSection';
import { AboutMapSection } from '@/components/sections/about/AboutMapSection';
import { AboutCtaSection } from '@/components/sections/about/AboutCtaSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Local eyes. Trusted hands. Total peace of mind. Learn about Lorenzo Campbell and Nexus Property & Business Services.",
};

export default function AboutPage() {
  return (
    <>
      <FounderSection />
      <AboutStorySection />
      <RepresentingInterestsSection />
      <CommitmentSection />
      <NexusMethodSection />
      <MissionAndValuesSection />
      <AboutMapSection />
      <AboutCtaSection />
    </>
  );
}
