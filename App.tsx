import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ServicePage } from './components/ServicePage';
import { AreasPage } from './components/AreasPage';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/#')) {
        const targetId = target.getAttribute('href')?.substring(1);
        if (targetId && window.location.pathname === '/') {
          e.preventDefault();
          const element = document.querySelector(targetId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
            // Update URL without jump
            window.history.pushState(null, '', `/${targetId}`);
          }
        }
      }
    };
    
    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen selection:bg-charcoal selection:text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/areas" element={<AreasPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
