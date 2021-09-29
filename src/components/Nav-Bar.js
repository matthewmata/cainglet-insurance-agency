import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/cainglet_logo-02.svg";

const NavBar = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand ">
        <button
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="cainglet-navbar"
          onClick={() => setisActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        id="cainglet-navbar"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        {/* <div className="navbar-start"> */}
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link to="/quote/auto-insurance" className="navbar-link">
            Insurance
          </Link>

          <div className="navbar-dropdown">
            <Link to="/quote/auto-insurance" className="navbar-item">
              Auto
            </Link>
            <hr className="navbar-divider" />
            <Link to="/quote/homeowners-insurance" className="navbar-item">
              Homeowners
            </Link>
            <hr className="navbar-divider" />
            <Link to="/contact-us" className="navbar-item">
              Life
            </Link>
            <hr className="navbar-divider" />
            <Link to="/quote/commerical" className="navbar-item">
              Commerical
            </Link>
          </div>
        </div>
        <div className="navbar-start">
          <Link to="/about" className="navbar-item">
            About
          </Link>
        </div>
        <div className="navbar-start nav-icon">
          <Link to="/" className="navbar-item">
            <img
              src={Logo}
              alt="Cainglet logo"
            />
          </Link>
        </div>
        <div className="navbar-start">
          <Link to="/contact-us" className="navbar-item">
            Contact Us
          </Link>
        </div>
        <div className="navbar-start">
          <Link to="/espanol-contact-us" className="navbar-item">
            ¡Español!
          </Link>
        </div>
        <div className="navbar-start">
          <a
            className="navbar-item"
            href="https://app.ringy.com/book/caingletinsurance"
          >
            Book Appointment
          </a>
        </div>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
