'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Stethoscope, Eye, EyeOff } from 'lucide-react';
import { GoogleIcon, FacebookIcon } from '@/icons';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
            Book appointments with doctors effortlesslyi
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-white/80 max-w-sm">
            Sign in to manage your visits and stay on top of your health.
          </p>
        </div>
      </div>

      {/* Right: Form panel */}
      <div className="flex-1 flex items-center justify-center p-3 sm:p-5 md:p-8 lg:p-12 bg-[#F6F6F2] min-h-0 overflow-y-auto pb-[env(safe-area-inset-bottom)]">
        <div className="w-full max-w-[480px] sm:max-w-[520px] my-auto py-2 sm:py-4 md:py-6">
          {/* Split headline: "Welcome" neutral, "back" teal + thin rule */}
          <div className="animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-neutral-800">Welcome </span>
              <span className="text-primary">back</span>
            </h2>
            <p className="mt-1.5 sm:mt-2 text-sm text-neutral-500">
              Sign in to your account to continue
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
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-neutral-700"
                  >
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[#388087] hover:text-[#2d6a70] hover:underline shrink-0"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 rounded-md bg-[#388087] hover:bg-[#2d6a70] text-white font-semibold text-base shadow-md hover:shadow-lg transition-shadow"
                size="lg"
              >
                Sign in
              </Button>
            </form>

            <div className="my-6 sm:my-8 flex items-center gap-3">
              <span className="flex-1 h-px bg-neutral-200" aria-hidden />
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">
                or continue with
              </span>
              <span className="flex-1 h-px bg-neutral-200" aria-hidden />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Button
                type="button"
                variant="outline"
                className="h-12 rounded-md border border-primary/25 bg-transparent text-neutral-700 font-medium justify-center gap-2.5 hover:bg-neutral-50 hover:border-primary/40 hover:text-neutral-800"
              >
                <GoogleIcon className="size-5 shrink-0" />
                <span className="truncate">Google</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 rounded-md border border-primary/25 bg-transparent text-neutral-700 font-medium justify-center gap-2.5 hover:bg-neutral-50 hover:border-primary/40 hover:text-neutral-800"
              >
                <FacebookIcon className="size-5 shrink-0" />
                <span className="truncate">Facebook</span>
              </Button>
            </div>

            <p className="mt-6 sm:mt-8 text-center text-sm text-neutral-500">
              Don&apos;t have an account?{' '}
              <Link
                href="/signup"
                className="text-[#388087] font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
