
import { Service, Testimonial, ValueProp } from './types';

export const PHONE_NUMBER = "(845) 603-2095";
export const EMAIL = "pepplepros@gmail.com";

export const SERVICES: Service[] = [
  {
    id: 'interior-upgrades',
    title: 'Interior Upgrades',
    description: 'Transform your living space with expert cabinetry, flooring, and modern interior enhancements.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    id: 'wall-repair',
    title: 'Wall Repair & Paint',
    description: 'Flawless drywall repair, textures, and premium paint refreshes for a crisp, new look.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
  },
  {
    id: 'fixtures',
    title: 'Fixture Upgrades',
    description: 'Professional installation of modern plumbing and electrical fixtures to modernize your home.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 'smart-home',
    title: 'Smart Device Install',
    description: 'Seamless integration of smart thermostats, security cameras, and automated lighting systems.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
  },
  {
    id: 'carpentry',
    title: 'Carpentry Work',
    description: 'Custom shelving, trim work, and precision wood craftsmanship built to last.',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Professional & Competent',
    description: 'We treat every home with the respect it deserves, delivering precision results without the fluff.'
  },
  {
    title: 'Reliable Timing',
    description: 'We value your schedule. Our team arrives on time and completes projects efficiently.'
  },
  {
    title: 'Modern Solutions',
    description: 'From smart home installs to contemporary interior design, we bring your home into the future.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'James R.',
    location: 'Hudson Valley',
    content: 'Pepple Pros fixed what three other guys couldn\'t. Clean, professional, and no unnecessary talk. Highly recommend.',
    rating: 5
  },
  {
    id: '2',
    author: 'Sarah M.',
    location: 'Beacon, NY',
    content: 'The smart home installation was seamless. They explained everything clearly and the craftsmanship is top-tier.',
    rating: 5
  },
  {
    id: '3',
    author: 'David L.',
    location: 'Poughkeepsie',
    content: 'Professional from start to finish. Our interior upgrade looks like it belongs in a magazine.',
    rating: 5
  }
];
