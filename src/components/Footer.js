import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/navbar-footer.scss";
import "../App.css"
import User from "./user";

const Footer = () => {
  return (
    <footer
     className="  bg-body-tertiary " data-bs-theme="dark">
        <div className="row">
        <div className="col-md-4 col-sm-12 mb-3">
      <section className="adress">
        <p className="footer-title"><User/></p>
        <adress>
          <p>40 rue laure Diebold</p>
          <p>69009 Lyon, France</p>
        
        <p><Link to="tel:1020304050">10 20 30 40 50</Link></p>
        <p><Link to="mailto:johndoe@gmail.com">johndoe@gmail.com</Link></p>
        </adress>
      </section>
      </div>
      <div className="col-md-4 col-sm-12 mb-3">
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
      </div>
      <div className="col-md-4 col-sm-12 mb-3">
      <section>
        <p className="footer-title">Mes dernieres réalisations</p>
        <p>Fresh Food</p>
        <p>Resaturant Akira</p>
        <p>Espace bien-être</p>
        <p>SEO</p>
        <p>Création d'une API</p>
        <p>Maquette d'un site</p>

      </section>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
