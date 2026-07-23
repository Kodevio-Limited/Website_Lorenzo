import type { Metadata } from 'next';
import { LegalHeroSection } from '@/components/sections/legal/LegalHeroSection';
import { LegalContentSection } from '@/components/sections/legal/LegalContentSection';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions governing the use of Nexus Property & Business Services.',
};

const sections = [
  {
    title: '1. Introduction',
    content:
      'These Terms and Conditions govern your use of the Nexus Property & Business Services website, client portal, and all on-ground verification services provided by Nexus Property & Business Services, a Campbell Legacy Holdings, LLC company.\n\nBy accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree with any part of these terms, you should not use our website or services.',
  },
  {
    title: '2. Service Description',
    content:
      'Nexus Property & Business Services provides independent property verification, construction monitoring, business verification, and related visual inspection services across all 14 parishes of Jamaica.\n\nOur services are limited to visual observation and documentation. We do not provide structural engineering certifications, legal property valuations, or title searches unless expressly stated in a separate written agreement.',
  },
  {
    title: '3. Client Responsibilities',
    content:
      'You agree to provide accurate and complete information required for the execution of our services, including property coordinates, access instructions, and contact details.\n\nYou are responsible for ensuring that you have legal authority to request verification services for the property in question. Nexus reserves the right to refuse service if ownership or authorization cannot be adequately verified.',
  },
  {
    title: '4. Service Limitations',
    content:
      'Our visual verification reports are based solely on observable conditions at the time of inspection. We do not guarantee the discovery of latent defects, hidden damage, or issues not visible during a standard visual inspection.\n\nService timelines are estimates and may be affected by weather conditions, access limitations, or field-agent availability. Nexus will communicate any significant delays promptly.',
  },
  {
    title: '5. Payment Terms',
    content:
      'Fees for services are quoted prior to engagement and are due according to the agreed payment schedule. Payments are processed securely through encrypted third-party gateways.\n\nCancellations made less than 24 hours before the scheduled inspection may be subject to a cancellation fee. Refund eligibility is determined on a case-by-case basis.',
  },
  {
    title: '6. Intellectual Property',
    content:
      'All reports, photographs, video footage, and documentation produced by Nexus Property & Business Services remain the intellectual property of Nexus until full payment has been received.\n\nUpon payment, clients receive a personal, non-transferable license to use the delivered reports for their internal purposes. Redistribution or commercial use of our reports without written consent is prohibited.',
  },
  {
    title: '7. Limitation of Liability',
    content:
      'Nexus Property & Business Services shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or reliance on our reports.\n\nOur total liability for any claim arising from our services is limited to the total fee paid for the specific service giving rise to the claim.',
  },
  {
    title: '8. Confidentiality',
    content:
      'All client information, property details, and report contents are treated as strictly confidential. Nexus will not disclose client information to third parties except as required by law or with your explicit written consent.\n\nField agents and staff are bound by confidentiality agreements and data handling protocols.',
  },
  {
    title: '9. Governing Law',
    content:
      'These Terms and Conditions shall be governed by and construed in accordance with the laws of Jamaica. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Jamaica.\n\nIf any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.',
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      <LegalHeroSection
        title="Terms & Conditions"
        description="These Terms and Conditions govern your use of our website and on-ground verification services. Please read them carefully before engaging our services."
        date="July 13, 2026"
      />
      <LegalContentSection sections={sections} />
    </>
  );
}
