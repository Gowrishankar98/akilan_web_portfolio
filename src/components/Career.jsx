import React from 'react';

const careerSteps = [
  {
    period: '2025 - PRESENT',
    company: 'DevAscend Private Limited',
    role: 'SOFTWARE DEVELOPER',
    desc: 'Developed a multi-tenant React 18 fintech platform. Built secure auth flows (Firebase, Azure SSO, OAuth, 2FA), order placement/redemption UI for crypto investments, real-time WebSocket feeds (STOMP/SockJS), and optimized Zustand state performance.'
  },
  {
    period: '2023 - 2024 Nov',
    company: 'TCARE Inc',
    role: 'SOFTWARE DEVELOPER',
    desc: 'Managed team sprints and UI enhancements. Developed Caregiving assistance modules using React and Redux, integrated ADA (Americans with Disabilities Act) compliance widgets, and completed a major frontend migration from Angular to React.'
  },
  {
    period: '2020 - 2023',
    company: 'Intulogic Private Limited',
    role: 'PROGRAMMER ANALYST',
    desc: 'Trained in Angular & React. Migrated VKC order and branch delivery management tools, resolved critical infrastructure downtime issues, and maintained application performance standards.'
  }
];

export default function Career() {
  return (
    <section className="career-section section-padding" id="career">
      <div className="container career-container">
        <div className="career-grid">
          <div className="career-left">
            <h2 className="section-title career-title">Career<br />Journey</h2>
          </div>

          <div className="career-timeline">
            {careerSteps.map((step, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-period">{step.period}</span>
                  <h3 className="timeline-company">{step.company}</h3>
                  <span className="timeline-role">{step.role}</span>
                  <div className="timeline-card glass-panel">
                    <p className="timeline-desc">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
