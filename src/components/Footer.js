import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/navbar-footer.scss";
import "../App.css"

const Footer = () => {
  return (
    <footer className="  bg-body-tertiary " data-bs-theme="dark">
      <section>
        <p className="footer-title">John Doe</p>
        <adress>
          <p>4O rue laure Diebold</p>
          <p>69009 Lyon, France</p>
        </adress>
        <Link to="tel:1020304050">10 20 30 40 50</Link>
        <Link to="mailto:johndoe@gmail.com">johndoe@gmail.com</Link>
      </section>
      <section>
        <p className="footer-title">Lien utiles</p>
        <Link className="nav-link" aria-current="page" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/services">
          Services
        </Link>
        <Link className="nav-link" to="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/mentions">
          Mentions Légales
        </Link>
      </section>
      <section>
        <p className="footer-title">Mes dernieres réalisations</p>
        <p>Fresh Food</p>
        <p>Resaturant Akira</p>
        <p>Espace bien-être</p>
        <p>SEO</p>
        <p>Création d'une API</p>
        <p>Maquette d'un site</p>

      </section>
    </footer>
  );
};

export default Footer;
