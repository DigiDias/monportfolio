import React from "react";

import { NavLink } from "react-router-dom"; // 
import "../styles/navbar-footer.scss";


const Navbar = ({ prenom, nom }) => {

  //  Ferme le menu burger après clic
  const closeMenu = () => {
    const menu = document.getElementById("navbarNavAltMarkup");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar bg-primary"
      data-bs-theme="dark"
    >
      <div className="container-fluid text-uppercase">
        <a className="navbar-brand" href="/" onClick={closeMenu}>
          {prenom} {nom}
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
            <NavLink className="nav-link"  to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/services"
        onClick={closeMenu}
             
            >
              Services
            </NavLink>
            <NavLink
              className="nav-link"
              to="/portfolio"
          onClick={closeMenu}
            >
              Portfolio
            </NavLink>
        <NavLink
  to="/contact"
onClick={closeMenu}
  className={({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`
  }
>
  Contact
</NavLink>
            <NavLink
              className="nav-link"
              to="/mentions"
    onClick={closeMenu}
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
