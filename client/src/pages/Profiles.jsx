import React from "react";
import Navbar from "../components/Navbar";
import "../sass/pages/Profiles.scss";
import Footer from "../components/Footer";

const Profiles = () => {
  return (
    <div className="page-creator">
      <div className="section">
        <header>
          <Navbar />
        </header>
        <div className="me">
          <div className="titel">
            <p>About Me</p>
          </div>
          <div className="para">
            <p>
              Hello, my name is Noé Sourdès and I am a passionate 16-year-old
              developer. Since the age of 14, I have worked with technologies
              such as HTML, CSS, Sass, JavaScript, and Node.js to create
              websites, mobile applications, and software. I enjoy creating
              products that are both elegant and efficient, ensuring that every
              detail is carefully crafted to provide a quality user experience.
            </p>
          </div>
        </div>
        <footer>
            <Footer/>
        </footer>
      </div>
    </div>
  );
};

export default Profiles;
