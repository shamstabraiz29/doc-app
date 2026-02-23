'use client';

import type { LucideIcon } from 'lucide-react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

interface TimelineStepProps {
  stepNumber: number;
  icon: LucideIcon;
  title: string;
  description: string;
  variant: 'slideRight' | 'slideLeft';
  delay: number;
  gradientFrom: string;
  gradientTo: string;
  numberClassName?: string;
  contentOnRight?: boolean;
}

export function TimelineStep({
  stepNumber,
  icon: Icon,
  title,
  description,
  variant,
  delay,
  gradientFrom,
  gradientTo,
  numberClassName = 'text-white',
  contentOnRight = false,
}: TimelineStepProps) {
  const desktopContent = (
    <>
      <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#388087] uppercase tracking-wider mb-3">
        <Icon className="h-4 w-4" />
        Step {stepNumber}
      </div>
      <h3 className="text-2xl font-bold text-[#388087] mb-3">{title}</h3>
      <p
        className={`text-base text-gray-600 leading-relaxed max-w-sm ${contentOnRight ? '' : 'ml-auto'}`}
      >
        {description}
      </p>
    </>
  );
  const mobileContent = (
    <>
      <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#388087] uppercase tracking-wider mb-3 md:hidden">
        <Icon className="h-4 w-4" />
        Step {stepNumber}
      </div>
      <h3 className="text-2xl font-bold text-[#388087] mb-3 md:hidden">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-base md:hidden">
        {description}
      </p>
    </>
  );

  return (
    <AnimateOnScroll variant={variant} delay={delay}>
      <div className="relative flex md:items-center gap-8 py-10">
        {!contentOnRight ? (
          <div className="hidden md:block md:w-1/2 md:pr-16 md:text-right">
            {desktopContent}
          </div>
        ) : (
          <div className="md:w-1/2 md:pr-16 pt-20 md:pt-0 text-center md:text-right order-2 md:order-1">
            {mobileContent}
          </div>
        )}
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-xl border-4 border-white z-10`}
        >
          <span className={`font-bold text-xl ${numberClassName}`}>
            {stepNumber}
          </span>
        </div>
        {contentOnRight ? (
          <div className="hidden md:block md:w-1/2 md:pl-16 md:text-left order-1 md:order-2">
            {desktopContent}
          </div>
        ) : (
          <div className="md:w-1/2 md:pl-16 pt-20 md:pt-0 text-center md:text-left">
            {mobileContent}
          </div>
        )}
      </div>
    </AnimateOnScroll>
  );
}
