'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionBadge } from './section-badge';
import { TrustIndicators } from './trust-indicators';

interface HeroSectionProps {
  isVisible: boolean;
}

export function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <section className="relative z-10 container mx-auto px-4 py-14 md:py-40 text-center">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-[#388087] via-[#6FB3B8] to-[#388087] bg-clip-text text-transparent animate-gradient">
              Book Your Doctor Appointment
            </span>
            <br />
            <span className="text-[#388087] mt-2 block">Effortlessly</span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Find the right doctor, book appointments instantly, and manage your
            healthcare journey all in one seamless platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link href="/signup">
              <Button size="lg" variant="default" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline">
                View Dashboard
              </Button>
            </Link>
          </div>

          <TrustIndicators />
        </div>
      </div>
    </section>
  );
}
