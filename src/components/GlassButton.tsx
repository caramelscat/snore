import React from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'hero';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'glass-button hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]',
      secondary: 'glass-button hover:border-accent hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]',
      hero: 'glass-button text-lg px-12 py-5 hover:border-neon-blue hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.6)] text-glow'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <button
        className={cn(variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export { GlassButton };