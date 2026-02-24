'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Building2, ArrowRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DoctorProfile {
  id: number | string;
  name: string;
  specialty: string;
  experience?: string;
  hospital?: string;
  location?: string;
  image?: string | null;
  availableSlots?: string[];
}

export interface DoctorProfileCardProps {
  doctor: DoctorProfile;
  className?: string;
  /** Show "View Profile & Book" button. Default: true */
  showBookButton?: boolean;
  /** Max number of time-slot badges to show. Default: 3 */
  maxSlots?: number;
  /** Profile/book URL. Default: `/doctors/{id}` */
  href?: string;
}

export function DoctorProfileCard({
  doctor,
  className,
  showBookButton = true,
  maxSlots = 3,
  href,
}: DoctorProfileCardProps) {
  const slotsToShow = (doctor.availableSlots ?? []).slice(0, maxSlots);
  const profileHref = href ?? `/doctors/${doctor.id}`;

  return (
    <Card
      className={cn(
        'overflow-hidden border border-border/60 bg-card rounded-2xl',
        'shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/25',
        'transition-all duration-300 ease-out cursor-pointer group',
        'flex flex-col h-full',
        className,
      )}
    >
      {/* Header with avatar */}
      <div className="relative pt-8 pb-6 px-6 bg-linear-to-b from-primary/8 to-transparent">
        <div className="flex flex-col items-center text-center">
          <div
            className={cn(
              'relative w-24 h-24 rounded-2xl overflow-hidden shrink-0',
              'bg-primary/10 ring-2 ring-white dark:ring-card shadow-lg',
              'group-hover:scale-[1.03] group-hover:ring-primary/20',
              'transition-all duration-300 flex items-center justify-center',
            )}
          >
            {doctor.image ? (
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            ) : (
              <span className="text-3xl font-bold text-primary">
                {doctor.name.charAt(0)}
              </span>
            )}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-card-foreground tracking-tight">
            {doctor.name}
          </h3>
          <p className="text-sm font-medium text-primary mt-1">
            {doctor.specialty}
          </p>
        </div>
      </div>

      <CardContent className="px-6 py-5 space-y-5 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {doctor.experience && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary/70 shrink-0" />
              {doctor.experience} exp
            </span>
          )}
          {doctor.location && (
            <span className="flex items-center gap-1.5 min-w-0">
              <MapPin className="h-4 w-4 text-primary/70 shrink-0" />
              <span className="truncate">{doctor.location}</span>
            </span>
          )}
          {doctor.hospital && (
            <span className="flex items-center gap-1.5 min-w-0 basis-full sm:basis-auto">
              <Building2 className="h-4 w-4 text-primary/70 shrink-0" />
              <span className="truncate">{doctor.hospital}</span>
            </span>
          )}
        </div>

        {slotsToShow.length > 0 && (
          <div className="space-y-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              Available
            </span>
            <div className="flex flex-wrap gap-2">
              {slotsToShow.map((slot) => (
                <span
                  key={slot}
                  className="inline-flex items-center rounded-xl px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary border border-primary/15"
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
        )}

        {showBookButton && (
          <Link href={profileHref} className="block mt-auto pt-2">
            <Button
              variant="outline"
              className={cn(
                'w-full rounded-xl h-11 font-medium border-2 border-primary/25',
                'bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary',
                'transition-all duration-200 group/btn',
              )}
            >
              View Profile & Book
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
