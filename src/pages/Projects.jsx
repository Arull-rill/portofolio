import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Platform e-commerce modern dengan fitur lengkap dan user experience yang optimal.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            tags: ["React", "Node.js", "MongoDB"],
            rating: 5
        },
        {
            id: 2,
            title: "Mobile Banking App",
            description: "Aplikasi mobile banking yang aman dan mudah digunakan dengan fitur AI.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
            tags: ["React Native", "Firebase", "AI"],
            rating: 5
        },
        {
            id: 3,
            title: "Dashboard Analytics",
            description: "Dashboard analytics yang powerful untuk monitoring bisnis real-time.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["Vue.js", "D3.js", "Python"],
            rating: 4
        },
        {
            id: 4,
            title: "Food Delivery App",
            description: "Aplikasi food delivery dengan real-time tracking dan payment integration.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
            tags: ["Flutter", "Firebase", "Maps API"],
            rating: 5
        },
        {
            id: 5,
            title: "Learning Management System",
            description: "Platform pembelajaran online dengan video streaming dan quiz interactive.",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
            tags: ["React", "Express", "PostgreSQL"],
            rating: 4
        },
        {
            id: 6,
            title: "Social Media Dashboard",
            description: "Dashboard untuk mengelola multiple social media accounts dalam satu tempat.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            tags: ["Next.js", "GraphQL", "Redis"],
            rating: 5
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Berikut adalah beberapa project yang telah saya kerjakan dengan passion dan dedikasi tinggi.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            <div className="relative overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-80 hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-4 h-4 text-gray-600" />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-2">
                                    {[...Array(project.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}