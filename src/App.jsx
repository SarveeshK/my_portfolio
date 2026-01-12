import { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--accent-green)',
          transformOrigin: '0%',
          zIndex: 1000
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '20px 50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 999,
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      background: scrolled ? 'rgba(13, 17, 23, 0.8)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-green)', fontSize: '1.5rem' }}>SK</h2>
      <div style={{ display: 'flex', gap: '30px', fontFamily: 'var(--font-display)', alignItems: 'center' }}>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Work</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" style={{
          color: 'var(--accent-green)',
          border: '1px solid var(--accent-green)',
          padding: '5px 15px',
          borderRadius: '4px',
          fontSize: '0.9rem',
          transition: 'all 0.3s ease'
        }}>Resume</a>
      </div>
    </nav>
  );
}

const Footer = () => (
  <footer style={{ padding: '50px', textAlign: 'center', borderTop: '1px solid var(--surface)' }}>
    <p style={{ color: 'var(--text-secondary)' }}>Built with code &amp; creativity by Sarveesh Kaarthic</p>
  </footer>
);

export default App;
