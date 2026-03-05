'use client';

import { cn } from '@/lib/utils';

export interface MainContainerProps extends React.HTMLAttributes<HTMLElement> {}

export function MainContainer({
  className,
  ...props
}: MainContainerProps) {
  return (
    <main
      className={cn(
        'relative container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl',
        className,
      )}
      {...props}
    />
  );
}
