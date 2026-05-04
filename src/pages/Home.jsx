import { useState, useEffect } from 'react';

// ── Icons ────────────────────────────────────────────────────────────
const ChevronDown = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const Mail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const Phone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.97-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MapPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const Instagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1, title: 'Futsal Cashier System',
    description: 'A web-based cashier application for managing futsal transactions, complete with CRUD features and simple reporting.',
    image: 'src/assets/Screenshot (143).png',
    tags: ['Laravel', 'JavaScript'], rating: 5,
  },
  {
    id: 2, title: 'Interactive Quiz App',
    description: 'A web-based quiz application with a scoring system and real-time interaction.',
    image: 'src/assets/Screenshot (30).png',
    tags: ['Laravel', 'JavaScript'], rating: 4,
  },
  {
    id: 3, title: 'Custom Linktree',
    description: 'A personal linktree page with a modern design to showcase all important links in one place.',
    image: 'src/assets/Screenshot (139).png',
    tags: ['HTML', 'CSS', 'JavaScript'], rating: 4,
  },
  {
    id: 4, title: 'TalkEd',
    description: 'A forum application that allows users to create posts, leave comments, and interact through like and dislike features.',
    image: 'src/assets/Screenshot (138).png',
    tags: ['PHP', 'CSS', 'JavaScript', 'Bootstrap'], rating: 4,
  },
];

const TECH_STACK = [
  { name: 'PHP',        color: '#6366f1' },
  { name: 'Laravel',   color: '#ef4444' },
  { name: 'React',     color: '#0ea5e9' },
  { name: 'Vue.js',    color: '#22c55e' },
  { name: 'JavaScript',color: '#d97706' },
  { name: 'MySQL',     color: '#f97316' },
];

const ROTATING_TEXTS = ['Junior Web Developer', 'Tech Enthusiast', 'Lifelong Learner'];

const scrollToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// ── Navbar ────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const id of ['contact', 'projects', 'about', 'home']) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 60,
      background: scrolled ? 'rgba(255,255,255,0.93)' : '#ffffff',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid #f1f5f9',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', height: '100%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 24px',
      }}>
        <span style={{
          fontSize: 20, fontWeight: 700,
          background: 'linear-gradient(135deg,#3b82f6,#9333ea)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          MyPortfolio
        </span>
        <div style={{ display: 'flex', gap: 4 }}>
          {['home','about','projects','contact'].map(id => (
            <button key={id} onClick={() => scrollToSection(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 14, fontWeight: active === id ? 600 : 400,
              color: active === id ? '#3b82f6' : '#4b5563',
              padding: '6px 14px', borderRadius: 6, transition: 'all 0.2s',
            }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────
function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTextIndex(i => (i + 1) % ROTATING_TEXTS.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg,#eff6ff 0%,#ffffff 55%,#faf5ff 100%)',
      textAlign: 'center', padding: '0 24px',
    }}>
      <div>
        <div style={{
          width: 100, height: 100, borderRadius: '50%',
          background: 'linear-gradient(135deg,#3b82f6,#9333ea)',
          margin: '0 auto 20px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: '#fff', fontSize: 28, fontWeight: 700,
        }}>SH</div>

        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, color: '#111827', marginBottom: 12, lineHeight: 1.15 }}>
          Sahrul{' '}
          <span style={{ background: 'linear-gradient(135deg,#3b82f6,#9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Hidayat
          </span>
        </h1>

        <p style={{ fontSize: 18, color: '#6b7280', marginBottom: 14 }}>
          I'm a <span style={{ color: '#3b82f6', fontWeight: 600 }}>{ROTATING_TEXTS[textIndex]}</span>
        </p>

        <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.8 }}>
          I focus on web development, with experience building responsive and user-friendly applications.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => scrollToSection('projects')} style={{
            background: 'linear-gradient(135deg,#3b82f6,#9333ea)', color: '#fff',
            border: 'none', padding: '11px 26px', borderRadius: 999,
            fontSize: 14, fontWeight: 600, cursor: 'pointer',
          }}>
            View Projects
          </button>
          <button onClick={() => scrollToSection('contact')} style={{
            background: 'transparent', color: '#374151',
            border: '1.5px solid #d1d5db', padding: '11px 26px', borderRadius: 999,
            fontSize: 14, fontWeight: 600, cursor: 'pointer',
          }}>
            Contact Me
          </button>
        </div>

        <div style={{ marginTop: 52, color: '#cbd5e1', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
          onClick={() => scrollToSection('about')}>
          <ChevronDown />
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────
function About() {
  const info = [
    { icon: <Mail />, text: 'sahrulhidayats898@gmail.com' },
    { icon: <Phone />, text: '+62 819-1250-9319' },
    { icon: <MapPin />, text: 'Bandung, Indonesia' },
  ];

  return (
    <section id="about" style={{ padding: '90px 24px', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader title="About Me" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>

          <div>
            <h3 style={{ fontSize: 21, fontWeight: 600, marginBottom: 14, color: '#111827' }}>
              Hello! I'm Sahrul Hidayat
            </h3>
            <p style={{ color: '#6b7280', lineHeight: 1.85, fontSize: 15, marginBottom: 14 }}>
              I'm a Junior Web Developer focused on learning and growing in the world of programming.
              I've worked on several projects including a cashier system, a quiz app, and a discussion forum.
            </p>
            <p style={{ color: '#6b7280', lineHeight: 1.85, fontSize: 15, marginBottom: 28 }}>
              I believe that good code isn't just about how it runs, but about how it delivers real value to its users.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {info.map(({ icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#4b5563', fontSize: 14 }}>
                  <span style={{ color: '#3b82f6' }}>{icon}</span> {text}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#f8fafc', borderRadius: 16, padding: '28px 24px', border: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ color: '#3b82f6' }}><CodeIcon /></span>
              <span style={{ fontSize: 17, fontWeight: 600, color: '#111827' }}>Tech Stack</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {TECH_STACK.map(({ name, color }) => (
                <span key={name} style={{
                  padding: '7px 16px', borderRadius: 999, fontSize: 13, fontWeight: 600,
                  background: color + '18', color, border: `1px solid ${color}40`,
                }}>
                  {name}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 22, paddingTop: 20, borderTop: '1px solid #f1f5f9' }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 10 }}>Currently deepening</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Laravel', 'Vue.js', 'REST API'].map(t => (
                  <span key={t} style={{ padding: '5px 12px', borderRadius: 999, fontSize: 12, background: '#eff6ff', color: '#3b82f6', fontWeight: 500 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" style={{ padding: '90px 24px', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader title="My Projects" sub="A selection of projects I've worked on with dedication and care." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
          {PROJECTS.map(p => <ProjectCard key={p.id} {...p} />)}
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
        background: '#fff', borderRadius: 14, overflow: 'hidden',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.11)' : '0 2px 10px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-5px)' : 'none',
        transition: 'all 0.3s', border: '1px solid #f1f5f9',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={image} alt={title} style={{
          width: '100%', height: 190, objectFit: 'cover', display: 'block',
          transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.35s',
        }} />
        <div style={{
          position: 'absolute', top: 10, right: 10, background: 'rgba(255,255,255,0.92)',
          borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center',
          justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <ExternalLink />
        </div>
      </div>
      <div style={{ padding: '18px 20px' }}>
        <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
          {[...Array(5)].map((_, i) => <Star key={i} filled={i < rating} />)}
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, color: '#111827' }}>{title}</h3>
        <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tags.map((tag, i) => (
            <span key={i} style={{ background: '#eff6ff', color: '#2563eb', padding: '3px 11px', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>
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
  const contacts = [
    { icon: <Instagram />, bg: '#fdf2f8', color: '#db2777', label: 'Instagram', value: '@rull_rill' },
    { icon: <Phone />,    bg: '#f0fdf4', color: '#16a34a', label: 'Phone / WhatsApp', value: '+62 819-1250-9319' },
    { icon: <MapPin />,   bg: '#faf5ff', color: '#9333ea', label: 'Location', value: 'Bandung, Indonesia' },
    { icon: <Mail />,     bg: '#eff6ff', color: '#2563eb', label: 'Email', value: 'sahrulhidayats898@gmail.com' },
  ];

  return (
    <section id="contact" style={{ padding: '90px 24px', background: '#ffffff' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <SectionHeader title="Get In Touch" sub="Have a question or want to collaborate? Reach me through any of the channels below." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {contacts.map(({ icon, bg, color, label, value }, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: bg, padding: '16px 18px', borderRadius: 14,
              border: `1px solid ${color}20`,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: '50%', background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color, flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              }}>
                {icon}
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: 13, color: '#111827', marginBottom: 2 }}>{label}</p>
                <p style={{ color: '#6b7280', fontSize: 12 }}>{value}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, background: 'linear-gradient(135deg,#eff6ff,#faf5ff)', borderRadius: 14, padding: '16px 20px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 4 }}>⏱ Response Time</p>
          <p style={{ fontSize: 13, color: '#6b7280' }}>I usually reply within 24 hours on weekdays.</p>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ padding: '22px 24px', textAlign: 'center', fontSize: 13, color: '#9ca3af', borderTop: '1px solid #f1f5f9', background: '#fff' }}>
      © 2025 Sahrul Hidayat. All rights reserved.
    </footer>
  );
}

// ── Section Header ─────────────────────────────────────────────────────
function SectionHeader({ title, sub }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 52 }}>
      <h2 style={{ fontSize: 32, fontWeight: 700, color: '#111827', marginBottom: 10 }}>{title}</h2>
      <div style={{ width: 56, height: 3, background: 'linear-gradient(90deg,#3b82f6,#9333ea)', margin: '0 auto 14px', borderRadius: 2 }} />
      {sub && <p style={{ color: '#6b7280', maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontSize: 14 }}>{sub}</p>}
    </div>
  );
}

// ── Root App ──────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}