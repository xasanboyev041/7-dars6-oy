import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/saved-items">Saved Items</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default NavBar;
