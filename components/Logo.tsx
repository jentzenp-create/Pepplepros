
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const color = variant === 'dark' ? '#2D2D2D' : '#E6E6E6';

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Roof / House Icon */}
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Chimney */}
        <rect x="16" y="8" width="4" height="12" stroke={color} strokeWidth="1.8" fill="none" />
        {/* Roof lines */}
        <polyline
          points="5,35 40,10 75,35"
          stroke={color}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text */}
      <span
        className="text-xl font-semibold tracking-wide leading-none mt-0.5"
        style={{
          color,
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '0.02em'
        }}
      >
        Pepple Pros
      </span>
    </div>
  );
};
