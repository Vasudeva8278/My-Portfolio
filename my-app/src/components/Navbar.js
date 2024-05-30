import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white" style={{ backgroundColor: '#181414' }}>
      
      <Link className="navbar-brand" to="/" style={{marginTop:"-5px"}}>Vasu Dev</Link> {/* Your name or logo */}
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
            <NavLink className="nav-link" to="/Skills">
              Skills
            </NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Resume">
           Resume
            </NavLink>
          </li>
          <li className="nav-link" style={{marginTop:"-5px"}}>
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
