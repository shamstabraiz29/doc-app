'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { NativeSelect } from '@/components/ui/select';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  XCircle,
  User,
  Settings,
  LogOut,
  Stethoscope,
} from 'lucide-react';

// Mock data
const todayAppointments = [
  {
    id: 1,
    patient: 'John Doe',
    time: '9:00 AM',
    status: 'confirmed',
    reason: 'Regular checkup',
  },
  {
    id: 2,
    patient: 'Jane Smith',
    time: '10:00 AM',
    status: 'pending',
    reason: 'Chest pain',
  },
  {
    id: 3,
    patient: 'Bob Johnson',
    time: '2:00 PM',
    status: 'confirmed',
    reason: 'Follow-up',
  },
];

const upcomingAppointments = [
  {
    id: 4,
    patient: 'Alice Brown',
    date: 'Feb 16, 2026',
    time: '11:00 AM',
    status: 'pending',
  },
  {
    id: 5,
    patient: 'Charlie Davis',
    date: 'Feb 17, 2026',
    time: '3:00 PM',
    status: 'confirmed',
  },
];

export default function DoctorDashboardPage() {
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'appointments' | 'availability' | 'profile'
  >('dashboard');

  return (
    <div className="min-h-screen bg-[#F6F6F2]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#BADFE7]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-8 w-8 text-[#388087]" />
            <span className="text-2xl font-bold text-[#388087]">
              Doctor Portal
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-[#388087]">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
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
        <div className="flex gap-2 mb-6 border-b">
          <Button
            variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('dashboard')}
            className={
              activeTab === 'dashboard' ? 'bg-[#388087] text-white' : ''
            }
          >
            Dashboard
          </Button>
          <Button
            variant={activeTab === 'appointments' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('appointments')}
            className={
              activeTab === 'appointments' ? 'bg-[#388087] text-white' : ''
            }
          >
            Appointments
          </Button>
          <Button
            variant={activeTab === 'availability' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('availability')}
            className={
              activeTab === 'availability' ? 'bg-[#388087] text-white' : ''
            }
          >
            Availability
          </Button>
          <Button
            variant={activeTab === 'profile' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('profile')}
            className={activeTab === 'profile' ? 'bg-[#388087] text-white' : ''}
          >
            Profile
          </Button>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-[#388087] to-[#2d6a70] text-white">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Today's Appointments
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    3 appointments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {todayAppointments.length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Upcoming
                  </CardTitle>
                  <CardDescription>This week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-[#388087]">12</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Pending</CardTitle>
                  <CardDescription>Awaiting approval</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600">5</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Completed
                  </CardTitle>
                  <CardDescription>This month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">48</div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Appointments</CardTitle>
                <CardDescription>February 13, 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-[#BADFE7]/20 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#BADFE7] flex items-center justify-center text-[#388087] font-bold">
                          {apt.patient.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">{apt.patient}</div>
                          <div className="text-sm text-gray-600">
                            {apt.reason}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-semibold">{apt.time}</div>
                          <Badge
                            variant={
                              apt.status === 'confirmed' ? 'success' : 'pending'
                            }
                            className="mt-1"
                          >
                            {apt.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          {apt.status === 'pending' && (
                            <>
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                          {apt.status === 'confirmed' && (
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingAppointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-[#BADFE7]/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-[#388087]" />
                        <div>
                          <div className="font-semibold">{apt.patient}</div>
                          <div className="text-sm text-gray-600">
                            {apt.date} at {apt.time}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={
                          apt.status === 'confirmed' ? 'success' : 'pending'
                        }
                      >
                        {apt.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>All Appointments</CardTitle>
                <CardDescription>
                  Manage and view all patient appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...todayAppointments, ...upcomingAppointments].map(
                    (apt) => (
                      <div
                        key={apt.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#BADFE7] flex items-center justify-center text-[#388087] font-bold">
                            {apt.patient.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold">{apt.patient}</div>
                            <div className="text-sm text-gray-600">
                              {'date' in apt
                                ? `${apt.date} at ${apt.time}`
                                : apt.time}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={
                              apt.status === 'confirmed' ? 'success' : 'pending'
                            }
                          >
                            {apt.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Availability Tab */}
        {activeTab === 'availability' && (
          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Set Working Days</CardTitle>
                <CardDescription>
                  Select your available working days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                    (day) => (
                      <Button
                        key={day}
                        variant="outline"
                        className="h-16 border-[#388087] hover:bg-[#BADFE7]"
                      >
                        {day}
                      </Button>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Time Slots</CardTitle>
                <CardDescription>Set your available time slots</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Start Time</Label>
                    <Input type="time" defaultValue="09:00" className="mt-2" />
                  </div>
                  <div>
                    <Label>End Time</Label>
                    <Input type="time" defaultValue="17:00" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label>Slot Duration (minutes)</Label>
                  <NativeSelect defaultValue="30" className="mt-2">
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">60 minutes</option>
                  </NativeSelect>
                </div>
                <Button className="bg-[#388087] hover:bg-[#2d6a70] text-white">
                  Save Availability
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Block Dates</CardTitle>
                <CardDescription>
                  Add dates when you're unavailable
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Select Date</Label>
                  <Input type="date" className="mt-2" />
                </div>
                <Button
                  variant="outline"
                  className="border-red-300 text-red-600"
                >
                  Block Date
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>
                  Update your professional information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Full Name</Label>
                  <Input defaultValue="Dr. Sarah Johnson" className="mt-2" />
                </div>
                <div>
                  <Label>Specialty</Label>
                  <NativeSelect defaultValue="cardiologist" className="mt-2">
                    <option value="cardiologist">Cardiologist</option>
                    <option value="dermatologist">Dermatologist</option>
                    <option value="pediatrician">Pediatrician</option>
                    <option value="neurologist">Neurologist</option>
                  </NativeSelect>
                </div>
                <div>
                  <Label>Experience (years)</Label>
                  <Input type="number" defaultValue="15" className="mt-2" />
                </div>
                <div>
                  <Label>Hospital/Clinic</Label>
                  <Input
                    defaultValue="City General Hospital"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input defaultValue="New York, NY" className="mt-2" />
                </div>
                <div>
                  <Label>Bio</Label>
                  <Textarea
                    defaultValue="Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience..."
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <Button className="bg-[#388087] hover:bg-[#2d6a70] text-white">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
