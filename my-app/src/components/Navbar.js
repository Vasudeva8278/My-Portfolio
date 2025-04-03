import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for navbar open/closed state

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle state on button click
  };


  return (
    <>
    <div style={{backgroundColor: "#000003"}}>
    <nav className={`navbar navbar-expand-lg navbar-dark  ${isOpen ? 'show' : ''}`} style={{backgroundColor: "#000003"}}>
      {/* Your name or logo */}
      <NavLink className="navbar-brand" to="/" exact>Vasu Dev</NavLink>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isOpen} // Update aria-expanded based on state
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav" style={{marginRight:"6rem"}}>
        <ul className="navbar-nav ms-auto">
        <li className="nav-item" style={{ marginRight: '5rem' }}>
            <NavLink className="nav-link active" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item" style={{ marginRight: '5rem' }}>
            <NavLink className="nav-link" to="/Skills">
              Skills
            </NavLink>
          </li>
          <li className="nav-item" style={{ marginRight: '5rem' }}>
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item" style={{ marginRight: '3rem' }}>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
