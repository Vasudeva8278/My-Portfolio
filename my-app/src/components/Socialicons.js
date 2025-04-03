import React, { useState } from "react";
import { FaHome, FaCode, FaProjectDiagram, FaEnvelope, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Socialicons.css";

export const Socialicons = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="circular-menu">
      {/* Floating Menu Button */}
      <button className={`menu-button ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <FaBars />
      </button>

      {/* Circular Links */}
      <ul className={`menu-items ${open ? "show" : ""}`}>
        <li>
          <Link to="/">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <FaCode />
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <FaProjectDiagram />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope />
          </Link>
        </li>
      </ul>
    </div>
  );
};
