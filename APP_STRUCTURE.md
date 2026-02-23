# DocApp - Doctor Appointment MVP Structure

## 🎨 Color Theme
- Primary: `#388087` (Dark Teal)
- Accent: `#6FB3B8` (Medium Teal)
- Secondary: `#BADFE7` (Light Teal)
- Success/Muted: `#C2EDCE` (Light Green)
- Background: `#F6F6F2` (Off-white)

## 📁 Application Structure

### Authentication Pages (`/app/(auth)/`)
- **`/login`** - User login page with email/password
- **`/signup`** - User registration (Name, Email, Phone, Password)
- **`/forgot-password`** - Password reset flow

### User Flow (`/app/`)
- **`/`** - Landing page with hero section and features
- **`/dashboard`** - User dashboard with:
  - Upcoming appointments section
  - Doctor search with filters (specialty, location)
  - Doctor cards with available slots
- **`/doctors/[id]`** - Doctor profile page with:
  - Doctor information and bio
  - Calendar-based date selection
  - Time slot selection
  - Reason for visit (optional)
  - Booking confirmation modal
- **`/my-appointments`** - User appointments page with:
  - Filter by All/Upcoming/Past
  - Appointment cards with status badges
  - Cancel and Reschedule options

### Doctor Admin Flow (`/app/doctor-dashboard/`)
- **Dashboard Tab**:
  - Statistics cards (Today's, Upcoming, Pending, Completed)
  - Today's appointments list
  - Upcoming appointments
- **Appointments Tab**:
  - All appointments management
  - Accept/Reject functionality
  - View patient details
- **Availability Tab**:
  - Set working days
  - Configure time slots
  - Block specific dates
- **Profile Tab**:
  - Edit doctor profile
  - Update specialty, experience, hospital, location, bio

### Super Admin Flow (`/app/admin-dashboard/`)
- **Dashboard Tab**:
  - System statistics (Total Users, Doctors, Appointments)
  - Recent activity
  - System analytics
- **Doctors Tab**:
  - Add/Edit/Delete doctors
  - Activate/Deactivate doctors
  - View doctor statistics
- **Users Tab**:
  - View all users
  - Block/Unblock users
  - Delete users
- **Specialties Tab**:
  - Add/Edit/Delete specialties
  - View specialty statistics
- **Appointments Tab**:
  - Monitor all appointments
  - Filter by status/date
  - Force cancel appointments

## 🎭 UI Components (`/components/ui/`)
- `button.tsx` - Button component with variants
- `input.tsx` - Input field component
- `card.tsx` - Card components (Card, CardHeader, CardContent, etc.)
- `badge.tsx` - Badge component with status variants
- `label.tsx` - Label component
- `textarea.tsx` - Textarea component
- `select.tsx` - Select dropdown component

## ✨ Features Implemented
- ✅ Modern gradient backgrounds
- ✅ Smooth animations (fade-in, slide-up, scale-in)
- ✅ Color-coded status badges
- ✅ Responsive mobile-first design
- ✅ Calendar-based booking interface
- ✅ Real-time slot selection
- ✅ Role-based dashboards
- ✅ Clean, modern UI with hover effects
- ✅ Consistent color theme throughout

## 🚀 Getting Started
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## 📝 Notes
- All pages are UX-only (no backend functionality)
- Uses mock data for demonstration
- All animations and transitions are implemented
- Mobile-responsive design throughout
- Modern UI patterns with smooth interactions
