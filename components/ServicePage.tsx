import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import servicePagesData from '../content/service-pages.json';

export const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the exact service page match in our generated programmatic SEO JSON
  const pageData = servicePagesData.find(page => page.slug === slug);

  useEffect(() => {
    if (pageData) {
      document.title = pageData.metaTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', pageData.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = pageData.metaDescription;
        document.head.appendChild(meta);
      }
    }
  }, [pageData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!pageData) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-32 pb-16 min-h-screen bg-[#E6E6E6]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-black/5 p-8 md:p-12 prose prose-lg prose-charcoal max-w-none">
          <ReactMarkdown>{pageData.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
