import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = () => {
        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Mohon lengkapi semua field!');
            return;
        }
        
        // Handle form submission
        alert('Terima kasih! Pesan Anda telah terkirim.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Mari berkolaborasi untuk mewujudkan ide-ide hebat Anda menjadi kenyataan digital yang menakjubkan.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Let's Start a Conversation</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">john@example.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">+62 819-1250-9319</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Location</h4>
                                    <p className="text-gray-600">Bandung, Indonesia</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Additional Info */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <h4 className="font-semibold mb-2 text-gray-800">Response Time</h4>
                            <p className="text-gray-600 text-sm">Biasanya saya membalas dalam 24 jam di hari kerja.</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Send Message</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="Masukkan nama Anda"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    placeholder="nama@email.com"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    rows="5"
                                    placeholder="Tulis pesan Anda di sini..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all resize-none"
                                ></textarea>
                            </div>
                            
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}