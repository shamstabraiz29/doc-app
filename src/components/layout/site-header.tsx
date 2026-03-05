'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/doctors', label: 'Find doctors' },
  { href: '/my-appointments', label: 'My appointments' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-6 z-40 flex justify-center bg-transparent">
      <div className="relative flex w-full max-w-7xl items-center justify-between rounded-full border border-white/70 bg-card/95 px-4 py-3 sm:py-4 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-md">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-white/60 px-2 py-1 pr-3 text-sm font-semibold text-[#2d6a70] shadow-sm shadow-white/40 transition hover:bg-white/80"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm shadow-primary/30">
            <span className="text-base font-semibold leading-none">+</span>
          </div>
          <span className="tracking-tight">DocApp</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative font-medium text-muted-foreground transition-colors hover:text-[#2d6a70]',
                isActive(item.href) && 'text-[#2d6a70]',
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary/70" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop auth actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/signin">
            <Button
              variant="ghost"
              className="h-9 px-3 text-sm font-medium text-muted-foreground hover:text-[#2d6a70]"
            >
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="sm"
              className="h-9 rounded-full px-4 text-sm font-semibold shadow-sm shadow-primary/40"
            >
              Get started
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/70 p-2 text-[#2d6a70] shadow-sm backdrop-blur-md transition hover:bg-white md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-3 top-full mt-3 rounded-3xl border border-white/70 bg-card/95 p-4 shadow-xl shadow-black/10 backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-1 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between rounded-full px-3 py-2 font-medium text-muted-foreground transition-colors hover:bg-white/70 hover:text-[#2d6a70]',
                    isActive(item.href) && 'bg-white/80 text-[#2d6a70]',
                  )}
                >
                  <span>{item.label}</span>
                  {isActive(item.href) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="mt-3 flex gap-2">
              <Link
                href="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1"
              >
                <Button
                  variant="outline"
                  className="h-9 w-full rounded-full border-white/60 bg-white/80 text-sm font-medium text-[#2d6a70] hover:bg-white"
                >
                  Sign in
                </Button>
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1"
              >
                <Button className="h-9 w-full rounded-full text-sm font-semibold shadow-sm shadow-primary/40">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
