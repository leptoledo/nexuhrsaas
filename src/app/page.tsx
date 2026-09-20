import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { SocialProof } from '@/components/landing/SocialProof';
import { ModulesTabs } from '@/components/landing/ModulesTabs';
import { ProblemSolution } from '@/components/landing/ProblemSolution';
import { RoiCalculator } from '@/components/landing/RoiCalculator';
import { Testimonials } from '@/components/landing/Testimonials';
import { PricingTable } from '@/components/landing/PricingTable';
import { FaqAccordion } from '@/components/landing/FaqAccordion';
import { CtaBanner } from '@/components/landing/CtaBanner';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SocialProof />
        <ModulesTabs />
        <ProblemSolution />
        <RoiCalculator />
        <Testimonials />
        <PricingTable />
        <FaqAccordion />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
