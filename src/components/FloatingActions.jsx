import React, { useState, useEffect } from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
    const [isVisible, setIsVisible] = useState(false);

    // demo ssh change
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-6 right-6 z-40 flex flex-col gap-4"
                >
                    <a
                        href="https://wa.me/918830951567" // Replace with actual number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center group"
                        title="Chat on WhatsApp"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat with us</span>
                    </a>

                    {/* <a
                        href="#contact"
                        className="bg-aqua-blue text-white p-4 rounded-full shadow-lg hover:bg-sky-blue transition-transform hover:scale-110 flex items-center justify-center group"
                        title="Get Help from Bot"
                    >
                        <Bot className="w-6 h-6" />
                        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Get Help</span>
                    </a> */}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingActions;
