import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <a href="#" className="footer-logo">
          <span className="logo-letter">A</span>
          <span className="logo-dot">.</span>
        </a>

        <p className="footer-copyright">
          © {currentYear} Akilan A. Built with React & Vite.
        </p>

        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            GITHUB
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            LINKEDIN
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            TWITTER
          </a>
          <a href="mailto:akilanaki02@gmail.com" className="footer-link">
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
