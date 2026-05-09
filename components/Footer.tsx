
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { PHONE_NUMBER, EMAIL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-charcoal text-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-20 flex justify-center scale-110">
          <Logo variant="light" />
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.5em] uppercase text-white/40 mb-8">Ready to start?</h2>
          <p className="text-4xl md:text-6xl font-medium tracking-tight mb-12">
            Professional Home Care <br />
            Is One Call Away.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="bg-white text-charcoal p-8 group hover:bg-light-gray transition-all transform hover:-translate-y-1"
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-2 opacity-60">Text or Call</p>
              <p className="text-3xl font-medium tracking-tight">{PHONE_NUMBER}</p>
            </a>
            <a 
              href={`mailto:${EMAIL}`}
              className="border border-white/20 p-8 hover:bg-white/5 transition-all transform hover:-translate-y-1"
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-2 opacity-40">Email Us</p>
              <p className="text-2xl font-medium tracking-tight break-all">{EMAIL}</p>
            </a>
          </div>

          <div className="h-[1px] w-full bg-white/10 mb-12"></div>

          <div className="flex flex-col md:flex-row items-center justify-between text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">
            <p>&copy; {new Date().getFullYear()} Pepple Pros Home Services</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link to="/areas" className="hover:text-white transition-colors">Service Areas</Link>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
