import React from "react";
import "./css/About.css";

function About() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Me</h1>
        <p>Crafting dreams into code, one line at a time.</p>
      </div>

      {/* Content Section */}
      <div className="about-content">

        {/* Left Image Box */}
        <div className="about-image">
          <img src="public/1762777798612.webp" alt="Profile" />
        </div>

        {/* Right Text Box */}
        <div className="about-text">
          <h2>I'm Milan Adhikari</h2>
          <p>
            A passionate web developer who loves turning ideas into elegant
            digital experiences. From crafting clean interfaces to building
            powerful user-driven applications, I walk the path where creativity
            meets code.
          </p>

          <p>
            I believe every design should tell a story—  
            a soft rhythm, a clear breath, a little melody of the mind.
          </p>

          <p>
            When I’m not coding, you’ll find me exploring new technologies,
            improving designs, or learning something fresh to stay ahead in the
            ever-changing world of development.
          </p>

          <button className="about-btn">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default About;
