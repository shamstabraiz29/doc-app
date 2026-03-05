'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from 'lucide-react';
import {
  AmbientBackground,
  ContentCard,
  MainContainer,
} from '@/components/layout';
import { DoctorDetailSidebar } from '@/components/doctors/doctor-detail-sidebar';
import {
  DateSlotPicker,
  TimeSlotPicker,
  BookingConfirmationModal,
} from '@/components/booking';

// Mock doctor data
const doctor = {
  id: 1,
  name: 'Dr. Sarah Johnson',
  specialty: 'Cardiologist',
  experience: '15 years',
  hospital: 'City General Hospital',
  location: 'New York, NY',
  address: '123 Medical Center Dr, New York, NY 10001',
  bio: 'Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in preventive cardiology and heart failure management.',
  image:
    'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop',
  rating: 4.8,
  reviews: 127,
  workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  availableSlots: {
    '2026-02-15': ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'],
    '2026-02-16': ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
    '2026-02-17': ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'],
  },
};

const INPUT_STYLE_CLASS =
  'min-h-12 rounded-md border border-primary/25 bg-transparent px-3 py-3 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground hover:border-primary/40 focus-visible:outline-none focus-visible:border-accent/50 focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50';

export default function DoctorProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);

  const dates = Object.keys(doctor.availableSlots);
  const availableTimes = selectedDate
    ? doctor.availableSlots[
        selectedDate as keyof typeof doctor.availableSlots
      ] || []
    : [];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setShowBookingModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setReason('');
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-primary/3 pt-24">
      <AmbientBackground />
      <MainContainer>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <DoctorDetailSidebar doctor={doctor} />
          </div>

          <div className="md:col-span-2 space-y-6">
            <ContentCard>
              <CardHeader>
                <CardTitle className="text-foreground">
                  About Dr. {doctor.name.split(' ')[1]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {doctor.bio}
                </p>
              </CardContent>
            </ContentCard>

            <ContentCard>
              <CardHeader>
                <CardTitle className="text-foreground">
                  Book Appointment
                </CardTitle>
                <CardDescription>
                  Select a date and time for your appointment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <DateSlotPicker
                  dates={dates}
                  value={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setSelectedTime(null);
                  }}
                />
                <TimeSlotPicker
                  times={availableTimes}
                  value={selectedTime}
                  onChange={setSelectedTime}
                />
                <div>
                  <Label
                    htmlFor="reason"
                    className="mb-2 block text-foreground"
                  >
                    Reason for Visit (Optional)
                  </Label>
                  <Textarea
                    id="reason"
                    placeholder="Briefly describe your symptoms or reason for the appointment..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className={INPUT_STYLE_CLASS}
                    rows={3}
                  />
                </div>
                <Button
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime}
                  className="w-full rounded-xl h-12 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 active:scale-[0.98]"
                  size="lg"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Confirm Booking
                </Button>
              </CardContent>
            </ContentCard>
          </div>
        </div>
      </MainContainer>

      <BookingConfirmationModal
        open={showBookingModal}
        onClose={handleCloseModal}
        doctorName={doctor.name}
        date={selectedDate}
        time={selectedTime}
        reason={reason || undefined}
      />
    </div>
  );
}
