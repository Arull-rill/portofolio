import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
        }`}>
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MyPortfolio
                </h1>
                <div className="space-x-6">
                    <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
                    <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
                    <a href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Projects</a>
                    <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
                </div>
            </div>
        </nav>
    );
}