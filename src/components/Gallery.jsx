import React from 'react';
import { motion } from 'framer-motion';
import galleryImage1 from '../assets/gallery_1.png'; // Local asset

const Gallery = () => {
    const images = [
        galleryImage1,
        "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616118132534-381148898bb8?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1546743391-7fef481545e8?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1536768138796-3c91cf881470?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1625708462887-190470c1e838?q=80&w=800&auto=format&fit=crop",
    ];

    return (
        <section id="gallery" className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-aqua-blue font-bold tracking-wide uppercase text-xs sm:text-sm mb-2">Portfolio</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-ocean-dark">Our Gallery</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-xl shadow-lg aspect-square group cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
