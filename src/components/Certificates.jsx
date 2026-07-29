import React from 'react';

const CERTIFICATES = [
  {
    title: 'Web Development',
    issuer: 'Internshala',
    year: '2025',
    icon: 'fas fa-certificate',
    description: 'Comprehensive course covering HTML, CSS, JavaScript, React, PHP, and DBMS',
    link: 'https://drive.google.com/file/d/1dCnjFvmumjseAjVLDL_kuNS3oX1gD8f2/view?usp=sharing',
  },
  {
    title: 'Web Development Trainee',
    issuer: 'Internshala',
    year: '2025',
    icon: 'fas fa-award',
    description: 'Completed a project-based Job Preparation Program focused on employability skills and earned consistent recognition for high performance.',
    link: 'https://drive.google.com/file/d/1NR7x1JM07mdD1CgsPM6zMz3GwpywhqZC/view?usp=sharing',
  },
  {
    title: 'NSDC Certificate',
    issuer: 'Skill India',
    year: '2025',
    icon: 'fas fa-trophy',
    description: 'Web Development Certification',
    link: 'https://drive.google.com/file/d/1zOHogAzZdm9XpmIEofAzAQszajFX4M-g/view?usp=sharing',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">Certificates & Achievements</h2>

        <div className="certificates-grid">
          {CERTIFICATES.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="cert-icon">
                <i className={cert.icon}></i>
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} • {cert.year}</p>
                <p className="cert-desc">{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-link"
                >
                  <i className="fas fa-external-link-alt"></i> View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
