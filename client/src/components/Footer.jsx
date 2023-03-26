import React from "react";
import "../sass/components/Footer.scss";
import logo_app from "../assets/logo-app.png";
import logo_twitter from "../assets/logo-twitter.png";
import logo_facebook from "../assets/logo-facebook.png";
import logo_instagram from "../assets/logo-insta.png";
import logo_github from "../assets/logo-github.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="up">
        <div className="logo">
          <img src={logo_app} alt="logo application" />
          <NavLink to="/">
            <span>AI-COMPANION</span>
          </NavLink>
        </div>
        <div className="name">
          <p>NOÉ SOURDÈS</p>
        </div>
      </div>
      <div className="middle">
        <div className="logo">
          <img src={logo_app} alt="logo-application" />
        </div>
      </div>
      <div className="down">
        <div className="reseaux">
          <a href="https://twitter.com/NoeSourdes19" target="_blank" rel="noopener noreferrer">
            <img className="twitter" src={logo_twitter} alt="logo-twitter" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100088419039503" target="_blank" rel="noopener noreferrer">
            <img className="facebook" src={logo_facebook} alt="logo-facebook" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100088419039503" target="_blank" rel="noopener noreferrer">
            <img
              className="instagram"
              src={logo_instagram}
              alt="logo-instagram"
            />
          </a>
          <a href="https://github.com/NoeSourdes" target="_blank" rel="noopener noreferrer">
            <img className="github" src={logo_github} alt="logo-github" />
          </a>
        </div>
        <div className="copyright">
          <p>© 2023 AI-COMPANION</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
