'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Stethoscope, Sparkles, Menu, X } from 'lucide-react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mobileMenu = menuOpen && (
    <div
      className="fixed inset-0 z-[100] animate-fade-in md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden
        onClick={() => setMenuOpen(false)}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-white/95 backdrop-blur-md px-6">
        <button
          type="button"
          aria-label="Close menu"
          className="absolute top-4 right-4 p-2 rounded-full text-[#388087] hover:bg-[#388087]/10 transition-colors z-10"
          onClick={() => setMenuOpen(false)}
        >
          <X className="h-8 w-8" />
        </button>
        <Link
          href="/login"
          onClick={() => setMenuOpen(false)}
          className="w-full max-w-xs"
        >
          <Button
            variant="ghost"
            size="lg"
            className="w-full text-lg py-6 rounded-xl"
          >
            Sign In
          </Button>
        </Link>
        <Link
          href="/signup"
          onClick={() => setMenuOpen(false)}
          className="w-full max-w-xs"
        >
          <Button
            variant="default"
            size="lg"
            className="w-full text-lg py-6 rounded-xl"
          >
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <nav className="relative z-50 w-full md:max-w-7xl md:mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-6 flex items-center justify-between backdrop-blur-sm bg-white/70 rounded-none md:rounded-full mt-0 md:mt-4 shadow-lg animate-fade-in">
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative">
            <Stethoscope className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#388087] animate-pulse-slow" />
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-[#6FB3B8] absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 animate-pulse" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-[#2d6a70] [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]">
            DocApp
          </span>
        </Link>

        {/* Desktop & tablet: inline buttons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <Link href="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button variant="default">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile: hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-full text-[#388087] hover:bg-[#388087]/10 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile full-screen menu: render in body so it's not clipped by overflow-hidden */}
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
