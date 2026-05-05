
import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-light-gray relative overflow-hidden">
      {/* Decorative mountain background line - very subtle */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,224L120,202.7C240,181,480,139,720,138.7C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" fill="#1A1A1A"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-charcoal/40 mb-4">Proof of Competence</h2>
          <h3 className="text-4xl font-medium tracking-tight">What Neighbors Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/40 p-10 border border-charcoal/5 backdrop-blur-sm">
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-charcoal" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic font-light text-charcoal/80 mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <p className="font-semibold text-charcoal">{t.author}</p>
                <p className="text-xs text-charcoal/40 uppercase tracking-widest">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
