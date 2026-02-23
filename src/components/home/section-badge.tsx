'use client';

import type { ReactNode } from 'react';

interface SectionBadgeProps {
  icon: ReactNode;
  label: string;
}

export function SectionBadge({ icon, label }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
      {icon}
      <span className="text-sm font-medium text-[#388087]">{label}</span>
    </div>
  );
}
