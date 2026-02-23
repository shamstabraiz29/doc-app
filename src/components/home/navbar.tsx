'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Stethoscope, Sparkles } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="relative z-50 max-w-7xl mx-auto px-4 py-6 flex items-center justify-between backdrop-blur-sm bg-white/70 rounded-full mt-4 shadow-lg animate-fade-in">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Stethoscope className="h-8 w-8 text-[#388087] animate-pulse-slow" />
          <Sparkles className="h-4 w-4 text-[#6FB3B8] absolute -top-1 -right-1 animate-pulse" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-[#388087] to-[#6FB3B8] bg-clip-text text-transparent">
          DocApp
        </span>
      </div>
      <div className="flex gap-4">
        <Link href="/login">
          <Button variant="ghost">Sign In</Button>
        </Link>
        <Link href="/signup">
          <Button variant="default">Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}
