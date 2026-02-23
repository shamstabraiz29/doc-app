'use client';

import { CheckCircle2 } from 'lucide-react';

const DEFAULT_ITEMS = [
  { label: '1000+ Doctors' },
  { label: '50K+ Patients' },
  { label: '24/7 Support' },
];

interface TrustIndicatorsProps {
  items?: { label: string }[];
}

export function TrustIndicators({ items = DEFAULT_ITEMS }: TrustIndicatorsProps) {
  return (
    <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600 animate-fade-in-up">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-[#388087]" />
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
