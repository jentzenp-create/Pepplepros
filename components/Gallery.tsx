
import React, { useState } from 'react';

interface GalleryProject {
    title: string;
    description: string;
    images: { src: string; label: string }[];
}

const projects: GalleryProject[] = [
    {
        title: 'Recent Projects',
        description: 'A selection of our latest transformations, showing the quality and care we bring to every home.',
        images: [
            { src: '/job-photos/IMG_6459.JPEG', label: 'Project Photo' },
            { src: '/job-photos/IMG_6457.JPEG', label: 'Project Photo' },
            { src: '/job-photos/IMG_6373.JPEG', label: 'Project Photo' },
            { src: '/job-photos/IMG_6427.JPEG', label: 'Project Photo' },
            { src: '/job-photos/IMG_6143.JPEG', label: 'Project Photo' },
            { src: '/job-photos/IMG_6302.JPEG', label: 'Project Photo' },
            { src: '/job-photos/IMG_6479.JPEG', label: 'Project Photo' },
            { src: '/job-photos/IMG_6480.JPEG', label: 'Project Photo' },
            { src: '/job-photos/IMG_6481.JPEG', label: 'Project Photo' },
            { src: '/job-photos/IMG_6536.JPEG', label: 'Project Photo' },
        ],
    },
];

export const Gallery: React.FC = () => {
    const [activeProject] = useState(0);
    const [activeImage, setActiveImage] = useState(0);
    const project = projects[activeProject];

    const nextImage = () => {
        setActiveImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    };

    return (
        <section id="gallery" className="py-24 bg-[#F2F2F0]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-muted-blue mb-4">
                        Portfolio
                    </p>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-charcoal mb-4">
                        Our Work
                    </h2>
                    <p className="text-charcoal/50 max-w-xl mx-auto font-light">
                        Real projects. Real transformations. See the quality and care we bring to every home.
                    </p>
                </div>

                {/* Gallery Display */}
                <div className="max-w-4xl mx-auto">
                    {/* Main Image */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl mb-6 bg-charcoal aspect-[4/3] group">
                        <img
                            src={project.images[activeImage].src}
                            alt={`${project.title} - ${project.images[activeImage].label}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-opacity duration-500"
                        />
                        
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-charcoal p-2 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-charcoal"
                            aria-label="Previous image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-charcoal p-2 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-charcoal"
                            aria-label="Next image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                        {/* Image Counter */}
                        <div className="absolute top-6 right-6 bg-charcoal/70 backdrop-blur-sm px-4 py-1.5 rounded-full">
                            <span className="text-xs font-medium tracking-wider text-white">
                                {activeImage + 1} / {project.images.length}
                            </span>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    {project.images.length > 1 && (
                        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center">
                            {project.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`relative w-24 h-24 flex-shrink-0 snap-center rounded-md overflow-hidden transition-all duration-300 ${activeImage === index
                                            ? 'ring-2 ring-charcoal ring-offset-2 scale-105'
                                            : 'opacity-60 hover:opacity-90'
                                        }`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.label}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Project Info */}
                    <div className="text-center mt-8">
                        <h3 className="text-2xl font-semibold text-charcoal mb-2">
                            {project.title}
                        </h3>
                        <p className="text-charcoal/50 font-light max-w-lg mx-auto">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
