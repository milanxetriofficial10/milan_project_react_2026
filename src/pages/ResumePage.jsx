import React from "react";
import "./css/ResumePage.css";

function ResumePage() {
  return (
    <div className="resume-container">

      {/* Header */}
      <div className="resume-header">
        <h1>Milan Adhikari</h1>
        <p className="tagline">Frontend Developer • Designer • Programmer</p>
      </div>

      {/* Contact Info */}
      <div className="resume-section contact-section">
        <h2>Contact Details</h2>
        <p>Email: milankazi65@gmail.com</p>
        <p>Phone: +977 9818220754</p>
        <p>Location: Kathmandu, Nepal</p>
      </div>

      {/* Summary */}
      <div className="resume-section">
        <h2>Professional Summary</h2>
        <p>
          A passionate developer who blends creativity with clean code.  
          Loves building digital experiences that feel smooth, modern, and alive.
        </p>
      </div>

      {/* Skills */}
      <div className="resume-section">
        <h2>Skills</h2>
        <ul className="skill-list">
          <li>HTML, CSS, JavaScript</li>
          <li>React.js</li>
          <li>PHP & MySQL</li>
          <li>Node.js</li>
          <li>UI/UX Design</li>
        </ul>
      </div>

      {/* Experience */}
      <div className="resume-section">
        <h2>Work Experience</h2>

        <div className="experience-card">
          <h3>Frontend Developer – Freelance</h3>
          <span className="exp-date">2024 – Present</span>
          <p>Built e-commerce systems, booking platforms, sports websites, and dashboards.</p>
        </div>

        <div className="experience-card">
          <h3>Web Designer – Personal Projects</h3>
          <span className="exp-date">2024 – 2025</span>
          <p>Designed responsive modern interfaces for mobile and desktop.</p>
        </div>
      </div>

      {/* Education */}
      <div className="resume-section">
        <h2>Education</h2>
        <div className="education-card">
          <h3>Bachelor of Computer Applications (BCA) Running...</h3>
          <p>TU Nepal</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="resume-footer">
        © 2025 Milan Adhikari — All Rights Reserved
      </footer>

    </div>
  );
}

export default ResumePage;
