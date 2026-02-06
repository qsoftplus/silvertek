import * as React from 'react';
import { cn } from '@/lib/utils';

interface SilvertekLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  withText?: boolean;
  textColor?: string;
}

export function SilvertekLogo({ className, withText = true, textColor = "text-slate-900", ...props }: SilvertekLogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-primary"
        {...props}
      >
        {/* Outer Shield/Badge Shape */}
        <path
          d="M50 5L90 25V60C90 75 75 90 50 95C25 90 10 75 10 60V25L50 5Z"
          className="fill-slate-900"
          stroke="currentColor" 
          strokeWidth="3"
        />
        
        {/* Dynamic 'S' Shape */}
        <path
          d="M65 35H40C37.2386 35 35 37.2386 35 40V42C35 44.7614 37.2386 47 40 47H60C62.7614 47 65 49.2386 65 52V60C65 62.7614 62.7614 65 60 65H35"
          className="stroke-white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Accent Dot/Bolt */}
        <circle cx="70" cy="30" r="5" className="fill-current text-primary animate-pulse" />
      </svg>
      {withText && (
        <span className={cn("text-2xl font-black uppercase tracking-tighter", textColor)}>
          Silver<span className="text-primary">tek</span>
        </span>
      )}
    </div>
  );
}
