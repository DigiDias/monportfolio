import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar-footer.scss";
import { Link } from "react-router-dom";
import "../App.css";


const Footer = ({ nom, prenom, adresse, codePostal, ville, Pays }) => {
  return (
    <footer
      className="footer bg-body-tertiary  d-flex flex-column align-items-center mt-4 w-100 small"
      data-bs-theme="dark"
    >
      <section className="d-flex justify-content-evenly flex-wrap w-100 p-4 border-bottom border-secondary-subtle mb-1 fst-italic">
        <section className="col-md-4 col-sm-12 mb-3 text-md-start text-center px-3">
          <p className="footer-title ">
           <a href="/">{prenom} {nom}</a>
          </p>
          <address className="lh-sm">
            <p className="mb-1">{adresse}</p>
            <p className="mb-1">{ codePostal} {ville} {Pays}</p>

            <p className="mb-1">
              <Link to="tel:0692823999">0692 82 39 99</Link>
            </p>
            <p className="mb-1">
              <Link to="mailto:sammy.gouljiar@gmail.com">sammy.gouljiar@digidias.re</Link>
            </p>
          </address>
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
          <Link className="nav-link text-primary " to="https://ravatefoot.onrender.com/" target="_blank">
            Championnat de Football
          </Link>
          <Link className="nav-link text-primary " to="/SAV">
            Service aprés-vente
          </Link>
          <Link className="nav-link text-primary " to="https://digidias.onrender.com/" target="_blank">
            Curriculum Vitae
          </Link>
          <Link className="nav-link text-primary " to="/powerbi">
           Tableaux de Bord Power BI Intégrés
          </Link>
          <Link className="nav-link text-primary " to="/holding">
           Gestion de SCI
          </Link>
          <Link className="nav-link text-primary " to="https://www.figma.com/design/av8Vhqj53KHlC3Ck8UgFVB/Devoir-4-Figma?node-id=48-12&p=f&t=1mQPdjHJ8UTka2VP-0" target="_blank">
            Maquette d'un site Web
          </Link>
        </section>

        </section>

             <div className="icones d-flex align-items-center gap-3 ">
            <a
              href="https://github.com/DigiDias"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i class="bi bi-github"></i>
            </a>
           
            <a
              href="https://www.linkedin.com/in/sammy-gouljiar-a9057b2b7"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </div>

         <div>
  <p>
    &copy; {new Date().getFullYear()} {prenom} {nom} - Tous droits réservés.
  </p>
</div>
      
    </footer>
  );
};

export default Footer;
