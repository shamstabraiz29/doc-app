'use client';

import {
  Heart,
  Shield,
  Zap,
  FileCheck,
  Clock,
  Star,
  Calendar,
  Bell,
  Smartphone,
} from 'lucide-react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { SectionBadge } from './section-badge';
import { SectionHeader } from './section-header';
import { WhyChooseItem } from './why-choose-item';

const ITEMS = [
  {
    icon: Shield,
    title: 'Find doctors you trust',
    description: 'Search by specialty, see reviews, book the right doctor.',
    iconClassName: 'text-[#388087]',
    delay: 0,
  },
  {
    icon: Zap,
    title: 'Book in minutes',
    description: 'Real-time slots, instant confirmation—no waiting.',
    iconClassName: 'text-[#6FB3B8]',
    delay: 80,
  },
  {
    icon: FileCheck,
    title: 'Private & secure',
    description: 'Your data encrypted and protected.',
    iconClassName: 'text-[#388087]',
    delay: 160,
  },
  {
    icon: Clock,
    title: 'All in one place',
    description: 'View visits, reminders, reschedule from your dashboard.',
    iconClassName: 'text-[#6FB3B8]',
    delay: 240,
  },
  {
    icon: Star,
    title: 'Real patient reviews',
    description: 'See what others say about doctors before you book.',
    iconClassName: 'text-[#388087]',
    delay: 320,
  },
  {
    icon: Calendar,
    title: 'Reschedule anytime',
    description: 'Change or cancel your appointment easily, free of hassle.',
    iconClassName: 'text-[#6FB3B8]',
    delay: 400,
  },
  {
    icon: Bell,
    title: 'Smart reminders',
    description:
      'Get notified before your visit so you never miss an appointment.',
    iconClassName: 'text-[#388087]',
    delay: 480,
  },
  {
    icon: Smartphone,
    title: 'Book from anywhere',
    description:
      'Use your phone or computer—same experience, wherever you are.',
    iconClassName: 'text-[#6FB3B8]',
    delay: 560,
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative z-10 container mx-auto px-4 py-14 md:py-24">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="fadeUp" className="mb-12">
          <SectionHeader
            badge={
              <SectionBadge
                icon={<Heart className="h-4 w-4 text-[#388087]" />}
                label="Why Choose DocApp"
              />
            }
            title={
              <span>
                Simple & built for you
              </span>
            }
            description="Healthcare that puts you first. Book with confidence."
            descriptionMaxWidth="2xl"
          />
        </AnimateOnScroll>

        <div className="max-w-5xl mx-auto mt-10 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto w-full">
            {ITEMS.map((item) => (
              <WhyChooseItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
