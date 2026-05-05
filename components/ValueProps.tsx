
import React from 'react';
import { VALUE_PROPS } from '../constants';

export const ValueProps: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {VALUE_PROPS.map((prop, idx) => (
            <div key={idx} className="group">
              <div className="w-12 h-[1px] bg-charcoal mb-6 group-hover:w-20 transition-all duration-500"></div>
              <h3 className="text-2xl font-medium mb-4 tracking-tight">{prop.title}</h3>
              <p className="text-charcoal/60 font-light leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
