'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** When true, card is sticky (e.g. sidebar). */
  sticky?: boolean;
  /** Top offset when sticky. Default: top-24 */
  stickyTop?: string;
}

const contentCardClass =
  'overflow-hidden border border-border/60 bg-card rounded-2xl shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/25 transition-all duration-300';

export function ContentCard({
  className,
  sticky,
  stickyTop = 'top-24',
  ...props
}: ContentCardProps) {
  return (
    <Card
      className={cn(
        contentCardClass,
        sticky && `sticky ${stickyTop}`,
        className,
      )}
      {...props}
    />
  );
}
