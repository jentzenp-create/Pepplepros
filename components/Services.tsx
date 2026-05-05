
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-charcoal/40 mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-charcoal">
            Professional Solutions <br /> For Your Home.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/5 border border-charcoal/5">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-10 hover:bg-light-gray transition-colors duration-500 group">
              <div className="w-12 h-12 mb-8 text-charcoal/30 group-hover:text-charcoal transition-colors">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
              <h4 className="text-xl font-medium mb-4 tracking-tight">{service.title}</h4>
              <p className="text-charcoal/50 font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-xs font-bold tracking-widest uppercase text-charcoal opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
