import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import penguinSecuritiesImg from '../assets/penguin_securities.png';
import tcareAssistImg from '../assets/tcare_assist.png';
import vkcPlatformImg from '../assets/vkc_platform.png';

const projects = [
  {
    title: 'Penguin Securities',
    desc: 'Multi-tenant React 18 crypto investment platform featuring secure Azure SSO, Google OAuth, live WebSockets price feeds (STOMP/SockJS), wallet transaction logs, and custom KYC validation forms.',
    tags: ['REACT 18', 'WEBSOCKET', 'ZUSTAND', 'JWT'],
    image: penguinSecuritiesImg,
    studyLink: '#'
  },
  {
    title: 'TCARE Assist',
    desc: 'Caregiving assistance dashboard developed using React and Redux, incorporating full ADA (Americans with Disabilities Act) accessibility compliance and responsive designs migrated from Figma.',
    tags: ['REACT', 'REDUX', 'ADA COMPLIANCE'],
    image: tcareAssistImg,
    studyLink: '#'
  },
  {
    title: 'VKC Platform',
    desc: 'Web-based logistics and order management platform designed to maintain records, branches, and order dispatch pipelines with real-time delivery status updates.',
    tags: ['ANGULAR', 'GIT', 'LOGISTICS'],
    image: vkcPlatformImg,
    studyLink: '#'
  }
];

export default function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="projects-header-left">
            <h2 className="section-title">Selected Works</h2>
            <p className="projects-subtitle">collaborative engineering of production systems</p>
          </div>
          <a href="#projects" className="view-all-link">
            View all 3 Projects <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass-panel">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <a href={project.studyLink} className="project-link">
                  Project Case Study <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
