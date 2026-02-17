import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Collapse } from "bootstrap";
import "../styles/navbar-footer.scss";

const Navbar = ({ prenom, nom }) => {
  const menuRef = useRef(null);

  const closeMenu = () => {
    if (menuRef.current) {
      const bsCollapse = Collapse.getInstance(menuRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        const bsCollapse = Collapse.getInstance(menuRef.current);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-primary"
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

        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          ref={menuRef}
        >
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink className="nav-link" to="/services" onClick={closeMenu}>
              Services
            </NavLink>

            <NavLink className="nav-link" to="/portfolio" onClick={closeMenu}>
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

            <NavLink className="nav-link" to="/mentions" onClick={closeMenu}>
              Mentions Légales
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;