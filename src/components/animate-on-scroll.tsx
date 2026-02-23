'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Variant = 'fadeUp' | 'scale' | 'slideRight' | 'slideLeft';

interface AnimateOnScrollProps {
  variant?: Variant;
  delay?: number;
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  fadeUp:
    'translate-y-8 opacity-0 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100',
  scale:
    'scale-95 opacity-0 data-[visible=true]:scale-100 data-[visible=true]:opacity-100',
  slideRight:
    'translate-x-8 opacity-0 data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100',
  slideLeft:
    '-translate-x-8 opacity-0 data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100',
};

export function AnimateOnScroll({
  variant = 'fadeUp',
  delay = 0,
  className = '',
  children,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`transition-all duration-700 ease-out ${variantStyles[variant]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
