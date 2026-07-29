import React from 'react';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <h3 className="about-heading">Passionate Developer & Creative Problem Solver</h3>
          <p className="about-text">
            I'm a passionate Web Developer currently pursuing BCA at JIS University. With expertise in
            modern web technologies and a keen eye for responsive design, I create engaging digital experiences
            that perform exceptionally across all devices.
          </p>
          <p className="about-text">
            <strong>Current Role:</strong> Serving as the <b>Full Stack Developer & Lead</b> at{' '}
            <b>The Rescue Federation®</b>, where I manage end-to-end web development — from{' '}
            <b>frontend architecture</b> and <b>UI/UX design</b> to <b>backend integration</b>,{' '}
            <b>database management</b>, and <b>deployment</b>. All projects are developed under a signed NDA.
          </p>
          <p className="about-text">
            My goal is to bridge the gap between design and functionality, creating websites that not only look
            beautiful but also provide exceptional user experiences that drive results.
          </p>
        </div>
      </div>
    </section>
  );
}
