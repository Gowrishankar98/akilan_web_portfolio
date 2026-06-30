import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <span className="logo-letter">A</span>
          <span className="logo-dot">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#tech" className="nav-link">Tech Stack</a>
          <a href="#career" className="nav-link">Career</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="btn-primary nav-btn">Contact Me</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass-panel">
          <a href="#about" className="mobile-link" onClick={() => setIsOpen(false)}>About</a>
          <a href="#tech" className="mobile-link" onClick={() => setIsOpen(false)}>Tech Stack</a>
          <a href="#career" className="mobile-link" onClick={() => setIsOpen(false)}>Career</a>
          <a href="#projects" className="mobile-link" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="btn-primary mobile-btn" onClick={() => setIsOpen(false)}>Contact Me</a>
        </div>
      )}
    </nav>
  );
}
