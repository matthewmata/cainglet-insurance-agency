import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand ">
        <Link to="/" className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Cainglet logo"
            width="112"
            height="28"
          />
        </Link>
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
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
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
              <Link to="/contact-us" className="navbar-item">
                Commerical
              </Link>
            </div>
          </div>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/contact-us" className="navbar-item">
            Contact Us
          </Link>
          <Link to="/espanol-contact-us" className="navbar-item">
            ¡Español!
          </Link>
          <a
            className="navbar-item"
            href="https://isalescrm.io/book/caingletinsurance"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
