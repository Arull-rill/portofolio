import React from 'react';
import { Mail, Phone, MapPin, Code, Palette, Smartphone } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Hello! I'm John Portfolio</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Saya adalah seorang developer yang passionate dalam menciptakan pengalaman digital yang luar biasa. 
                            Dengan pengalaman lebih dari 3 tahun di bidang web development, saya telah membantu berbagai klien 
                            mewujudkan visi digital mereka.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Saya percaya bahwa desain yang baik bukan hanya tentang bagaimana sesuatu terlihat, 
                            tetapi bagaimana sesuatu itu berfungsi dan memberikan value kepada pengguna.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 text-blue-600" />
                                <span className="text-gray-600">john@example.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 text-blue-600" />
                                <span className="text-gray-600">+62 123-456-7890</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                <span className="text-gray-600">Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <Code className="w-8 h-8 text-blue-600 mr-3" />
                                <h4 className="text-xl font-semibold">Frontend Development</h4>
                            </div>
                            <p className="text-gray-600">React, Vue.js, JavaScript, TypeScript, Tailwind CSS</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <Palette className="w-8 h-8 text-purple-600 mr-3" />
                                <h4 className="text-xl font-semibold">UI/UX Design</h4>
                            </div>
                            <p className="text-gray-600">Figma, Adobe XD, Prototype, User Research</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <Smartphone className="w-8 h-8 text-green-600 mr-3" />
                                <h4 className="text-xl font-semibold">Mobile Development</h4>
                            </div>
                            <p className="text-gray-600">React Native, Flutter, iOS, Android</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}