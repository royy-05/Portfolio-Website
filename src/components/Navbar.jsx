import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          Royy05
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation"
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <li>
            <a href="#home" className="nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="nav-link" onClick={closeMenu}>
              Certificates
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>

          <li className="nav-social">
            <a
              href="https://www.linkedin.com/in/ronit-roy05/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/royy-05/"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com/roy_ronit05"
              target="_blank"
              rel="noreferrer"
              title="X"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/xo.ronit_xo/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:royyronit05@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
