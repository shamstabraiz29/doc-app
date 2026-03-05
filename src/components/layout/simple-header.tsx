'use client';

import Link from 'next/link';

import { MainContainer } from './main-container';

export function SimpleHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <MainContainer className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm shadow-primary/30">
            <span className="text-base font-semibold">+</span>
          </div>
          <span className="text-base font-semibold tracking-tight">DocApp</span>
        </Link>

        <Link
          href="/doctors"
          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/40 transition hover:bg-primary/90"
        >
          Book appointment
        </Link>
      </MainContainer>
    </header>
  );
}
