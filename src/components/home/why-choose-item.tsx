'use client';

import type { LucideIcon } from 'lucide-react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

interface WhyChooseItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconClassName?: string;
  delay?: number;
}

export function WhyChooseItem({
  icon: Icon,
  title,
  description,
  iconClassName = 'text-[#388087]',
  delay = 0,
}: WhyChooseItemProps) {
  return (
    <AnimateOnScroll variant="fadeUp" delay={delay} className="flex gap-4">
      <Icon className={`h-6 w-6 shrink-0 mt-0.5 ${iconClassName}`} />
      <div>
        <h3 className="text-xl font-bold text-[#388087] mb-1.5">{title}</h3>
        <p className="text-base text-gray-600 leading-relaxed">{description}</p>
      </div>
    </AnimateOnScroll>
  );
}
