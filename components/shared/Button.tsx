import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'gold' | 'outline' | 'dark' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer rounded-sm select-none';

const variants: Record<ButtonVariant, string> = {
  gold:
    'bg-gradient-to-b from-amber-200 via-orange-400 to-yellow-700 text-stone-900 hover:opacity-90',
  outline:
    'bg-zinc-100/30 outline outline-1 outline-offset-[-1px] outline-neutral-400 text-white hover:bg-zinc-100/40',
  dark:
    'bg-stone-900 text-white hover:bg-stone-800',
  ghost:
    'bg-transparent text-zinc-400 hover:text-white',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-2 text-sm leading-5',
  md: 'px-3.5 py-3 text-lg leading-7',
  lg: 'px-3.5 py-5 text-2xl leading-8',
  xl: 'px-6 py-5 text-2xl leading-8',
};

export function Button({
  variant = 'gold',
  size = 'lg',
  href,
  external,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
