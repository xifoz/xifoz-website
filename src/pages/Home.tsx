import { HeroSection } from '@/sections/HeroSection';
import { CoverageGrid } from '@/sections/CoverageGrid';
import { WhyChooseSection } from '@/sections/WhyChooseSection';
import { SystemicResilience } from '@/sections/SystemicResilience';
import { MonitoredInfrastructure } from '@/sections/MonitoredInfrastructure';
import { FrameworksSection } from '@/sections/FrameworksSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { FAQSection } from '@/sections/FAQSection';
import { SecureVault } from '@/sections/SecureVault';
import { CTASection } from '@/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoverageGrid />
      <WhyChooseSection />
      <SystemicResilience />
      <MonitoredInfrastructure />
      <FrameworksSection />
      <ProcessSection />
      <TestimonialsSection />
      <SecureVault />
      <FAQSection />
      <CTASection />
    </>
  );
}
