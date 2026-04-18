import React from 'react';
import './Projects.css';

/* ── ADD YOUR PROJECTS HERE ── */
const PROJECTS = [
  {
    title: 'Credit Card Fraud Detection',
    description:
      'A machine learning model to detect fraudulent transactions using classification algorithms and data preprocessing techniques.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/yashikagupta-ai/Fraud-Detection.git',
    emoji: '🚀',
  },
  {
    title: 'Hybrid Predictive Maintenance',
    description:
      'This project implements a hybrid predictive maintenance system using the NASA CMAPSS turbofan engine dataset. The goal is to analyze engine sensor data to detect degradation stages, estimate remaining operational life, and generate maintenance risk alerts.',
    tech: ['Python', 'Pandas', 'Matplotlib','Scikit-learn'],
    github: 'https://github.com/yashikagupta-ai/ML-project-1-hybrid-.git',
    emoji: '📊',
  },
  {
    title: 'Point-Based Item Loaning and Lending System',
    description:
      'Developing the backend for a point-based peer-to-peer lending platform with risk scoring, transaction management, and gamification features',
    tech: ['React', 'CSS', 'API', 'JWT'],
    github: 'https://github.com/yashikagupta-ai/SE_Point_based_Loaning_and_leanding.git',
    live: '',
    emoji: '🛒',
  },
];

function Projects() {
  return (
    <main className="projects-page page-content">
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <div className="container">
        <div className="projects-header animate-fadeInUp animate-delay-1">
          <p className="projects-label">My Work</p>
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            Here are some things I've built. Each project links to its GitHub repository.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <article
              key={i}
              className="project-card animate-fadeInUp"
              style={{ animationDelay: `${0.1 + i * 0.15}s`, opacity: 0 }}
            >
              <div className="project-card__top">
                <span className="project-emoji">{project.emoji}</span>
                <div className="project-card__links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      title="Live Demo"
                    >
                      🌐
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    title="GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tech">
                {project.tech.map((t, j) => (
                  <span key={j} className="tech-tag">{t}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__btn"
              >
                View on GitHub
                <span>→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="projects-cta animate-fadeInUp animate-delay-5">
          <p>Want to see more?</p>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Visit My GitHub
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>Built with React · Deployed on GitHub Pages</p>
        <p className="footer__name">© 2025 Your Name</p>
      </footer>
    </main>
  );
}

export default Projects;