'use client';

import type { ReactNode } from 'react';

interface SectionHeaderProps {
  badge: ReactNode;
  title: ReactNode;
  description?: string;
  descriptionMaxWidth?: '2xl' | '3xl';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  descriptionMaxWidth = '3xl',
  className = '',
}: SectionHeaderProps) {
  const maxWidthClass = descriptionMaxWidth === '2xl' ? 'max-w-2xl' : 'max-w-3xl';
  return (
    <div className={`text-center mb-12 ${className}`}>
      <div className="mb-6">{badge}</div>
      <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>
      {description && (
        <p className={`text-xl text-gray-600 ${maxWidthClass} mx-auto leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
}
