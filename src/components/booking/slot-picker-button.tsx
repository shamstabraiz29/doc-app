'use client';

import { cn } from '@/lib/utils';

export interface SlotPickerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  /** For date slots: show as primary fill (solid bg). For time slots use true. */
  primaryWhenSelected?: boolean;
  /** Top line (e.g. weekday). */
  secondaryLabel?: string;
  /** Main label (e.g. date or time). */
  children: React.ReactNode;
}

export function SlotPickerButton({
  selected = false,
  primaryWhenSelected = false,
  secondaryLabel,
  className,
  children,
  ...props
}: SlotPickerButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'p-3 rounded-md border-2 transition-all text-sm font-medium cursor-pointer',
        selected
          ? primaryWhenSelected
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-primary bg-primary/10 text-primary'
          : 'border-border/60 bg-white dark:bg-white/10 hover:border-primary/30 text-foreground',
        className,
      )}
      {...props}
    >
      {secondaryLabel && (
        <div className="text-xs text-muted-foreground">{secondaryLabel}</div>
      )}
      <div>{children}</div>
    </button>
  );
}
