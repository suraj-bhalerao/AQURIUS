import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import aboutImage from '../assets/about.png'; // Local asset

const Counter = ({ from, to, duration }) => {
    const spring = useSpring(from, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        spring.set(to);
    }, [spring, to]);

    return <motion.span>{display}</motion.span>;
};

const About = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-6 h-6 text-aqua-blue" />,
            title: "Premium Quality",
            desc: "7-step purification process ensuring the purest taste."
        },
        {
            icon: <HeartHandshake className="w-6 h-6 text-aqua-blue" />,
            title: "Custom Branding",
            desc: "Expert design team to match your brand identity perfectly."
        },
        {
            icon: <Leaf className="w-6 h-6 text-aqua-blue" />,
            title: "Eco-Conscious",
            desc: "100% recyclable bottles and sustainable practices."
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[450px] md:h-[600px]">
                            <img
                                src={aboutImage} // Using local image
                                alt="Modern Water Bottling Plant"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white max-w-xs">
                                <p className="font-bold text-lg">Since 2026</p>
                                <p className="text-sm opacity-90">Delivering purity and trust across the region.</p>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block border border-gray-100">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="text-4xl font-bold text-aqua-blue">
                                    <Counter from={0} to={10} duration={2} />+
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Happy Clients Served</p>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-aqua-blue font-bold tracking-wide uppercase text-sm mb-2">About Us</h2>
                        <h3 className="text-4xl font-heading font-bold text-ocean-dark mb-6">More Than Just Water. <br /> A Reflection of Your Brand.</h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            At AQURIUS, we believe that water is the essence of life and a powerful medium for your brand. We specialize in providing ultra-pure, reverse-osmosis filtered water in custom-designed bottles that elevate your corporate identity.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                                    <div className="bg-white p-3 rounded-lg shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-ocean-dark text-lg mb-1">{feature.title}</h4>
                                        <p className="text-gray-600/80">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
