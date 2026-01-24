import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Droplets, FlaskConical, Waves, ShieldCheck, SearchCheck } from 'lucide-react';

const Manufacturing = () => {
    const steps = [
        {
            icon: <Waves className="w-8 h-8" />,
            title: "Sand Filtration",
            desc: "Removes visible impurities and suspended particles."
        },
        {
            icon: <Filter className="w-8 h-8" />,
            title: "Activated Carbon",
            desc: "Eliminates biological contaminants and odors."
        },
        {
            icon: <FlaskConical className="w-8 h-8" />,
            title: "RO Purification",
            desc: "Reverse Osmosis removes dissolved solids."
        },
        {
            icon: <Droplets className="w-8 h-8" />,
            title: "UV Sterilization",
            desc: "Double protection against microbes."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Ozonation",
            desc: "Ensures long shelf life and purity."
        },
        {
            icon: <SearchCheck className="w-8 h-8" />,
            title: "Quality Control",
            desc: "Rigorous testing before packaging."
        }
    ];

    return (
        <section id="process" className="py-16 md:py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-aqua-blue font-bold tracking-wide uppercase text-xs sm:text-sm mb-2">Our Process</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-ocean-dark">Hygiene Meets Technology</h3>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-2">
                        We follow a rigorous 7-stage purification process to ensure every drop is safe, healthy, and crystal clear.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center text-aqua-blue mb-6 group-hover:bg-aqua-blue group-hover:text-white transition-colors duration-300">
                                {step.icon}
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-4xl md:text-5xl font-bold text-gray-100 absolute right-4 top-4 -z-0 select-none group-hover:text-blue-50 transition-colors">
                                    0{index + 1}
                                </span>
                                <h4 className="text-lg md:text-xl font-bold text-ocean-dark relative z-10">{step.title}</h4>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base relative z-10">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Manufacturing;
