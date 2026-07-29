import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
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
        </div>
        <p>&copy; {new Date().getFullYear()} Ronit Roy. All rights reserved.</p>
        <p style={{ marginTop: '0.4rem', fontSize: '0.9rem' }}>
          Front-End Developer | BCA Student at JIS University
        </p>
      </div>
    </footer>
  );
}
