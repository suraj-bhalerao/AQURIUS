
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Footer = () => {
    return (
        <footer className="bg-ocean-dark text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="AQURIUS Logo" className="h-10 w-10 rounded-full object-cover border-2 border-white/20" />
                        <span className="font-heading font-bold text-2xl text-white">AQURIUS</span>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-aqua-blue transition-colors"><Facebook /></a>
                        <a href="#" className="hover:text-aqua-blue transition-colors"><Instagram /></a>
                        <a href="#" className="hover:text-aqua-blue transition-colors"><Twitter /></a>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <div className="text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} AQURIUS. All rights reserved.</p>
                        <p className="mt-1 flex items-center justify-center md:justify-start gap-1">
                            Made with <span className="text-red-500">❤️</span> for AQURIUS
                        </p>
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
