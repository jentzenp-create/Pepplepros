
import React from 'react';
import { PHONE_NUMBER } from '../constants';

// Hero background image - elegant living room interior
const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80&auto=format&fit=crop';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/components/hero-image.jpg"
          alt="Elegant modern living room with dark blue walls and herringbone fireplace"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <p className="text-[10px] font-bold tracking-widest uppercase opacity-80">Serving the Hudson Valley</p>
        </div>

        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-glow leading-[1.1]">
          Precision Home Care <br />
          <span className="font-light opacity-60">Done Right First.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Professional, dependable, and modern home services with clarity and precision. No unnecessary noise, just quality work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-white text-charcoal font-semibold tracking-widest uppercase hover:bg-light-gray transition-all transform hover:-translate-y-1"
          >
            Get a Quote
          </a>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
            className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-semibold tracking-widest uppercase hover:bg-white/5 transition-all"
          >
            Call {PHONE_NUMBER}
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30">
          <span className="text-xs font-bold tracking-[0.5em] uppercase">Interior</span>
          <span className="text-xs font-bold tracking-[0.5em] uppercase">Repair</span>
          <span className="text-xs font-bold tracking-[0.5em] uppercase">Smart Home</span>
          <span className="text-xs font-bold tracking-[0.5em] uppercase">Carpentry</span>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};
