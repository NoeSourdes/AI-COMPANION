import React from "react";
import logo_app from "../assets/logo-app.png";
import { NavLink } from "react-router-dom";
import "../sass/components/Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="titel">
        <div className="anim">
          <img src={logo_app} alt="logo application" />
          <NavLink to="/">
            <span>AI-COMPANION</span>
          </NavLink>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <NavLink to="/AI-Powered">
            <li className="support">AI-Powered</li>
          </NavLink>
          <NavLink to="/creator">
            <li className="creator">Creator</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
