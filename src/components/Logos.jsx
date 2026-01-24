import React from 'react';

const Logos = () => {
    const logos = [
        { name: "Hotel Pancharatna", color: "bg-blue-100" },
        { name: "Ashoka Khanawal", color: "bg-green-100" },
        { name: "Hotel SK", color: "bg-purple-100" },
        { name: "Ranwara Hotel", color: "bg-pink-100" },
        { name: "Hotel New Mayur", color: "bg-orange-100" },
        // { name: "Poms Hotel", color: "bg-indigo-100" },
    ];

    return (
        <section className="py-16 bg-blue-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-xl font-bold text-gray-500 mb-8 uppercase tracking-widest">Client Showcase</h3>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <div key={index} className={`h-16 w-auto ${logo.color} rounded-2xl flex items-center justify-center shadow-sm font-bold text-gray-700 px-4 m-1`}>
                            {logo.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
