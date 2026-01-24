import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            text: "The custom bottles from AQURIUS elevated our hotel's branding significantly. Guests love the premium feel!",
            author: "Rajesh Kumar",
            role: "General Manager, Grand Hotel"
        },
        {
            text: "Fast delivery, crystal clear water, and the label print quality is unmatched. Highly recommended for corporate events.",
            author: "Anita Desai",
            role: "Event Coordinator, TechSummit"
        },
        {
            text: "We switched to AQURIUS for our restaurant chain. The consistency in quality and service is impressive.",
            author: "Vikram Singh",
            role: "Owner, Zen Dining"
        }
    ];

    return (
        <section className="py-20 bg-blue-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-aqua-blue font-bold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
                    <h3 className="text-4xl font-heading font-bold text-ocean-dark">Trusted by Businesses</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                        >
                            <Quote className="absolute top-6 right-6 text-blue-100 w-12 h-12 rotate-180" />
                            <p className="text-gray-600 mb-6 relative z-10 italic">"{item.text}"</p>
                            <div>
                                <h4 className="font-bold text-ocean-dark">{item.author}</h4>
                                <p className="text-sm text-gray-500">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
