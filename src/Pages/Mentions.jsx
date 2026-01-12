import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Infocontact from "../components/infocontact";
import User from "../components/user";

const Mentions = ({ nom, prenom, adresse, codePostal, Ville, Pays }) => {
  return (
    <main style={{ paddingTop: "100px" }}>
      <div className="center">
        <h2 className="title-h2 fw-semibold">Mentions légales</h2>

        <hr></hr>
      </div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Editeur du site
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>
                {prenom} {nom}
              </strong>
              <Infocontact 
                 nom={nom}
                 prenom={prenom}
                 adresse={adresse}
                 codePostal={codePostal}
                 ville={Ville}
                 Pays={Pays}/>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Hébérgeur
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>alwaysdata</strong>
              <p>
                <address>91 Rue Faubourg Saint-Honoré, 75008 Paris </address>
              </p>
              <a href=">www.alwaydate.com" target="_blank">
                www.alwaydate.com
              </a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>Crédits</strong>
              <p>
                Ce site à été réalisé par <User />, étudiant au{" "}
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  target="_blank"
                >
                  Centre Européen de la formation
                </a>
              </p>
              <p>
                <italic>
                  Les images utilisées sur ce site sont libres de droits 
                </italic>
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mentions;
