import React, { useState, useEffect } from 'react';

// ── Inline icons (no external deps needed) ──────────────────────────
const ChevronDown = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);
const Star = ({ filled }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#facc15' : 'none'} stroke="#facc15" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);
const ExternalLink = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);
const Send = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);
const Mail = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);
const Phone = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.97-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);
const MapPin = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
);
const Instagram = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);
const Code = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
);
const Palette = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
);
const Smartphone = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
);

// ── Data ─────────────────────────────────────────────────────────────
const PROJECTS = [
    { id: 1, title: 'Sistem Kasir Futsal', description: 'Aplikasi kasir berbasis web untuk manajemen transaksi futsal, lengkap dengan fitur CRUD dan laporan sederhana.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', tags: ['PHP', 'MySQL', 'JavaScript'], rating: 5 },
    { id: 2, title: 'Quiz App Interaktif', description: 'Aplikasi quiz berbasis web dengan sistem skor dan interaksi real-time.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop', tags: ['JavaScript', 'HTML', 'CSS'], rating: 4 },
    { id: 3, title: 'Linktree Custom', description: 'Halaman personal linktree dengan desain modern untuk menampilkan semua link penting.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', tags: ['React', 'Tailwind'], rating: 4 },
    { id: 4, title: 'TalkEd', description: 'Aplikasi forum yang memungkinkan pengguna untuk membuat postingan, memberikan komentar, serta berinteraksi melalui fitur like dan dislike.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop', tags: ['PHP', 'Bootstrap'], rating: 4 },
];

const ROTATING_TEXTS = ['Junior Web Developer', 'Tech Enthusiast', 'Lifelong Learner'];

// ── Helper tetap ─────────────────────────────────────────────
const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// ── Navbar ───────────────────────────────────────────────────────────
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ['home', 'about', 'projects', 'contact'];
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 100) { setActive(id); break; }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav style={{
            position: 'fixed', top: 0, width: '100%', zIndex: 50,
            transition: 'all 0.3s',
            background: scrolled ? 'rgba(255,255,255,0.9)' : '#fff',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : '0 1px 0 rgba(0,0,0,0.06)',
        }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px' }}>
                <h1 style={{ fontSize: 22, fontWeight: 700, background: 'linear-gradient(135deg,#3b82f6,#9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    MyPortfolio
                </h1>
                <div style={{ display: 'flex', gap: 28 }}>
                    {links.map(({ id, label }) => (
                        <button key={id} onClick={() => scrollToSection(id)} style={{
                            background: 'none', border: 'none', cursor: 'pointer', fontSize: 15,
                            fontWeight: active === id ? 600 : 400,
                            color: active === id ? '#3b82f6' : '#374151',
                            transition: 'color 0.2s',
                        }}>
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}

// ── Hero ─────────────────────────────────────────────────────────────
function Hero() {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setTextIndex(i => (i + 1) % ROTATING_TEXTS.length), 3000);
        return () => clearInterval(t);
    }, []);

    return (
        <section id="home" style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg,#eff6ff 0%,#fff 50%,#faf5ff 100%)',
            padding: '100px 24px 60px', textAlign: 'center',
        }}>
            <div>
                <div style={{
                    width: 112, height: 112, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#3b82f6,#9333ea)',
                    margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 32, fontWeight: 700,
                }}>SH</div>

                <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', fontWeight: 700, marginBottom: 16 }}>
                    Sahrul <span style={{ background: 'linear-gradient(135deg,#3b82f6,#9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Portfolio</span>
                </h1>

                <p style={{ fontSize: 20, color: '#6b7280' }}>
                    I'm a <span style={{ color: '#3b82f6', fontWeight: 600 }}>{ROTATING_TEXTS[textIndex]}</span>
                </p>

                <p style={{ maxWidth: 500, margin: '16px auto', color: '#6b7280' }}>
                    Saya berfokus pada pengembangan web, dengan pengalaman dalam membangun aplikasi yang responsif dan user-friendly.
                    Saya senang membangun fitur yang fungsional dan memberikan nilai nyata bagi pengguna.
                </p>

                <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
                    <button onClick={() => scrollToSection('projects')} style={{ background: '#3b82f6', color: '#fff', padding: '12px 24px', borderRadius: 999 }}>
                        Lihat Project
                    </button>
                    <button onClick={() => scrollToSection('contact')} style={{ border: '1px solid #ccc', padding: '12px 24px', borderRadius: 999 }}>
                        Hubungi Gue
                    </button>
                </div>
            </div>
        </section>
    );
}

// ── About ────────────────────────────────────────────────────────────
function About() {
    const skills = [
        { icon: <Code />, color: '#3b82f6', title: 'Frontend Development', desc: 'PHP, React, Vue.js, JavaScript, Tailwind CSS' },
        { icon: <Palette />, color: '#9333ea', title: 'UI/UX Design', desc: 'Figma, Adobe XD, Prototype, User Research' },
        { icon: <Smartphone />, color: '#22c55e', title: 'Mobile Development', desc: 'React Native, Flutter, iOS, Android' },
    ];
    const info = [
        { icon: <Mail />, text: 'sahrulhidayats898@gmail.com' },
        { icon: <Phone />, text: '+62 891-1250-9319' },
        { icon: <MapPin />, text: 'Bandung, Indonesia' },
    ];

    return (
        <section id="about" style={{ padding: '80px 0', background: '#fff' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
                <SectionHeader title="About Me" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
                    <div>
                        <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>Hello! I'm Sahrul Portfolio</h3>
                        <p style={{ color: '#6b7280', marginBottom: 14, lineHeight: 1.8, fontSize: 15 }}>
                            Saya seorang Junior Web Developer yang sedang fokus belajar dan berkembang di dunia programming.
                            Sudah pernah mengerjakan beberapa project seperti sistem kasir, quiz app, dan CRUD system.
                        </p>
                        <p style={{ color: '#6b7280', marginBottom: 24, lineHeight: 1.8, fontSize: 15 }}>
                            Saya percaya bahwa desain yang baik bukan hanya tentang bagaimana sesuatu terlihat,
                            tetapi bagaimana sesuatu itu berfungsi dan memberikan value kepada pengguna.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                            {info.map(({ icon, text }, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7280', fontSize: 14 }}>
                                    <span style={{ color: '#3b82f6', flexShrink: 0 }}>{icon}</span> {text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                        {skills.map(({ icon, color, title, desc }, i) => (
                            <div key={i} style={{ background: '#f9fafb', padding: '20px 24px', borderRadius: 12 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                                    <span style={{ color }}>{icon}</span>
                                    <span style={{ fontSize: 17, fontWeight: 600 }}>{title}</span>
                                </div>
                                <p style={{ color: '#6b7280', fontSize: 14 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Projects ─────────────────────────────────────────────────────────
function Projects() {
    return (
        <section id="projects" style={{ padding: '80px 0', background: '#f9fafb' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
                <SectionHeader title="My Projects" sub="Berikut adalah beberapa project yang telah saya kerjakan dengan passion dan dedikasi tinggi." />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
                    {PROJECTS.map(p => (
                        <ProjectCard key={p.id} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ title, description, image, tags, rating }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: '#fff', borderRadius: 12, overflow: 'hidden',
                boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.06)',
                transform: hovered ? 'translateY(-6px)' : 'none',
                transition: 'all 0.3s',
            }}
        >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={image} alt={title} style={{
                    width: '100%', height: 180, objectFit: 'cover', display: 'block',
                    transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s',
                }} />
                <div style={{
                    position: 'absolute', top: 10, right: 10, background: 'rgba(255,255,255,0.9)',
                    borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <ExternalLink />
                </div>
            </div>
            <div style={{ padding: '16px 18px' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
                    {[...Array(5)].map((_, i) => <Star key={i} filled={i < rating} />)}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, color: '#1f2937' }}>{title}</h3>
                <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {tags.map((tag, i) => (
                        <span key={i} style={{ background: '#dbeafe', color: '#1d4ed8', padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 500 }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ── Contact ───────────────────────────────────────────────────────────
function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = () => {
        if (!form.name || !form.email || !form.message) {
            setStatus('error');
            return;
        }
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 4000);
    };

    const contacts = [
        { icon: <Instagram />, bg: '#fce7f3', color: '#db2777', label: 'Instagram', value: '@rull_rill' },
        { icon: <Phone />, bg: '#dcfce7', color: '#16a34a', label: 'Phone', value: '+62 819-1250-9319' },
        { icon: <MapPin />, bg: '#f3e8ff', color: '#9333ea', label: 'Location', value: 'Bandung, Indonesia' },
    ];

    return (
        <section id="contact" style={{ padding: '80px 0', background: '#fff' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
                <SectionHeader title="Get In Touch" sub="Mari berkolaborasi untuk mewujudkan ide-ide hebat Anda menjadi kenyataan digital yang menakjubkan." />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                    <div>
                        <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20 }}>Let's Start a Conversation</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                            {contacts.map(({ icon, bg, color, label, value }, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#f9fafb', padding: '14px 16px', borderRadius: 12 }}>
                                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
                                        {icon}
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 600, fontSize: 14 }}>{label}</p>
                                        <p style={{ color: '#6b7280', fontSize: 13 }}>{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ background: 'linear-gradient(135deg,#eff6ff,#faf5ff)', borderRadius: 12, padding: '16px 20px' }}>
                            <p style={{ fontWeight: 600, marginBottom: 4, fontSize: 14 }}>Response Time</p>
                            <p style={{ color: '#6b7280', fontSize: 13 }}>Biasanya saya membalas dalam 24 jam di hari kerja.</p>
                        </div>
                    </div>

                    <div style={{ background: '#fff', border: '1px solid #f3f4f6', borderRadius: 16, padding: '28px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>Send Message</h3>
                        {['Name', 'Email'].map(field => (
                            <div key={field} style={{ marginBottom: 16 }}>
                                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>{field}</label>
                                <input
                                    type={field === 'Email' ? 'email' : 'text'}
                                    value={form[field.toLowerCase()]}
                                    onChange={e => setForm({ ...form, [field.toLowerCase()]: e.target.value })}
                                    placeholder={field === 'Name' ? 'Masukkan nama Anda' : 'nama@email.com'}
                                    style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 14px', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                                />
                            </div>
                        ))}
                        <div style={{ marginBottom: 20 }}>
                            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Message</label>
                            <textarea
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                rows={5}
                                placeholder="Tulis pesan Anda di sini..."
                                style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 14px', fontSize: 14, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                            />
                        </div>
                        <button onClick={handleSubmit} style={{
                            width: '100%', background: 'linear-gradient(135deg,#3b82f6,#9333ea)',
                            color: '#fff', border: 'none', padding: '12px', borderRadius: 8,
                            fontSize: 15, fontWeight: 600, cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        }}>
                            <Send /> Send Message
                        </button>
                        {status === 'error' && <p style={{ color: '#ef4444', fontSize: 13, textAlign: 'center', marginTop: 10 }}>Mohon lengkapi semua field!</p>}
                        {status === 'success' && <p style={{ color: '#22c55e', fontSize: 13, textAlign: 'center', marginTop: 10 }}>Terima kasih! Pesan Anda telah terkirim.</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Footer ───────────────────────────────────────────────────────────
function Footer() {
    return (
        <footer style={{ padding: '24px', textAlign: 'center', fontSize: 13, color: '#9ca3af', borderTop: '1px solid #f3f4f6' }}>
            © 2025 Sahrul Portfolio. All rights reserved.
        </footer>
    );
}

// ── Shared: Section Header ───────────────────────────────────────────
function SectionHeader({ title, sub }) {
    return (
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: '#1f2937', marginBottom: 12 }}>{title}</h2>
            <div style={{ width: 80, height: 4, background: 'linear-gradient(90deg,#3b82f6,#9333ea)', margin: '0 auto 16px', borderRadius: 2 }} />
            {sub && <p style={{ color: '#6b7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.7, fontSize: 15 }}>{sub}</p>}
        </div>
    );
}

// ── App (single page) ────────────────────────────────────────────────
export default function App() {
    return (
        <div style={{ fontFamily: 'system-ui, sans-serif' }}>
            <Navbar />
            <div>
                <Hero />
                <Footer />
            </div>
        </div>
    );
}