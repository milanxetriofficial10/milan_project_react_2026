import React, { useState } from "react";
import './css/Navbar.css';

function Navbar({ openSignup }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="Navbar">
      <div className="nav-container">
        <div className="logo"><a href="/">Milan Adhikari</a></div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
           <li><a href="/about">About</a></li>
          <li><a href="/resume">Hackathan</a></li>
          <li><a href="/portfolio">Blog</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn" onClick={openSignup}>Sign Up</button>
        </div>
      </div>

      {/* mobile sidebar */}
      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <ul className="sidebar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
          <li className="sidebar-buttons">
            <button
              className="login-btn"
              onClick={() => {
                openSignup();
                setSidebarOpen(false);
              }}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}
    </nav>
  );
}

export default Navbar;
