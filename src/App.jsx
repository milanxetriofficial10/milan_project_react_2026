import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./Component/Footer";
import ContactForm from "./pages/ContactForm";
import ResumePage from "./pages/ResumePage";

function App() {
  const [openSignupPopup, setOpenSignupPopup] = useState(false);

  const handleOpenSignup = () => setOpenSignupPopup(true);

  return (
    <Router>
      <Navbar openSignup={handleOpenSignup} />
      <Routes>
        <Route path="/" element={<Home onLoginClick={openSignupPopup} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
