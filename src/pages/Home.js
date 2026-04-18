import React from 'react';
import './Home.css';

/* ── EDIT YOUR DETAILS HERE ── */
const ME = {
  name: 'Yashika Gupta',
  tagline: 'AI & ML Enthusiast',
  about: `"I'm a passionate Computer Science student who enjoys building clean and user-friendly applications. I love exploring AI, Machine Learning, and creating projects that solve real-world problems."`,
  research: [
    'Artificial Intelligence & Machine Learning',
    'Web Technologies & Full Stack Development',
    'Human-Computer Interaction',
    'Cloud Computing & DevOps',
  ],
  phone: '+91 93018 40462',
  personalEmail: 'yashikagupta561@gmail.com',
  collegeEmail: 'se23ucse190@mahindrauniversity.edu.in',
  skills: [
    'React', 'JavaScript', 'HTML & CSS',
    'Node.js', 'Python', 'GitHub',
    'SQL', 'REST APIs',
  ],
};

function Home() {
  return (
    <main className="home page-content">
      {/* Background orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__text">
            <p className="hero__greeting animate-fadeInUp animate-delay-1">
              👋 Hello, I'm
            </p>
            <h1 className="hero__name animate-fadeInUp animate-delay-2">
              {ME.name}
            </h1>
            <p className="hero__tagline animate-fadeInUp animate-delay-3">
              {ME.tagline}
            </p>
            <p className="hero__about animate-fadeInUp animate-delay-4">
              {ME.about}
            </p>
            <div className="hero__cta animate-fadeInUp animate-delay-5">
              <a href={`mailto:${ME.personalEmail}`} className="btn btn--primary">
                Get In Touch
              </a>
              <a href="#projects-preview" className="btn btn--ghost">
                View Projects
              </a>
            </div>
          </div>

          <div className="hero__avatar animate-fadeInUp animate-delay-3">
            <div className="avatar-ring">
              <div className="avatar-inner">
                {/* Replace the emoji below with your actual <img> tag */}
                <span className="avatar-emoji">👨‍💻</span>
              </div>
            </div>
            <div className="avatar-badge">
              <span className="badge-dot" />
              Available for work
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── ABOUT ME ── */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section__title">About Me</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-card__icon">🎓</div>
              <h3>Education</h3>
              <p>Currently pursuing B.Tech / MCA at <strong>Your College Name</strong>. Passionate about technology and innovation.</p>
            </div>
            <div className="about-card">
              <div className="about-card__icon">💡</div>
              <h3>Goal</h3>
              <p>To build impactful software solutions and contribute to meaningful projects in the tech industry.</p>
            </div>
            <div className="about-card">
              <div className="about-card__icon">🌍</div>
              <h3>Location</h3>
              <p>Based in <strong>Hyderabad, India</strong>. Open to remote and on-site opportunities across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH INTERESTS ── */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Research Interests</h2>
          <div className="interests-list">
            {ME.research.map((item, i) => (
              <div key={i} className="interest-item" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="interest-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Skills</h2>
          <div className="skills-grid">
            {ME.skills.map((skill, i) => (
              <div key={i} className="skill-pill" style={{ animationDelay: `${i * 0.05}s` }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section className="section" id="contact">
        <div className="container">
          <h2 className="section__title">Contact Details</h2>
          <div className="contact-grid">
            <a href={`tel:${ME.phone}`} className="contact-card">
              <span className="contact-icon">📱</span>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">{ME.phone}</p>
              </div>
            </a>
            <a href={`mailto:${ME.personalEmail}`} className="contact-card">
              <span className="contact-icon">📧</span>
              <div>
                <p className="contact-label">Personal Email</p>
                <p className="contact-value">{ME.personalEmail}</p>
              </div>
            </a>
            <a href={`mailto:${ME.collegeEmail}`} className="contact-card">
              <span className="contact-icon">🎓</span>
              <div>
                <p className="contact-label">College Email</p>
                <p className="contact-value">{ME.collegeEmail}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>Built with React · Deployed on GitHub Pages</p>
        <p className="footer__name">© 2025 {ME.name}</p>
      </footer>
    </main>
  );
}

export default Home;