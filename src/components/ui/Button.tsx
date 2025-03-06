
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'relative rounded-full font-medium transition-all duration-300 focus:outline-none',
          'active:scale-[0.98] hover:scale-[1.02]',
          variant === 'primary' && 'bg-black text-white hover:bg-black/90',
          variant === 'secondary' && 'bg-white text-black border border-black/10 hover:bg-white/90',
          variant === 'text' && 'bg-transparent text-black hover:bg-black/5',
          size === 'sm' && 'text-xs px-4 py-2',
          size === 'md' && 'text-sm px-6 py-3',
          size === 'lg' && 'text-base px-8 py-4',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
