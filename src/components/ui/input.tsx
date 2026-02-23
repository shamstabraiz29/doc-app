import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** When true, shows red border for validation errors */
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex w-full rounded-md border bg-transparent px-3 text-sm text-foreground shadow-sm transition-all duration-200',
          'h-12 min-h-12 py-3 md:h-11 md:min-h-11 md:py-2 lg:h-12 lg:min-h-12 lg:py-3',
          'placeholder:text-muted-foreground focus-visible:outline-none',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Default: theme colors
          !error && [
            'border-primary/25 hover:border-primary/40 focus-visible:border-accent/50',
          ],
          // Error state: red for validation
          error && [
            'border-red-400 hover:border-red-500 focus-visible:border-red-400',
          ],
          className,
        )}
        ref={ref}
        aria-invalid={error}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
