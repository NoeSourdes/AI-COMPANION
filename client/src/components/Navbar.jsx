import React, { useRef } from "react";
import logo_app from "../assets/logo-app.png";
import { NavLink } from "react-router-dom";
import "../sass/components/Navbar.scss";

const Navbar = () => {
  const barRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  function showNav() {
    barRef.current.classList.toggle("translate");
    topRef.current.classList.toggle("translateTop");
    bottomRef.current.classList.toggle("translateBottom");
  }
  return (
    <div className="Navbar">
      <div className="titel">
        <div className="anim">
          <NavLink to="/">
            <img src={logo_app} alt="logo application" />
            <span>AI-COMPANION</span>
          </NavLink>
        </div>
      </div>
      <nav className="nav">
        <div className="hamberger" onClick={showNav}>
          <div className="line">
            <div className="top" ref={topRef}></div>
            <div className="bottom" ref={bottomRef}></div>
          </div>
        </div>
        <div className="barre_res" ref={barRef}>
          <NavLink to="/AI-Powered">
            <li className="support">AI-Powered</li>
          </NavLink>
          <NavLink to="/creator">
            <li className="creator">Creator</li>
          </NavLink>
        </div>
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
