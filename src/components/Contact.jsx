import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { submitToGoogleSheets } from '../services/googleSheets';
import { saveToDB } from '../services/dbService';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        email: '',
        mobile: '',
        quantity500ml: '',
        quantity1L: '',
        consent: false
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'name') {
            // Allow only alphabets and spaces, max 20 characters
            const validName = value.replace(/[^a-zA-Z\s]/g, '').slice(0, 20);
            setFormData(prev => ({
                ...prev,
                [name]: validName
            }));
        } else if (name === 'mobile') {
            // Allow only digits, max 10
            const validMobile = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: validMobile
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Run both submissions in parallel
            const [gsResult, dbResult] = await Promise.all([
                submitToGoogleSheets(formData),
                saveToDB(formData)
            ]);

            console.log('Submission Results:', { googleSheets: gsResult, database: dbResult });
        } catch (error) {
            console.error('Submission Error:', error);
        } finally {
            setLoading(false);
            setSubmitted(true);
        }
    };

    return (
        <section id="contact" className="py-16 md:py-20 bg-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-aqua-blue font-bold tracking-wide uppercase text-xs sm:text-sm mb-2">Get Started</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-ocean-dark">Request a Quote</h3>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 relative overflow-hidden">
                    {submitted ? (
                        <div className="text-center py-16 md:py-20">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <h4 className="text-2xl md:text-3xl font-bold text-ocean-dark mb-4">Thank You!</h4>
                            <p className="text-gray-600 text-sm md:text-base">Your request has been received. We will contact you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aqua-blue focus:border-transparent outline-none transition-all text-sm md:text-base"
                                        placeholder="Pramod Bhalerao"
                                        maxLength={20}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Business Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        required
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aqua-blue focus:border-transparent outline-none transition-all text-sm md:text-base"
                                        placeholder="City, Area"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aqua-blue focus:border-transparent outline-none transition-all text-sm md:text-base"
                                        placeholder="name@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        required
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aqua-blue focus:border-transparent outline-none transition-all text-sm md:text-base"
                                        placeholder="9876543210"
                                        maxLength={10}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2 text-xs sm:text-sm">500 ml - Weekly Quantity (Boxes)</label>
                                    <input
                                        type="number"
                                        name="quantity500ml"
                                        min="10"
                                        required
                                        value={formData.quantity500ml}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aqua-blue focus:border-transparent outline-none transition-all text-sm md:text-base"
                                        placeholder="Min 10"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2 text-xs sm:text-sm">1 Litre - Weekly Quantity (Boxes)</label>
                                    <input
                                        type="number"
                                        name="quantity1L"
                                        min="10"
                                        required
                                        value={formData.quantity1L}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aqua-blue focus:border-transparent outline-none transition-all text-sm md:text-base"
                                        placeholder="Min 10"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mt-2">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    id="consent"
                                    required
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    className="mt-1 w-4 h-4 md:w-5 md:h-5 text-aqua-blue rounded border-gray-300 focus:ring-aqua-blue"
                                />
                                <label htmlFor="consent" className="text-xs md:text-sm text-gray-600">
                                    I consent to having this website store my submitted information so they can respond to my inquiry.
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-aqua-blue text-white font-bold text-base md:text-lg py-3.5 md:py-4 rounded-xl shadow-lg hover:bg-sky-blue hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                            >
                                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Send Request <Send className="w-5 h-5" /></>}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
