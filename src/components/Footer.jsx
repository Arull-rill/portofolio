import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">MyPortfolio</h3>
                        <p className="text-gray-300">Membuat solusi digital yang inovatif dan berdampak.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <a href="/" className="block text-gray-300 hover:text-white transition-colors">Home</a>
                            <a href="/about" className="block text-gray-300 hover:text-white transition-colors">About</a>
                            <a href="/projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
                            <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Arull-rill">
                                <Github className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                            </a>
                            <a href="https://www.instagram.com/rull_rill/">
                                <Instagram className="w-6 h-6 text-gray-300" />
                            </a>
                            <Mail className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    © 2025 MyPortfolio. Dibuat dengan React + Tailwind.
                </div>
            </div>
        </footer>
    );
}