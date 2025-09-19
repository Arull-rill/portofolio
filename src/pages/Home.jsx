import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    const [currentText, setCurrentText] = useState(0);
    const texts = ['Junior Developer', 'UI/UX Designer', 'Student'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
            <div className="container mx-auto px-6 text-center">
                <div className="animate-pulse">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
                        SH
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                    Sahrul <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                </h1>
                <div className="text-xl md:text-2xl text-gray-600 mb-8 h-8">
                    I'm a <span className="text-blue-600 font-semibold">{texts[currentText]}</span>
                </div>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Passionate about creating beautiful, functional, and user-centered digital experiences.
                </p>
                <div className="space-x-4">
                    <a href="/projects">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                            View My Work
                        </button>
                    </a>
                    <a href="/contact">
                        <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                            Contact Me
                        </button>
                    </a>
                </div>
                <ChevronDown className="w-8 h-8 mx-auto mt-16 text-gray-400 animate-bounce" />
            </div>
        </section>
    );
}