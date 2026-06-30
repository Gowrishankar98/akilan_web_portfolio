import React from 'react';

export default function Precision() {
  return (
    <section className="precision-section section-padding" id="precision">
      <div className="container precision-container">
        <div className="precision-grid">
          <div className="precision-left">
            <h2 className="section-title">Engineering with Precision</h2>
            <p className="precision-text">
              With over 10 years of dedicated experience in the software engineering landscape, 
              I specialize in crafting high-performance user interfaces spanning modern tech stacks. 
              Focused on the front-end, my design philosophy centers on security, accessibility, 
              and architectural scalability.
            </p>
          </div>
          
          <div className="precision-right">
            <div className="stat-card glass-panel">
              <span className="stat-number">8+</span>
              <span className="stat-label">YEARS EXP</span>
            </div>
            <div className="stat-card glass-panel">
              <span className="stat-number">4</span>
              <span className="stat-label">COMPANIES</span>
            </div>
            <div className="stat-card glass-panel">
              <span className="stat-number">20+</span>
              <span className="stat-label">PROJECTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
