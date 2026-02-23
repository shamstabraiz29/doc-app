"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Calendar, Clock, MapPin, Award, Star } from "lucide-react"

// Mock doctor data
const doctor = {
  id: 1,
  name: "Dr. Sarah Johnson",
  specialty: "Cardiologist",
  experience: "15 years",
  hospital: "City General Hospital",
  location: "New York, NY",
  address: "123 Medical Center Dr, New York, NY 10001",
  bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in preventive cardiology and heart failure management.",
  image: "/api/placeholder/200/200",
  rating: 4.8,
  reviews: 127,
  workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  availableSlots: {
    "2026-02-15": ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
    "2026-02-16": ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
    "2026-02-17": ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
  },
}

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [reason, setReason] = useState("")
  const [showBookingModal, setShowBookingModal] = useState(false)

  const dates = Object.keys(doctor.availableSlots)
  const availableTimes = selectedDate ? doctor.availableSlots[selectedDate as keyof typeof doctor.availableSlots] || [] : []

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setShowBookingModal(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#F6F6F2]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#BADFE7]">
        <div className="container mx-auto px-4 py-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="text-[#388087]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Doctor Info Card */}
          <div className="md:col-span-1">
            <Card className="sticky top-4 animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-32 h-32 rounded-full bg-[#BADFE7] flex items-center justify-center text-[#388087] text-4xl font-bold mx-auto mb-4">
                  {doctor.name.charAt(0)}
                </div>
                <CardTitle className="text-2xl">{doctor.name}</CardTitle>
                <CardDescription className="text-lg">{doctor.specialty}</CardDescription>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{doctor.rating}</span>
                  <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-[#388087]" />
                    <span>{doctor.experience} of experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#388087]" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="text-gray-600">{doctor.hospital}</div>
                  <div className="text-gray-600 text-xs">{doctor.address}</div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Working Days</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.workingDays.map((day) => (
                      <Badge key={day} variant="secondary">
                        {day}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Section */}
          <div className="md:col-span-2 space-y-6">
            {/* Bio */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>About Dr. {doctor.name.split(" ")[1]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{doctor.bio}</p>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Book Appointment</CardTitle>
                <CardDescription>Select a date and time for your appointment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Date Selection */}
                <div>
                  <Label className="mb-3 block">Select Date</Label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {dates.map((date) => {
                      const dateObj = new Date(date)
                      const isSelected = selectedDate === date
                      return (
                        <button
                          key={date}
                          onClick={() => {
                            setSelectedDate(date)
                            setSelectedTime(null)
                          }}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            isSelected
                              ? "border-[#388087] bg-[#BADFE7] text-[#388087]"
                              : "border-gray-200 hover:border-[#6FB3B8]"
                          }`}
                        >
                          <div className="text-xs text-gray-500">
                            {dateObj.toLocaleDateString("en-US", { weekday: "short" })}
                          </div>
                          <div className="font-semibold">
                            {dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div className="animate-fade-in">
                    <Label className="mb-3 block">Select Time</Label>
                    <div className="grid grid-cols-4 gap-3">
                      {availableTimes.map((time) => {
                        const isSelected = selectedTime === time
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-lg border-2 transition-all ${
                              isSelected
                                ? "border-[#388087] bg-[#388087] text-white"
                                : "border-gray-200 hover:border-[#6FB3B8]"
                            }`}
                          >
                            {time}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Reason for Visit */}
                <div>
                  <Label htmlFor="reason" className="mb-2 block">
                    Reason for Visit (Optional)
                  </Label>
                  <Textarea
                    id="reason"
                    placeholder="Briefly describe your symptoms or reason for the appointment..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="focus:ring-2 focus:ring-[#6FB3B8]"
                    rows={3}
                  />
                </div>

                {/* Book Button */}
                <Button
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime}
                  className="w-full bg-[#388087] hover:bg-[#2d6a70] text-white"
                  size="lg"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Confirm Booking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 animate-fade-in">
          <Card className="w-full max-w-md mx-4 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-green-600">Appointment Booked!</CardTitle>
              <CardDescription>Your appointment has been successfully booked</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Doctor:</span>
                  <span className="font-semibold">{doctor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">
                    {selectedDate && new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold">{selectedTime}</span>
                </div>
                {reason && (
                  <div>
                    <span className="text-gray-600">Reason:</span>
                    <p className="font-semibold mt-1">{reason}</p>
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 bg-[#388087] hover:bg-[#2d6a70] text-white"
                >
                  View My Appointments
                </Button>
                <Button
                  onClick={() => {
                    setShowBookingModal(false)
                    setSelectedDate(null)
                    setSelectedTime(null)
                    setReason("")
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
