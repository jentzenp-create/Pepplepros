import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicePagesData from '../content/service-pages.json';

export const AreasPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Areas We Serve - Pepple Pros';
    window.scrollTo(0, 0);
  }, []);

  // Group pages by location
  const locationsMap: Record<string, typeof servicePagesData> = {};
  servicePagesData.forEach(page => {
    if (!locationsMap[page.city]) {
      locationsMap[page.city] = [];
    }
    locationsMap[page.city].push(page);
  });

  const locations = Object.keys(locationsMap).sort();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F2F2F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-charcoal mb-4">
            Areas We Serve
          </h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            Proudly providing top-tier interior upgrades, carpentry, and home repair services across the Hudson Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map(city => (
            <div key={city} className="bg-white rounded-xl p-8 shadow-sm border border-black/5 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-charcoal">{city}</h2>
              <ul className="space-y-3">
                {locationsMap[city].map(page => (
                  <li key={page.slug}>
                    <Link 
                      to={`/services/${page.slug}`} 
                      className="text-muted-blue hover:text-charcoal transition-colors underline decoration-muted-blue/30 underline-offset-4"
                    >
                      {page.h1.replace(` in ${city}`, '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
