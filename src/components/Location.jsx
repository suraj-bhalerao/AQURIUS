import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-aqua-blue font-bold tracking-wide uppercase text-xs sm:text-sm mb-2">Visit Us</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-ocean-dark">Our Location</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Info Side */}
                    <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center space-y-6 md:space-y-8 bg-slate-50">
                        <div className="space-y-2">
                            <h4 className="text-xl md:text-2xl font-bold text-ocean-dark mb-4">AQURIUS HQ</h4>
                            <div className="flex items-start gap-4 text-gray-600 text-sm md:text-base">
                                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-aqua-blue flex-shrink-0 mt-1" />
                                <p>HNO 994, Near Pune-Nashik Highway, Peth<br /> Tal - Ambegaon, Dist - Pune,<br /> Pin- Code : 410512</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-600 text-sm md:text-base">
                                <Phone className="w-5 h-5 md:w-6 md:h-6 text-aqua-blue flex-shrink-0" />
                                <p>+91 88309 51567 <br /> +91 92098 36852</p>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 text-sm md:text-base">
                                <Mail className="w-5 h-5 md:w-6 md:h-6 text-aqua-blue flex-shrink-0" />
                                <p>business@aqurius.com</p>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600 text-sm md:text-base">
                                <Clock className="w-5 h-5 md:w-6 md:h-6 text-aqua-blue flex-shrink-0" />
                                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>

                        <div className="pt-2 md:pt-4">
                            <h5 className="font-bold text-ocean-dark mb-2 text-sm md:text-base">Service Areas</h5>
                            <div className="flex flex-wrap gap-2">
                                {['Peth', 'Manchar', 'Rajgurunagar', 'Narayangaon', 'Junnar'].map(area => (
                                    <span key={area} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs md:text-sm text-gray-600">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="h-[300px] sm:h-[400px] lg:h-auto w-full bg-gray-200 relative">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15096.065925446957!2d73.91288267164549!3d18.930664613158655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd34126216fa53%3A0xc18b52f202446fd!2sPeth%2C%20Maharashtra%20410512!5e0!3m2!1sen!2sin!4v1769252523711!5m2!1sen!2sin"
                            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
