import React from 'react';
import { Hero } from './Hero';
import { ValueProps } from './ValueProps';
import { Services } from './Services';
import { Gallery } from './Gallery';
import { Testimonials } from './Testimonials';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueProps />
      <Services />
      <Gallery />
      <Testimonials />
    </>
  );
};
