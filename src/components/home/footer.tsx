'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Stethoscope,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-gray-200/50 bg-gradient-to-b from-white/90 to-[#F6F6F2]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <AnimateOnScroll variant="fadeUp" delay={0}>
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="relative">
                    <Stethoscope className="h-7 w-7 text-[#388087]" />
                    <Sparkles className="h-3 w-3 text-[#6FB3B8] absolute -top-1 -right-1" />
                  </div>
                  <span className="text-2xl font-bold text-[#2d6a70] [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]">
                    DocApp
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Your trusted healthcare companion for seamless appointment
                  booking and management.
                </p>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#388087] to-[#6FB3B8] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-md">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6FB3B8] to-[#BADFE7] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-md">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={80}>
              <div>
                <h4 className="font-bold text-[#2d6a70] mb-6 text-lg">
                  Quick Links
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-gray-600 hover:text-[#388087] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-4 w-4 text-[#388087] opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doctors"
                      className="text-gray-600 hover:text-[#388087] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-4 w-4 text-[#388087] opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                      <span>Find Doctors</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my-appointments"
                      className="text-gray-600 hover:text-[#388087] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-4 w-4 text-[#388087] opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                      <span>My Appointments</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={160}>
              <div>
                <h4 className="font-bold text-[#2d6a70] mb-6 text-lg">
                  Support
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-gray-600 hover:text-[#388087] transition-colors duration-300">
                    <div className="w-8 h-8 rounded-lg bg-[#388087]/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-[#388087]" />
                    </div>
                    <span>1-800-DOCAPP</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 hover:text-[#388087] transition-colors duration-300">
                    <div className="w-8 h-8 rounded-lg bg-[#388087]/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-[#388087]" />
                    </div>
                    <span>support@docapp.com</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600 hover:text-[#388087] transition-colors duration-300">
                    <div className="w-8 h-8 rounded-lg bg-[#388087]/10 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-[#388087]" />
                    </div>
                    <span>24/7 Available</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={240}>
              <div>
                <h4 className="font-bold text-[#2d6a70] mb-6 text-lg">
                  Get Started
                </h4>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      href: '/signup',
                      label: 'Sign Up Free',
                      variant: 'default' as const,
                      showArrow: true,
                    },
                    {
                      href: '/login',
                      label: 'Sign In',
                      variant: 'outline' as const,
                      showArrow: false,
                    },
                  ].map(({ href, label, variant, showArrow }) => (
                    <Link key={href} href={href}>
                      <Button size="lg" variant={variant} className="w-full">
                        {label}
                        {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="pt-8 border-t border-gray-200/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                &copy; 2026 DocApp. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-600">
                <Link
                  href="#"
                  className="hover:text-[#388087] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#388087] transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#388087] transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
