"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select } from "@/components/ui/select"
import { Search, Calendar, Clock, MapPin, Stethoscope, User, LogOut } from "lucide-react"

// Mock data
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15 years",
    hospital: "City General Hospital",
    location: "New York, NY",
    image: "/api/placeholder/150/150",
    availableSlots: ["9:00 AM", "10:00 AM", "2:00 PM"],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    experience: "10 years",
    hospital: "Metro Health Center",
    location: "Los Angeles, CA",
    image: "/api/placeholder/150/150",
    availableSlots: ["11:00 AM", "3:00 PM", "4:00 PM"],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    experience: "12 years",
    hospital: "Children's Hospital",
    location: "Chicago, IL",
    image: "/api/placeholder/150/150",
    availableSlots: ["9:00 AM", "1:00 PM", "5:00 PM"],
  },
]

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "Feb 15, 2026",
    time: "10:00 AM",
    status: "confirmed",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Dermatologist",
    date: "Feb 18, 2026",
    time: "2:00 PM",
    status: "pending",
  },
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const specialties = ["All", "Cardiologist", "Dermatologist", "Pediatrician", "Neurologist"]
  const locations = ["All", "New York, NY", "Los Angeles, CA", "Chicago, IL"]

  return (
    <div className="min-h-screen bg-[#F6F6F2]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#BADFE7]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-8 w-8 text-[#388087]" />
            <span className="text-2xl font-bold text-[#388087]">DocApp</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/my-appointments">
              <Button variant="ghost" className="text-[#388087]">
                <Calendar className="h-4 w-4 mr-2" />
                My Appointments
              </Button>
            </Link>
            <Button variant="ghost" className="text-[#388087]">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" className="text-red-600">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Upcoming Appointments Section */}
        <AnimateOnScroll variant="fadeUp" className="mb-8">
          <h2 className="text-2xl font-bold text-[#388087] mb-4">Upcoming Appointments</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {upcomingAppointments.map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{appointment.doctor}</CardTitle>
                      <CardDescription>{appointment.specialty}</CardDescription>
                    </div>
                    <Badge
                      variant={
                        appointment.status === "confirmed"
                          ? "success"
                          : appointment.status === "pending"
                          ? "pending"
                          : "default"
                      }
                    >
                      {appointment.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Search Section */}
        <AnimateOnScroll variant="fadeUp" delay={100}>
          <h2 className="text-2xl font-bold text-[#388087] mb-4">Find a Doctor</h2>
          <Card className="p-4 mb-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 focus:ring-2 focus:ring-[#6FB3B8]"
                />
              </div>
              <Select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="focus:ring-2 focus:ring-[#6FB3B8]"
              >
                {specialties.map((spec) => (
                  <option key={spec} value={spec.toLowerCase()}>
                    {spec}
                  </option>
                ))}
              </Select>
              <Select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="focus:ring-2 focus:ring-[#6FB3B8]"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc.toLowerCase()}>
                    {loc}
                  </option>
                ))}
              </Select>
            </div>
          </Card>

          {/* Doctors Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {doctors.map((doctor, i) => (
              <AnimateOnScroll key={doctor.id} variant="scale" delay={i * 80}>
              <Card
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#BADFE7] flex items-center justify-center text-[#388087] text-xl font-bold group-hover:scale-110 transition-transform">
                      {doctor.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{doctor.name}</CardTitle>
                      <CardDescription>{doctor.specialty}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      {doctor.experience} experience
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {doctor.location}
                    </div>
                    <div className="text-gray-600">{doctor.hospital}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doctor.availableSlots.slice(0, 3).map((slot) => (
                      <Badge key={slot} variant="secondary" className="text-xs">
                        {slot}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/doctors/${doctor.id}`}>
                    <Button className="w-full bg-[#388087] hover:bg-[#2d6a70] text-white">
                      View Profile & Book
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
