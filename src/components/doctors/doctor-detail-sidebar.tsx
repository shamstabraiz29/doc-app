'use client';

import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, MapPin, Star } from 'lucide-react';
import { ContentCard } from '@/components/layout/content-card';

export interface DoctorDetailSidebarDoctor {
  name: string;
  specialty: string;
  experience?: string;
  hospital?: string;
  location?: string;
  address?: string;
  workingDays?: string[];
  rating?: number;
  reviews?: number;
  image?: string | null;
}

export interface DoctorDetailSidebarProps {
  doctor: DoctorDetailSidebarDoctor;
  className?: string;
}

export function DoctorDetailSidebar({
  doctor,
  className,
}: DoctorDetailSidebarProps) {
  return (
    <ContentCard
      sticky
      stickyTop="top-24"
      className={`flex flex-col h-fit ${className ?? ''}`}
    >
      <div className="relative pt-8 pb-4 px-6 bg-linear-to-b from-primary/8 to-transparent">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-primary/10 ring-2 ring-white dark:ring-card shadow-lg flex items-center justify-center">
            {doctor.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl font-bold text-primary">
                {doctor.name.charAt(0)}
              </span>
            )}
          </div>
          <CardTitle className="mt-4 text-xl text-card-foreground tracking-tight">
            {doctor.name}
          </CardTitle>
          <CardDescription className="text-base font-medium text-primary mt-1">
            {doctor.specialty}
          </CardDescription>
          {(doctor.rating != null || doctor.reviews != null) && (
            <div className="flex items-center justify-center gap-2 mt-2">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-foreground">
                {doctor.rating ?? '—'}
              </span>
              <span className="text-sm text-muted-foreground">
                ({doctor.reviews ?? 0} reviews)
              </span>
            </div>
          )}
        </div>
      </div>
      <CardContent className="px-6 py-5 space-y-4">
        <div className="space-y-3 text-sm text-muted-foreground">
          {doctor.experience && (
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary/70 shrink-0" />
              <span>{doctor.experience} of experience</span>
            </div>
          )}
          {doctor.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary/70 shrink-0" />
              <span>{doctor.location}</span>
            </div>
          )}
          {doctor.hospital && <div>{doctor.hospital}</div>}
          {doctor.address && <div className="text-xs">{doctor.address}</div>}
        </div>
        {doctor.workingDays && doctor.workingDays.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground mb-2">Working Days</h4>
            <div className="flex flex-wrap gap-2">
              {doctor.workingDays.map((day) => (
                <Badge
                  key={day}
                  variant="outline"
                  className="inline-flex items-center gap-1.5 rounded-2xl border border-primary/20 bg-primary/5/60 px-3 py-1 text-xs font-medium text-primary/90 shadow-sm shadow-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{day}</span>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </ContentCard>
  );
}
