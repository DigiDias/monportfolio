import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/navbar-footer.scss";
import "../App.css";
import User from "./user";

const Footer = () => {
  return (
    <footer
      className="footer bg-body-tertiary  d-flex justify-content-evenly mt-4"
      data-bs-theme="dark"
    >
      <div className="row justify-content-center ">
        <section className="col-md-4 col-sm-12 mb-3 text-md-start text-center px-3 ">
          <p className="footer-title ">
            <User />
          </p>
          <adress>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>

            <p>
              <Link to="tel:1020304050">10 20 30 40 50</Link>
            </p>
            <p>
              <Link to="mailto:johndoe@gmail.com">johndoe@gmail.com</Link>
            </p>
          </adress>
          <div className="icones d-flex justify-content-center">
            <a
              href="https://github.com/DigiDias"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i class="bi bi-github"></i>
            </a>
            <a
              href="https://x.com/twitter"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i class="bi bi-twitter"></i>
            </a>
            <a
              href="https://fr.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </section>
        <section className="col-md-4 col-sm-12 mb-3 text-md-start text-center px-3 w-33">
          <p className="footer-title">Lien utiles</p>
          <Link className="nav-link text-primary " aria-current="page" to="/">
            Home
          </Link>
          <Link className="nav-link text-primary " to="/services">
            Services
          </Link>
          <Link className="nav-link text-primary " to="/portfolio">
            Portfolio
          </Link>
          <Link className="nav-link text-primary " to="/contact">
            Contact
          </Link>
          <Link className="nav-link text-primary " to="/mentions">
            Mentions Légales
          </Link>
        </section>
        <section className="col-md-4 col-sm-12 mb-3 text-md-start text-center px-3 w-33">
          <p className="footer-title text-nowrap ">
            Mes dernieres réalisations
          </p>
          <Link className="nav-link text-primary " to="/portfolio">
            Fresh Food
          </Link>
          <Link className="nav-link text-primary " to="/portfolio">
            Restaurant Akira
          </Link>
          <Link className="nav-link text-primary " to="/portfolio">
            Espace Bien-être
          </Link>
          <Link className="nav-link text-primary " to="/portfolio">
            SEO
          </Link>
          <Link className="nav-link text-primary " to="/portfolio">
            Création d'une API
          </Link>
          <Link className="nav-link text-primary " to="/portfolio">
            Maquette d'un site
          </Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
