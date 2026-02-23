'use client';

import { Search, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { SectionBadge } from './section-badge';
import { SectionHeader } from './section-header';
import { TimelineStep } from './timeline-step';

const STEPS = [
  {
    stepNumber: 1,
    icon: Search,
    title: 'Find a Doctor',
    description:
      'Search and browse through our network of qualified healthcare professionals.',
    variant: 'slideRight' as const,
    delay: 0,
    gradientFrom: 'from-[#388087]',
    gradientTo: 'to-[#6FB3B8]',
    numberClassName: 'text-white',
  },
  {
    stepNumber: 2,
    icon: Calendar,
    title: 'Book Appointment',
    description:
      'Select your preferred date and time slot from available appointments.',
    variant: 'slideLeft' as const,
    delay: 100,
    gradientFrom: 'from-[#6FB3B8]',
    gradientTo: 'to-[#BADFE7]',
    numberClassName: 'text-white',
    contentOnRight: true,
  },
  {
    stepNumber: 3,
    icon: CheckCircle,
    title: 'Confirm & Visit',
    description:
      'Receive instant confirmation and reminders for your scheduled appointment.',
    variant: 'slideRight' as const,
    delay: 200,
    gradientFrom: 'from-[#BADFE7]',
    gradientTo: 'to-[#C2EDCE]',
    numberClassName: 'text-[#388087]',
  },
];

export function HowItWorksSection() {
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const [timelineLineVisible, setTimelineLineVisible] = useState(false);

  useEffect(() => {
    const el = timelineLineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimelineLineVisible(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 container mx-auto px-4 py-14 md:py-24">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="fadeUp" className="mb-12">
          <SectionHeader
            badge={
              <SectionBadge
                icon={<Sparkles className="h-4 w-4 text-[#388087]" />}
                label="Simple Process"
              />
            }
            title={
              <span className="bg-gradient-to-r from-[#388087] to-[#6FB3B8] bg-clip-text text-transparent">
                How It Works
              </span>
            }
            description="Book your appointment in just a few simple steps"
            descriptionMaxWidth="2xl"
          />
        </AnimateOnScroll>

        <div className="relative" ref={timelineLineRef}>
          <div className="absolute left-1/2 top-[17%] bottom-[17%] -translate-x-1/2 hidden md:block w-4">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden origin-top transition-transform duration-1000 ease-out"
              style={{
                transform: timelineLineVisible ? 'scaleY(1)' : 'scaleY(0)',
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-full border-l-2 border-dashed border-[#388087]/60" />
            </div>
            <div
              className="absolute left-1/2 top-[18%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#6FB3B8] ring-4 ring-white shadow hidden md:block z-[5] transition-opacity duration-500 delay-300"
              style={{ opacity: timelineLineVisible ? 1 : 0 }}
            />
            <div
              className="absolute left-1/2 top-[50%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#6FB3B8] ring-4 ring-white shadow hidden md:block z-[5] transition-opacity duration-500 delay-600"
              style={{ opacity: timelineLineVisible ? 1 : 0 }}
            />
            <div
              className="absolute left-1/2 bottom-[18%] top-auto -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#6FB3B8] ring-4 ring-white shadow hidden md:block z-[5] transition-opacity duration-500 delay-900"
              style={{ opacity: timelineLineVisible ? 1 : 0 }}
            />
          </div>

          <div className="space-y-0">
            {STEPS.map((step) => (
              <TimelineStep key={step.stepNumber} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
