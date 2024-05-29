import React from 'react';
import { NavLink } from 'react-router-dom';
//import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#181414' }}>
      <Link className="navbar-brand" to="/">Vasu Dev</Link> {/* Your name or logo */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link active" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/skills">
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
