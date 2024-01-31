import "./style.css";
import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo de SportSee" className="logo" />
      </div>
      <nav className="horizontal-navbar">
        <h3 className="horizontal-navbar-link">Accueil</h3>
        <h3 className="horizontal-navbar-link">Profil</h3>
        <h3 className="horizontal-navbar-link">Réglages</h3>
        <h3 className="horizontal-navbar-link">Communauté</h3>
      </nav>
    </header>
  );
};

export default Header;
