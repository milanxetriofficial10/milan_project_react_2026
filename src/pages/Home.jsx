import React, { useState, useEffect } from "react";
import './css/Home.css';

function Home({ onLoginClick }) {
  const [showLogin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // signup first

  // open popup from Navbar click
  useEffect(() => {
    if (onLoginClick === true) {
      setShowLogin(true);
      setIsSignup(true); // always open signup first
    }
  }, [onLoginClick]);

  const closePopup = () => setShowLogin(false);

  const switchToLogin = () => setIsSignup(false);
  const switchToSignup = () => setIsSignup(true);

  return (
    <div className="home">

      {/* POPUP SIGNUP / LOGIN */}
      {showLogin && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={closePopup}>×</button>

            <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

            <form className="login-form">
              {isSignup && <input type="text" placeholder="Full Name" required />}
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />
              {isSignup && <input type="password" placeholder="Confirm Password" required />}
              <button className="submit-btn">{isSignup ? "Sign Up" : "Login"}</button>
            </form>

            <p className="switch-text">
              {isSignup ? (
                <>Already have an account? <span onClick={switchToLogin}>Login</span></>
              ) : (
                <>Don't have an account? <span onClick={switchToSignup}>Sign Up</span></>
              )}
            </p>

          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>HI! I’m <span>Milan Adhikari</span></h1>
          <p>I build modern web experiences with React, HTML, CSS, and JavaScript.</p>
          <div className="hero-buttons">
            <a href="/portfolio" className="btn primary-btn">View Projects</a>
            <a href="/contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills">
        <h2>My Skills Here</h2>
        <div className="skill-chart-area">
          <div className="skill-bars">
            <div className="skill">
              <p>HTML / CSS <span>89%</span></p>
              <div className="bar"><div className="fill react"></div></div>
            </div>

            <div className="skill">
              <p>JavaScript <span>74%</span></p>
              <div className="bar"><div className="fill html"></div></div>
            </div>

            <div className="skill">
              <p>React / Node.Js<span>65%</span></p>
              <div className="bar"><div className="fill js"></div></div>
            </div>

            <div className="skill">
              <p>PHP <span>70%</span></p>
              <div className="bar"><div className="fill php"></div></div>
            </div>

            <div className="skill">
              <p>MySQL <span>85%</span></p>
              <div className="bar"><div className="fill php"></div></div>
            </div>

            <div className="skill">
              <p>Git & GitHub<span>75%</span></p>
              <div className="bar"><div className="fill php"></div></div>
            </div>

            <div className="skill">
              <p>Others Programming<span>75%</span></p>
              <div className="bar"><div className="fill php"></div></div>
            </div>
          </div>

          <div className="circle-chart">
            <div className="outer">
              <div className="inner">
                <h3>Milan Xetri<br /> Full Stack<br />Developer</h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-cards">
          <div className="card">
            <h3>Movie Book System</h3>
            <p>A modern e-commerce website built with React and Tailwind CSS.</p>
          </div>

          <div className="card">
            <h3>Football Network 24</h3>
            <p>A responsive portfolio site with animations and interactive UI components.</p>
          </div>

          <div className="card">
            <h3>Watch Shop</h3>
            <p>A live sports streaming platform using React, API integration, and real-time data.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
