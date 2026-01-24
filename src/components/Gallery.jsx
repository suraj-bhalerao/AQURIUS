import React from 'react';
import { motion } from 'framer-motion';
import galleryImage1 from '../assets/gallery_1.png';
import galleryHotel from '../assets/gallery_hotel.png';
import galleryEvent from '../assets/gallery_event.png';
import galleryFactory from '../assets/gallery_factory.png';
import galleryRestaurant from '../assets/gallery_restaurant.png';
import galleryDelivery from '../assets/gallery_delivery.png';

const Gallery = () => {
    const images = [
        galleryImage1,
        galleryHotel,
        galleryEvent,
        galleryFactory,
        galleryRestaurant,
        galleryDelivery, // here is images
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
