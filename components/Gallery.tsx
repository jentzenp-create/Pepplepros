
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
                    <div className="relative rounded-lg overflow-hidden shadow-2xl mb-6 bg-charcoal aspect-[4/3]">
                        <img
                            src={project.images[activeImage].src}
                            alt={`${project.title} - ${project.images[activeImage].label}`}
                            className="w-full h-full object-cover transition-opacity duration-500"
                        />
                        {/* Label Badge */}
                        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg">
                            <span className="text-sm font-semibold tracking-wide text-charcoal">
                                {project.images[activeImage].label}
                            </span>
                        </div>
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
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 bg-charcoal/70 py-0.5">
                                        <span className="text-[8px] font-bold tracking-wider text-white uppercase">
                                            {img.label}
                                        </span>
                                    </div>
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
