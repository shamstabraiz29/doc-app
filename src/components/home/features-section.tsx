'use client';

import { Calendar, Users, Clock } from 'lucide-react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { SectionBadge } from './section-badge';
import { SectionHeader } from './section-header';
import { FeatureCard } from './feature-card';
import { Sparkles } from 'lucide-react';

const FEATURES = [
  {
    icon: Calendar,
    title: 'Easy Booking',
    description:
      'Book appointments with your preferred doctors in just a few clicks. Real-time availability and instant confirmations.',
    gradientFrom: 'from-[#388087]',
    gradientTo: 'to-[#6FB3B8]',
    accentGradient: 'from-[#388087]/10',
    delay: 0,
  },
  {
    icon: Users,
    title: 'Expert Doctors',
    description:
      'Access a wide network of qualified healthcare professionals. Verified credentials and patient reviews.',
    gradientFrom: 'from-[#6FB3B8]',
    gradientTo: 'to-[#BADFE7]',
    accentGradient: 'from-[#6FB3B8]/10',
    delay: 100,
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Book appointments anytime, anywhere. Our platform is always available to serve your healthcare needs.',
    gradientFrom: 'from-[#BADFE7]',
    gradientTo: 'to-[#C2EDCE]',
    accentGradient: 'from-[#BADFE7]/10',
    iconClassName: 'text-[#388087]',
    delay: 200,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative z-10 container mx-auto px-4 py-14 md:py-24">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <SectionHeader
            badge={
              <SectionBadge
                icon={<Sparkles className="h-4 w-4 text-[#388087]" />}
                label="Powerful Features"
              />
            }
            title={
              <span className="bg-gradient-to-r from-[#388087] to-[#6FB3B8] bg-clip-text text-transparent">
                Everything You Need
              </span>
            }
            description="Experience healthcare management like never before with our comprehensive suite of features designed for your convenience"
          />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
