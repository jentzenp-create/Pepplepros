
import React from 'react';
import { Logo } from './Logo';
import { PHONE_NUMBER } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6E6E6]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="scale-[0.6] origin-left block">
          <Logo />
        </a>
        
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase text-charcoal/70">
          <a href="/#services" className="hover:text-charcoal transition-colors">Services</a>
          <a href="/#about" className="hover:text-charcoal transition-colors">Why Us</a>
          <a href="/#testimonials" className="hover:text-charcoal transition-colors">Reviews</a>
        </nav>

        <a 
          href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
          className="bg-charcoal text-white px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-deep-slate transition-all"
        >
          Call Now
        </a>
      </div>
    </header>
  );
};
