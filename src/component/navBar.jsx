import React from "react";
import Button from "../component/common/button.jsx";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  let navClass = ["navbar-float", "shadow-sm"];
  if (location.pathname === "/") {
    navClass = navClass[0];
  } else {
    navClass = navClass[1];
  }

  let activ = "nav-link ";
  activ += ({ isActive }) => (isActive ? "active" : "");
  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-light ${navClass}`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            Digi<span className="text-primary">Gram.</span>
          </Link>

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarContent">
            <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
              <li className="nav-item">
                <NavLink to="/" className={activ}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={activ}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={activ}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className={activ}>
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={activ}>
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="ml-auto">
              <Button buttonStyle="btn-outline rounded-pill">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
