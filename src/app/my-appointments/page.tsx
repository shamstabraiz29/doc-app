"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, MapPin, X, RefreshCw } from "lucide-react"

// Mock appointments data
const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "2026-02-15",
    time: "10:00 AM",
    status: "confirmed",
    hospital: "City General Hospital",
    location: "New York, NY",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Dermatologist",
    date: "2026-02-18",
    time: "2:00 PM",
    status: "pending",
    hospital: "Metro Health Center",
    location: "Los Angeles, CA",
  },
  {
    id: 3,
    doctor: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    date: "2026-01-20",
    time: "11:00 AM",
    status: "completed",
    hospital: "Children's Hospital",
    location: "Chicago, IL",
  },
  {
    id: 4,
    doctor: "Dr. James Wilson",
    specialty: "Neurologist",
    date: "2026-01-10",
    time: "3:00 PM",
    status: "cancelled",
    hospital: "Neuro Center",
    location: "Boston, MA",
  },
]

const getStatusVariant = (status: string) => {
  switch (status) {
    case "confirmed":
      return "success"
    case "pending":
      return "pending"
    case "completed":
      return "default"
    case "cancelled":
      return "destructive"
    default:
      return "default"
  }
}

export default function MyAppointmentsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all")

  const filteredAppointments = appointments.filter((apt) => {
    if (filter === "upcoming") {
      return new Date(apt.date) >= new Date() && apt.status !== "cancelled"
    }
    if (filter === "past") {
      return new Date(apt.date) < new Date() || apt.status === "completed" || apt.status === "cancelled"
    }
    return true
  })

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
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#388087] mb-4">My Appointments</h1>
          
          {/* Filter Buttons */}
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-[#388087] text-white" : ""}
            >
              All
            </Button>
            <Button
              variant={filter === "upcoming" ? "default" : "outline"}
              onClick={() => setFilter("upcoming")}
              className={filter === "upcoming" ? "bg-[#388087] text-white" : ""}
            >
              Upcoming
            </Button>
            <Button
              variant={filter === "past" ? "default" : "outline"}
              onClick={() => setFilter("past")}
              className={filter === "past" ? "bg-[#388087] text-white" : ""}
            >
              Past
            </Button>
          </div>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {filteredAppointments.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-gray-500">No appointments found</p>
            </Card>
          ) : (
            filteredAppointments.map((appointment) => (
              <Card
                key={appointment.id}
                className="hover:shadow-lg transition-all animate-scale-in"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{appointment.doctor}</CardTitle>
                      <CardDescription className="text-base">{appointment.specialty}</CardDescription>
                    </div>
                    <Badge variant={getStatusVariant(appointment.status) as any}>
                      {appointment.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {new Date(appointment.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        {appointment.time}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {appointment.hospital}, {appointment.location}
                    </div>
                    {(appointment.status === "confirmed" || appointment.status === "pending") &&
                      new Date(appointment.date) >= new Date() && (
                        <div className="flex gap-2 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-red-300 text-red-600 hover:bg-red-50"
                          >
                            <X className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#388087] text-[#388087] hover:bg-[#BADFE7]"
                          >
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Reschedule
                          </Button>
                        </div>
                      )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
