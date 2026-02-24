'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DoctorProfileCard } from '@/components/doctors/doctor-profile-card';
import {
  Search,
  Stethoscope,
  User,
  LogOut,
  Sparkles,
  SlidersHorizontal,
  X,
  RotateCcw,
  MapPin,
  Briefcase,
  ArrowUpDown,
  Users,
} from 'lucide-react';

// Mock data
const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '15 years',
    hospital: 'City General Hospital',
    location: 'New York, NY',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop',
    availableSlots: ['9:00 AM', '10:00 AM', '2:00 PM'],
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    experience: '10 years',
    hospital: 'Metro Health Center',
    location: 'Los Angeles, CA',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
    availableSlots: ['11:00 AM', '3:00 PM', '4:00 PM'],
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    experience: '12 years',
    hospital: "Children's Hospital",
    location: 'Chicago, IL',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop',
    availableSlots: ['9:00 AM', '1:00 PM', '5:00 PM'],
  },
];

const SPECIALTIES = [
  { value: 'all', label: 'All specialties' },
  { value: 'cardiologist', label: 'Cardiologist' },
  { value: 'dermatologist', label: 'Dermatologist' },
  { value: 'pediatrician', label: 'Pediatrician' },
  { value: 'neurologist', label: 'Neurologist' },
];

const LOCATIONS = [
  { value: 'all', label: 'All locations' },
  { value: 'new york, ny', label: 'New York, NY' },
  { value: 'los angeles, ca', label: 'Los Angeles, CA' },
  { value: 'chicago, il', label: 'Chicago, IL' },
];

const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'name-az', label: 'Name (A–Z)' },
  { value: 'name-za', label: 'Name (Z–A)' },
  { value: 'experience', label: 'Experience' },
];

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const hasActiveFilters =
    selectedSpecialty !== 'all' || selectedLocation !== 'all';
  const clearFilters = () => {
    setSelectedSpecialty('all');
    setSelectedLocation('all');
  };

  const filteredAndSortedDoctors = useMemo(() => {
    let result = doctors.filter((doctor) => {
      const matchesSearch =
        !searchQuery.trim() ||
        [doctor.name, doctor.specialty, doctor.hospital, doctor.location]
          .filter(Boolean)
          .some((s) =>
            String(s).toLowerCase().includes(searchQuery.trim().toLowerCase()),
          );
      const matchesSpecialty =
        selectedSpecialty === 'all' ||
        doctor.specialty.toLowerCase() === selectedSpecialty;
      const matchesLocation =
        selectedLocation === 'all' ||
        doctor.location?.toLowerCase() === selectedLocation;
      return matchesSearch && matchesSpecialty && matchesLocation;
    });

    if (sortBy === 'name-az') {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
      );
    } else if (sortBy === 'name-za') {
      result = [...result].sort((a, b) =>
        b.name.localeCompare(a.name, undefined, { sensitivity: 'base' }),
      );
    } else if (sortBy === 'experience') {
      result = [...result].sort((a, b) => {
        const parseYears = (s: string | undefined) =>
          parseInt(String(s || '0').replace(/\D/g, ''), 10) || 0;
        return parseYears(b.experience) - parseYears(a.experience);
      });
    }

    return result;
  }, [searchQuery, selectedSpecialty, selectedLocation, sortBy]);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-primary/3">
      {/* Ambient background */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-[320px] h-[320px] rounded-full bg-accent/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23000' fill-opacity='1' fill-rule='nonzero' opacity='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-white/80 backdrop-blur-xl supports-backdrop-filter:bg-white/70">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between max-w-7xl">
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl transition-colors"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/25 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:scale-[1.02]">
              <Stethoscope className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              DocApp
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-xl font-medium h-10 px-4"
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl font-medium h-10 px-4"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </nav>
        </div>
      </header>

      <main className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl">
        {/* Hero */}
        <AnimateOnScroll variant="fadeUp">
          <section className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-medium mb-6 border border-primary/10 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Find care near you
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight max-w-3xl mx-auto leading-[1.15]">
              Find the right doctor{' '}
              <span className="text-primary">for you</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              Search by name, specialty, or location and book an appointment in
              minutes.
            </p>
          </section>

          {/* Search & filters — floating bar design */}
          <div className="mb-12">
            {/* Main search bar */}
            <div className="group flex w-full rounded-full bg-white/95 dark:bg-white/10 border border-border/60 shadow-lg shadow-black/5 overflow-hidden ring-1 ring-black/5 transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary/40 focus-within:shadow-lg focus-within:shadow-primary/10 backdrop-blur-sm">
              <div className="relative flex-1 min-w-0 flex items-center">
                <Search className="absolute left-5 size-5 text-muted-foreground pointer-events-none transition-colors group-focus-within:text-primary/70" />
                <Input
                  className="pl-12 pr-10 h-14 sm:h-16 w-full rounded-none border-0 bg-transparent! shadow-none placeholder:text-muted-foreground/90 text-base focus-visible:ring-0 focus-visible:ring-offset-0 py-3"
                  placeholder="Search doctors, specialties, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
                  aria-label="Search doctors"
                />
                {searchQuery.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>
              <Button
                type="button"
                className="h-14 sm:h-16 px-6 sm:px-8 rounded-none bg-primary hover:bg-primary/90 text-white font-semibold shrink-0 rounded-r-full transition-all duration-200 active:scale-[0.98] hover:shadow-md hover:shadow-primary/20"
              >
                <Search className="h-5 w-5 sm:mr-2" />
                <span className="hidden sm:inline">Search</span>
              </Button>
            </div>

            {/* Filters */}
            <div className="mt-4 rounded-2xl border border-border/40 bg-white/60 dark:bg-white/5 backdrop-blur-sm overflow-hidden shadow-sm">
              <div
                className={`flex flex-col lg:flex-row lg:items-stretch ${hasActiveFilters ? 'lg:justify-between' : ''}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-3 px-4 py-3 lg:py-0 lg:px-5 lg:w-40 lg:shrink-0 border-b lg:border-b-0 lg:border-r border-border/40 bg-primary/10 dark:bg-primary/15">
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <SlidersHorizontal className="size-4 text-primary" />
                    Filters
                    {hasActiveFilters && (
                      <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold">
                        {
                          [
                            selectedSpecialty !== 'all',
                            selectedLocation !== 'all',
                          ].filter(Boolean).length
                        }
                      </span>
                    )}
                  </span>
                  {hasActiveFilters && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="lg:hidden h-8 px-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 text-xs font-medium"
                    >
                      <RotateCcw className="size-3.5 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>

                {/* Filter controls */}
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
                  {/* Specialty */}
                  <div className="flex flex-col gap-2 p-4 sm:p-5 min-w-0 sm:min-w-[240px] lg:min-w-[280px]">
                    <label
                      htmlFor="filter-specialty"
                      className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                    >
                      <Briefcase className="size-3.5 text-primary/80" />
                      Specialty
                    </label>
                    <Select
                      value={selectedSpecialty}
                      onValueChange={setSelectedSpecialty}
                    >
                      <SelectTrigger
                        id="filter-specialty"
                        className={`h-11 w-full rounded-xl border text-sm font-medium transition-all ${
                          selectedSpecialty !== 'all'
                            ? 'border-primary/50 bg-primary/5 text-foreground'
                            : 'border-border/60 bg-white dark:bg-white/10 hover:border-primary/30'
                        } focus:ring-2 focus:ring-primary/20 shadow-sm`}
                      >
                        <SelectValue placeholder="Choose specialty" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-border/60 shadow-lg">
                        {SPECIALTIES.map((opt) => (
                          <SelectItem
                            key={opt.value}
                            value={opt.value}
                            className="rounded-lg"
                          >
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-2 p-4 sm:p-5 min-w-0 sm:min-w-[240px] lg:min-w-[280px]">
                    <label
                      htmlFor="filter-location"
                      className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                    >
                      <MapPin className="size-3.5 text-primary/80" />
                      Location
                    </label>
                    <Select
                      value={selectedLocation}
                      onValueChange={setSelectedLocation}
                    >
                      <SelectTrigger
                        id="filter-location"
                        className={`h-11 w-full rounded-xl border text-sm font-medium transition-all ${
                          selectedLocation !== 'all'
                            ? 'border-primary/50 bg-primary/5 text-foreground'
                            : 'border-border/60 bg-white dark:bg-white/10 hover:border-primary/30'
                        } focus:ring-2 focus:ring-primary/20 shadow-sm`}
                      >
                        <SelectValue placeholder="Choose location" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-border/60 shadow-lg">
                        {LOCATIONS.map((opt) => (
                          <SelectItem
                            key={opt.value}
                            value={opt.value}
                            className="rounded-lg"
                          >
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sort */}
                  <div className="flex flex-col gap-2 p-4 sm:p-5 min-w-0 sm:min-w-[240px] lg:min-w-[280px]">
                    <label
                      htmlFor="filter-sort"
                      className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                    >
                      <ArrowUpDown className="size-3.5 text-primary/80" />
                      Sort by
                    </label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger
                        id="filter-sort"
                        className="h-11 w-full rounded-xl border border-border/60 bg-white dark:bg-white/10 text-sm font-medium shadow-sm hover:border-primary/30 focus:ring-2 focus:ring-primary/20 transition-colors"
                      >
                        <SelectValue placeholder="Sort" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-border/60 shadow-lg">
                        {SORT_OPTIONS.map((opt) => (
                          <SelectItem
                            key={opt.value}
                            value={opt.value}
                            className="rounded-lg"
                          >
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Clear filters — desktop */}
                {hasActiveFilters && (
                  <div className="hidden lg:flex lg:w-40 lg:shrink-0 justify-end items-center py-3 lg:py-0 lg:pl-4 lg:pr-5 border-t lg:border-t-0 lg:border-l border-border/40 bg-primary/5 dark:bg-primary/10">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="h-9 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 font-medium"
                    >
                      <RotateCcw className="size-3.5 mr-1.5" />
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          <section aria-labelledby="results-heading" className="scroll-mt-6">
            <h2
              id="results-heading"
              className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2"
            >
              <Users className="size-5 text-primary/80" />
              Available doctors
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              {filteredAndSortedDoctors.length === 0
                ? 'No doctors match your filters.'
                : `Showing ${filteredAndSortedDoctors.length} doctor${filteredAndSortedDoctors.length === 1 ? '' : 's'}`}
            </p>

            {filteredAndSortedDoctors.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {filteredAndSortedDoctors.map((doctor, i) => (
                  <AnimateOnScroll
                    key={doctor.id}
                    variant="scale"
                    delay={80 + i * 60}
                  >
                    <DoctorProfileCard doctor={doctor} />
                  </AnimateOnScroll>
                ))}
              </div>
            ) : (
              <AnimateOnScroll variant="fadeUp">
                <div className="rounded-2xl border border-dashed border-border/60 bg-primary/10 dark:bg-primary/15 py-16 px-6 text-center">
                  <p className="text-muted-foreground font-medium mb-2">
                    No results found
                  </p>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                    Try changing your search or filters to see more doctors.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery('');
                      clearFilters();
                    }}
                    className="rounded-xl"
                  >
                    <RotateCcw className="size-4 mr-2" />
                    Clear search & filters
                  </Button>
                </div>
              </AnimateOnScroll>
            )}
          </section>
        </AnimateOnScroll>
      </main>
    </div>
  );
}
