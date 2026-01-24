import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplet } from 'lucide-react';
import heroImage from '../assets/hero_bottle.png'; // Updated local asset

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-aqua-blue/10 pt-20">

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-aqua-blue/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white/80 py-2 px-4 rounded-full shadow-sm mb-6 border border-blue-100"
                    >
                        <Droplet className="w-4 h-4 text-aqua-blue fill-current" />
                        <span className="text-sm font-medium text-ocean-dark">Premium Custom Water Bottles</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-heading font-extrabold text-ocean-dark tracking-tight mb-6 leading-tight"
                    >
                        Our Bottle. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-blue to-sky-blue">
                            Your Brand.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Elevate your business image with premium, custom-labeled water bottles.
                        Perfect for hotels, corporate events, and restaurants.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 "
                    >
                        <a
                            href="#contact"
                            className="group bg-aqua-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-sky-blue transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Get Custom Bottles
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        {/* <a
                            href="#contact"
                            className="bg-white text-ocean-dark border-2 border-ocean-dark/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                        >
                            Request a Quote
                        </a> */}
                    </motion.div>
                </div>

                {/* Hero Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <img src={heroImage} alt="Premium Custom Water Bottle" className="w-full max-w-[500px] mx-auto drop-shadow-2xl rounded-3xl" />
                </motion.div>
            </div>


        </section>
    );
};

export default Hero;
