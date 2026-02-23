'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Stethoscope } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-dvh flex flex-col md:flex-row animate-fade-in overflow-x-hidden">
      {/* Left: Brand panel - hidden on mobile, shown on tablet+ */}
      <div className="relative hidden md:flex md:w-[44%] lg:w-[48%] flex-col justify-center px-8 md:px-10 lg:px-16 py-12 md:py-14 lg:py-16 bg-linear-to-br from-[#388087] via-[#2d6a70] to-[#1e4a4e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#BADFE7] blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6 md:mb-8 lg:mb-10">
            <div className="p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg">
              <Stethoscope className="h-8 w-8 md:h-9 md:w-9" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              DocApp
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-sm">
            Book appointments with doctors effortlessly
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-white/80 max-w-sm">
            Reset your password to get back to managing your visits.
          </p>
        </div>
      </div>

      {/* Right: Form panel */}
      <div className="flex-1 flex items-center justify-center p-3 sm:p-5 md:p-8 lg:p-12 bg-[#F6F6F2] min-h-0 overflow-y-auto pb-[env(safe-area-inset-bottom)]">
        <div className="w-full max-w-[480px] sm:max-w-[520px] my-auto py-2 sm:py-4 md:py-6">
          {/* Split headline + thin rule (matches login) */}
          <div className="animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-neutral-800">Forgot </span>
              <span className="text-primary">password?</span>
            </h2>
            <p className="mt-1.5 sm:mt-2 text-sm text-neutral-500">
              Enter your email and we&apos;ll send you a reset link
            </p>
            <div className="mt-4 sm:mt-5 h-px w-12 bg-neutral-200 rounded-full" />

            <form
              className="mt-6 sm:mt-8 space-y-5 sm:space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-neutral-700"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 rounded-md bg-[#388087] hover:bg-[#2d6a70] text-white font-semibold text-base shadow-md hover:shadow-lg transition-shadow"
                size="lg"
              >
                Send reset link
              </Button>
            </form>

            <p className="mt-6 sm:mt-8 text-center text-sm text-neutral-500">
              <Link
                href="/login"
                className="text-[#388087] font-semibold hover:underline"
              >
                Back to sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
