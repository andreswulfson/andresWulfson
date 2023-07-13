import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Andrés Wulfson
      </Link>

      <nav>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Contact
        </NavLink>
      </nav>

      {/* <a
      href="https://www.linkedin.com/in/andres-w-293a89140/"
      target="_blank"
      rel="noreferrer"
      className="linkedin"
    >
      <img src={ln} alt="LinkedIn" />
      linkedin.com/in/andreswulfson
    </a> */}
    </header>
  );
}

export default Header;
