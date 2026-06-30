import React from 'react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="about">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content animate-slide-up">
          <span className="hero-subtitle">SOFTWARE ENGINEER</span>
          <h1 className="hero-title">Akilan A</h1>
          <p className="hero-description">
            Building scalable, accessible web apps with React & Angular.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
