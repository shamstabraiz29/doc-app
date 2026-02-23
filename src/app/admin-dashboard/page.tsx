"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import {
  Users,
  Stethoscope,
  Calendar,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Shield,
  BarChart3,
} from "lucide-react"

// Mock data
const stats = {
  totalUsers: 1250,
  totalDoctors: 45,
  totalAppointments: 3200,
  activeAppointments: 156,
}

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    status: "active",
    appointments: 127,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    status: "active",
    appointments: 89,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    status: "inactive",
    appointments: 203,
  },
]

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    appointments: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "active",
    appointments: 3,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "blocked",
    appointments: 12,
  },
]

const specialties = [
  { id: 1, name: "Cardiologist", doctors: 8 },
  { id: 2, name: "Dermatologist", doctors: 5 },
  { id: 3, name: "Pediatrician", doctors: 12 },
  { id: 4, name: "Neurologist", doctors: 6 },
]

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "doctors" | "users" | "specialties" | "appointments"
  >("dashboard")

  return (
    <div className="min-h-screen bg-[#F6F6F2]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#BADFE7]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-[#388087]" />
            <span className="text-2xl font-bold text-[#388087]">Super Admin Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-[#388087]">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" className="text-red-600">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b overflow-x-auto">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            onClick={() => setActiveTab("dashboard")}
            className={activeTab === "dashboard" ? "bg-[#388087] text-white" : ""}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "doctors" ? "default" : "ghost"}
            onClick={() => setActiveTab("doctors")}
            className={activeTab === "doctors" ? "bg-[#388087] text-white" : ""}
          >
            <Stethoscope className="h-4 w-4 mr-2" />
            Doctors
          </Button>
          <Button
            variant={activeTab === "users" ? "default" : "ghost"}
            onClick={() => setActiveTab("users")}
            className={activeTab === "users" ? "bg-[#388087] text-white" : ""}
          >
            <Users className="h-4 w-4 mr-2" />
            Users
          </Button>
          <Button
            variant={activeTab === "specialties" ? "default" : "ghost"}
            onClick={() => setActiveTab("specialties")}
            className={activeTab === "specialties" ? "bg-[#388087] text-white" : ""}
          >
            Specialties
          </Button>
          <Button
            variant={activeTab === "appointments" ? "default" : "ghost"}
            onClick={() => setActiveTab("appointments")}
            className={activeTab === "appointments" ? "bg-[#388087] text-white" : ""}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Appointments
          </Button>
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-[#388087] to-[#2d6a70] text-white">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <CardDescription className="text-white/80">Registered patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Total Doctors</CardTitle>
                  <CardDescription>Active healthcare providers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-[#388087]">{stats.totalDoctors}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
                  <CardDescription>All time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-[#6FB3B8]">
                    {stats.totalAppointments.toLocaleString()}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Active Appointments</CardTitle>
                  <CardDescription>Today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{stats.activeAppointments}</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Doctors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {doctors.slice(0, 3).map((doctor) => (
                      <div
                        key={doctor.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <div className="font-semibold">{doctor.name}</div>
                          <div className="text-sm text-gray-600">{doctor.specialty}</div>
                        </div>
                        <Badge variant={doctor.status === "active" ? "success" : "default"}>
                          {doctor.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Appointment Growth</span>
                      <span className="font-semibold text-green-600">+12%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">New Users (This Month)</span>
                      <span className="font-semibold text-[#388087]">+45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">New Doctors (This Month)</span>
                      <span className="font-semibold text-[#6FB3B8]">+3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Doctors Tab */}
        {activeTab === "doctors" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#388087]">Doctor Management</h2>
              <Button className="bg-[#388087] hover:bg-[#2d6a70] text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Doctor
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Doctors</CardTitle>
                <CardDescription>Manage doctor accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {doctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#BADFE7] flex items-center justify-center text-[#388087] font-bold">
                          {doctor.name.charAt(doctor.name.indexOf(".") + 2)}
                        </div>
                        <div>
                          <div className="font-semibold">{doctor.name}</div>
                          <div className="text-sm text-gray-600">{doctor.specialty}</div>
                          <div className="text-xs text-gray-500">{doctor.appointments} appointments</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={doctor.status === "active" ? "success" : "default"}>
                          {doctor.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#388087]">User Management</h2>
              <Input placeholder="Search users..." className="max-w-xs" />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>Manage user accounts and access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#BADFE7] flex items-center justify-center text-[#388087] font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">{user.name}</div>
                          <div className="text-sm text-gray-600">{user.email}</div>
                          <div className="text-xs text-gray-500">{user.appointments} appointments</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={user.status === "active" ? "success" : "destructive"}>
                          {user.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          {user.status === "active" ? "Block" : "Unblock"}
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Specialties Tab */}
        {activeTab === "specialties" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#388087]">Specialty Management</h2>
              <Button className="bg-[#388087] hover:bg-[#2d6a70] text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Specialty
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Specialties</CardTitle>
                <CardDescription>Manage medical specialties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {specialties.map((specialty) => (
                    <div
                      key={specialty.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-all"
                    >
                      <div>
                        <div className="font-semibold">{specialty.name}</div>
                        <div className="text-sm text-gray-600">{specialty.doctors} doctors</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === "appointments" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#388087]">Appointment Monitoring</h2>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                </Select>
                <Input type="date" className="w-auto" />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Appointments</CardTitle>
                <CardDescription>Monitor and manage all system appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 1, patient: "John Doe", doctor: "Dr. Sarah Johnson", date: "Feb 15, 2026", time: "10:00 AM", status: "confirmed" },
                    { id: 2, patient: "Jane Smith", doctor: "Dr. Michael Chen", date: "Feb 16, 2026", time: "2:00 PM", status: "pending" },
                    { id: 3, patient: "Bob Johnson", doctor: "Dr. Emily Rodriguez", date: "Feb 17, 2026", time: "11:00 AM", status: "confirmed" },
                  ].map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-all"
                    >
                      <div>
                        <div className="font-semibold">{apt.patient}</div>
                        <div className="text-sm text-gray-600">{apt.doctor}</div>
                        <div className="text-xs text-gray-500">
                          {apt.date} at {apt.time}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={apt.status === "confirmed" ? "success" : "pending"}>
                          {apt.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" variant="destructive">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
