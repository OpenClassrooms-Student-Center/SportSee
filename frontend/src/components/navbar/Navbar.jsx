import React from "react";
import "../style.css";
import "./navbar.css";

const Navbar = () => {
  const images = ["yoga.png", "swim.png", "bike.png", "dumbell.png"];

  return (
    <nav className="vertical-navbar">
      <div className="navbar-icons">
        {images.map((image, index) => (
          <img
            key={index}
            src={require(`./navbar-images/${image}`)}
            alt={`icone de sport ${index}`}
            className="navbar-icon"
          />
        ))}
      </div>
      <h4 className="copyright">Copyright, SportSee © 2020</h4>
    </nav>
  );
};

export default Navbar;
