import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom"; // ✅ Correction de l'importation
import "../styles/navbar-footer.scss";
import User from "./user";

const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar bg-primary"
      data-bs-theme="dark"
    >
      <div className="container-fluid text-uppercase">
        <a className="navbar-brand" href="/">
          <User />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link"  to="/" >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/services"
             
            >
              Services
            </NavLink>
            <NavLink
              className="nav-link"
              to="/portfolio"
           
            >
              Portfolio
            </NavLink>
        <NavLink
  to="/contact"
  className={({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`
  }
>
  Contact
</NavLink>
            <NavLink
              className="nav-link"
              to="/mentions"
          
            >
              Mentions Légales
            </NavLink>

        
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
