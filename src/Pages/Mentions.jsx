import React, { useState } from "react";
import "../App.css";
import Infocontact from "../components/infocontact";

const Mentions = ({
  nom,
  prenom,
  adresse,
  codePostal,
  Ville,
  Pays,
  Tel,
  Email,
}) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <main style={{ paddingTop: "100px" }}>
      <div className="center">
        <h2 className="title-h2 fw-semibold">Mentions légales</h2>
        <hr />
      </div>

      <div className="accordion">

        {/* ÉDITEUR */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                openItems.includes(1) ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleItem(1)}
            >
              Editeur du site
            </button>
          </h2>

          <div
            className={`accordion-collapse collapse ${
              openItems.includes(1) ? "show" : ""
            }`}
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
                Pays={Pays}
                Tel={Tel}
                Email={Email}
              />
            </div>
          </div>
        </div>

        {/* HÉBERGEUR */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                openItems.includes(2) ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleItem(2)}
            >
              Hébergeur
            </button>
          </h2>

          <div
            className={`accordion-collapse collapse ${
              openItems.includes(2) ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <strong>OVH</strong>
              <p>
                <address>
                  2, rue Kellermann, 59100 Roubaix
                </address>
              </p>
              <a
                href="https://www.ovhcloud.com/fr/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.ovhcloud.com/fr/
              </a>
            </div>
          </div>
        </div>

        {/* CRÉDITS */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                openItems.includes(3) ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleItem(3)}
            >
              Crédits
            </button>
          </h2>

          <div
            className={`accordion-collapse collapse ${
              openItems.includes(3) ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <strong>Crédits</strong>
              <p>
                Ce site a été réalisé par {prenom} {nom}, étudiant au{" "}
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Centre Européen de la formation
                </a>
              </p>
              <p>
                <em>
                  Les images utilisées sur ce site sont libres de droits
                </em>
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Mentions;