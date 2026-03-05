'use client';

import { Label } from '@/components/ui/label';
import { SlotPickerButton } from './slot-picker-button';

export interface TimeSlotPickerProps {
  /** Available time strings (e.g. "9:00 AM"). */
  times: string[];
  value: string | null;
  onChange: (time: string) => void;
  label?: string;
  id?: string;
}

export function TimeSlotPicker({
  times,
  value,
  onChange,
  label = 'Select Time',
  id = 'time-slot-picker',
}: TimeSlotPickerProps) {
  if (times.length === 0) return null;

  return (
    <div>
      <Label htmlFor={id} className="mb-3 block text-foreground">
        {label}
      </Label>
      <div
        id={id}
        role="group"
        aria-label={label}
        className="grid grid-cols-4 gap-3"
      >
        {times.map((time) => (
          <SlotPickerButton
            key={time}
            selected={value === time}
            primaryWhenSelected
            onClick={() => onChange(time)}
          >
            {time}
          </SlotPickerButton>
        ))}
      </div>
    </div>
  );
}
