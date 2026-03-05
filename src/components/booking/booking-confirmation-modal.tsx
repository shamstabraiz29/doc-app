'use client';

import type { ElementType } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, Calendar, Clock, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface BookingConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  doctorName: string;
  date: string | null;
  time: string | null;
  reason?: string;
  /** Primary action (e.g. "View My Appointments"). Default href: /doctors */
  primaryActionLabel?: string;
  primaryActionHref?: string;
}

const Line = ({
  icon: Icon,
  label,
  value,
}: {
  icon: ElementType;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 py-2">
    <Icon className="h-4 w-4 text-primary shrink-0 opacity-80" />
    <div className="min-w-0 flex-1">
      <span className="text-muted-foreground text-sm">{label}</span>
      <span className="text-foreground font-medium text-sm ml-2">{value}</span>
    </div>
  </div>
);

export function BookingConfirmationModal({
  open,
  onClose,
  doctorName,
  date,
  time,
  reason,
  primaryActionLabel = 'View My Appointments',
  primaryActionHref = '/doctors',
}: BookingConfirmationModalProps) {
  const router = useRouter();
  const [hasConfirmed, setHasConfirmed] = useState(false);

  // Reset to the confirmation step whenever the modal is closed
  useEffect(() => {
    if (!open) {
      setHasConfirmed(false);
    }
  }, [open]);

  if (!open) return null;

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '—';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-confirmation-title"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-primary/10 backdrop-blur-md"
        aria-label="Close"
      />

      <div className="relative w-full max-w-lg animate-scale-in rounded-3xl border border-white/40 bg-card/95 shadow-2xl shadow-primary/10 overflow-hidden backdrop-blur-xl">
        {/* Soft glow top */}
        <div className="h-24 bg-linear-to-b from-primary/20 via-primary/5 to-transparent" />

        <div className="px-6 pb-6 -mt-10">
          {/* Badge + title */}
          <div className="flex justify-center mb-4">
            {hasConfirmed ? (
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-card shadow-lg text-primary animate-check-badge-pop">
                <Check
                  className="h-7 w-7 animate-check-icon-in"
                  strokeWidth={2.5}
                />
              </span>
            ) : (
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-card shadow-lg text-primary">
                <Calendar className="h-7 w-7" strokeWidth={2.5} />
              </span>
            )}
          </div>

          {hasConfirmed ? (
            <>
              <h2
                id="booking-confirmation-title"
                className="text-center text-xl font-bold text-foreground mb-1"
              >
                Appointment confirmed
              </h2>
              <p className="text-center text-muted-foreground text-sm mb-6">
                Your visit has been scheduled
              </p>
            </>
          ) : (
            <>
              <h2
                id="booking-confirmation-title"
                className="text-center text-xl font-bold text-foreground mb-1"
              >
                Confirm your appointment
              </h2>
              <p className="text-center text-muted-foreground text-sm mb-6">
                Please review the details below and confirm your visit.
              </p>
            </>
          )}

          {/* Details */}
          <div className="rounded-md bg-primary/10 border border-primary/25 p-4 divide-y divide-border/40">
            <Line icon={User} label="Doctor" value={doctorName} />
            <Line icon={Calendar} label="Date" value={formattedDate} />
            <Line icon={Clock} label="Time" value={time ?? '—'} />
            {reason && <Line icon={FileText} label="Reason" value={reason} />}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {hasConfirmed ? (
              <>
                <Button
                  onClick={() => {
                    onClose();
                    router.push(primaryActionHref);
                  }}
                  size="lg"
                  className="w-full sm:flex-1 sm:min-w-0 h-11 rounded-md font-semibold"
                >
                  {primaryActionLabel}
                </Button>
                <Button
                  onClick={onClose}
                  variant="outline"
                  size="lg"
                  className="w-full sm:flex-1 sm:min-w-0 h-11 rounded-md font-medium"
                >
                  Close
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => setHasConfirmed(true)}
                  size="lg"
                  className="w-full sm:flex-1 sm:min-w-0 h-11 rounded-md font-semibold"
                >
                  Confirm appointment
                </Button>
                <Button
                  onClick={onClose}
                  variant="outline"
                  size="lg"
                  className="w-full sm:flex-1 sm:min-w-0 h-11 rounded-md font-medium"
                >
                  Cancel
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
