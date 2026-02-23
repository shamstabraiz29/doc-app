'use client';

import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientFrom?: string;
  gradientTo?: string;
  accentGradient?: string;
  iconClassName?: string;
  delay?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  gradientFrom = 'from-[#388087]',
  gradientTo = 'to-[#6FB3B8]',
  accentGradient = 'from-[#388087]/10',
  iconClassName = 'text-white',
  delay = 0,
}: FeatureCardProps) {
  return (
    <AnimateOnScroll variant="scale" delay={delay}>
      <div className="group relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${accentGradient} to-transparent rounded-bl-full`}
        />
        <div className="relative">
          <div
            className={`w-20 h-20 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
          >
            <Icon className={`h-10 w-10 ${iconClassName}`} />
          </div>
          <h3 className="text-2xl font-bold text-[#388087] mb-4">{title}</h3>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            {description}
          </p>
          <div className="flex items-center text-[#388087] font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Learn more <ArrowRight className="ml-2 h-5 w-5" />
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
