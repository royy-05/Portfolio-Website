import React, { useState, useEffect } from 'react';

const TYPEWRITER_TEXTS = [
  'Full-Stack Developer & UI/UX Enthusiast',
  'Full-Stack JavaScript Developer',
  'Database & API Architect',
  'Responsive Design Expert',
  'Modern Web Tech Specialist',
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = TYPEWRITER_TEXTS[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const currentText = TYPEWRITER_TEXTS[textIndex].substring(0, charIndex);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">Ronit Roy</h1>
          <div className="typewriter-text">
            {currentText}
            <span className="typewriter-cursor">|</span>
          </div>

          <div className="cta-buttons">
            <a href="#projects" className="cta-button primary">
              <span>🚀</span> View My Work
            </a>
            <a href="#contact" className="cta-button secondary">
              <span>📧</span> Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="profile-photo-card">
            <img src="/assets/dp3.jpg" alt="Ronit Roy" />
          </div>
        </div>
      </div>
    </section>
  );
}
