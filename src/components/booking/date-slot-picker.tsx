'use client';

import { Label } from '@/components/ui/label';
import { SlotPickerButton } from './slot-picker-button';

export interface DateSlotPickerProps {
  /** Available dates as ISO date strings (e.g. "2026-02-15"). */
  dates: string[];
  value: string | null;
  onChange: (date: string | null) => void;
  label?: string;
  id?: string;
}

export function DateSlotPicker({
  dates,
  value,
  onChange,
  label = 'Select Date',
  id = 'date-slot-picker',
}: DateSlotPickerProps) {
  return (
    <div>
      <Label htmlFor={id} className="mb-3 block text-foreground">
        {label}
      </Label>
      <div
        id={id}
        role="group"
        aria-label={label}
        className="grid grid-cols-3 md:grid-cols-5 gap-3"
      >
        {dates.map((date) => {
          const dateObj = new Date(date);
          const isSelected = value === date;
          return (
            <SlotPickerButton
              key={date}
              selected={isSelected}
              primaryWhenSelected={false}
              secondaryLabel={dateObj.toLocaleDateString('en-US', {
                weekday: 'short',
              })}
              onClick={() => onChange(date)}
            >
              {dateObj.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </SlotPickerButton>
          );
        })}
      </div>
    </div>
  );
}
