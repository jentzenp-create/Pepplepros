
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-charcoal selection:text-white">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Services />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
