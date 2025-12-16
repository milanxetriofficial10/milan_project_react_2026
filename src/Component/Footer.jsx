import React from "react";
import './css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left side: Logo / Name */}
        <div className="footer-logo">
          <h2>Milan Adhikari</h2>
          <p>Full-Stack Developer</p>
          <br />
          <p>HTML | CSS | JavaScript</p>
          <p>React | Node.js | Tailwain</p>
          <p>Database: MySQL</p>
          <p>Tools: Git & GitHub</p>
        </div>

        {/* Center: Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right side: Social Links */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Develop By:  Milan Adhikari</p>
      </div>
    </footer>
  );
}

export default Footer;
