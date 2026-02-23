'use client';

import { useEffect, useState } from 'react';
import {
  AnimatedBackground,
  Navbar,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  WhyChooseSection,
  CTASection,
  Footer,
} from '@/components/home';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#BADFE7] via-[#F6F6F2] to-[#C2EDCE] overflow-hidden">
      <AnimatedBackground />

      <Navbar />

      <HeroSection isVisible={isVisible} />

      <FeaturesSection />

      <HowItWorksSection />

      <WhyChooseSection />

      <CTASection />

      <Footer />
    </div>
  );
}
