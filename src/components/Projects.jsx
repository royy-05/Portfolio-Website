import React from 'react';

const PROJECTS = [
  {
    title: 'RideFlow',
    image: '/assets/RideFlow.png',
    description:
      'A full-stack ride-sharing platform with real-time driver tracking and geospatial dispatching. Features dynamic fare calculation, live chat, and secure JWT-based authentication for a seamless rider-driver experience.',
    tags: ['MERN Stack', 'Socket.io', 'Google Maps API', 'JWT'],
    demoLink: 'https://ride-flow-gilt.vercel.app/',
    codeLink: 'https://github.com/royy-05/RideFlow',
  },
  {
    title: 'MindCare',
    image: '/assets/MindCare.png',
    description:
      'A secure mental health platform with AI-powered chat support and PHQ-9/GAD-7 assessments. Includes anonymous community forums, a therapist appointment booking system, and hardened auth with rate limiting and input sanitization.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Gemini API'],
    demoLink: 'https://mindcare-oqoo.onrender.com/',
    codeLink: 'https://github.com/royy-05/MindCare',
  },
  {
    title: 'ThinkTube AI',
    image: '/assets/thinktube.png',
    description:
      'An AI-powered YouTube assistant that helps users summarize, analyze, and extract insights from videos in real-time. Built with advanced AI models and a clean, responsive UI for seamless content consumption.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'API', 'Vercel'],
    demoLink: 'https://thinktube-ai.vercel.app/',
    codeLink: 'https://github.com/royy-05/Thinktube-AI',
  },
  {
    title: 'Responsive Blog Website',
    image: '/assets/Blogspot.png',
    description:
      'A fully responsive blog platform with dark mode, live search filter, scroll progress, and lazy loading. Achieved 95+ Lighthouse performance score with modern UI/UX design patterns and seamless user experience.',
    tags: ['HTML5', 'JavaScript', 'CSS3', 'Performance'],
    demoLink: 'https://blog-website-seven-brown.vercel.app/',
    codeLink: 'https://github.com/royy-05/Blog-Website',
  },
  {
    title: 'Smartwatch Landing Page',
    image: '/assets/Smartewatch.png',
    description:
      'High-converting e-commerce landing page with modern UI, smooth scrolling, and mobile-responsive design optimized for product promotion. Features interactive elements, micro-animations, and conversion optimization.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    demoLink: 'https://royy-05.github.io/Smartwatch-Landing-Page/',
    codeLink: 'https://github.com/royy-05/Smartwatch-Landing-Page',
  },
  {
    title: 'EduTech Landing Page',
    image: '/assets/EduTech.png',
    description:
      'A modern and engaging educational landing page built for promoting online courses and e-learning platforms. Features responsive design, smooth animations, intuitive navigation, and optimized layouts.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    demoLink: 'https://edu-tech-landing-page-sigma.vercel.app/',
    codeLink: 'https://github.com/royy-05/Edu-Tech-Landing-Page',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-link primary"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-link secondary"
                  >
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
