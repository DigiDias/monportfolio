import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import "../App.css";

// composant parent
const Infocontact = ({ adresse, codePostal, ville, Pays, Tel, Email }) => {
  return (
    <address className="infoContact">
      <p>
        <i className="bi bi-map"></i> {adresse}
      </p>
      <p>
        <i className="bi bi-geo-alt"></i> {codePostal} {ville} {Pays}
      </p>

      <p>
        <Link to={`tel:${Tel}`}>
          <i className="bi bi-phone"></i> {Tel}
        </Link>
      </p>
      <p>
        <Link to={`mailto:${Email}`}>
          <i className="bi bi-envelope-at"></i> {Email}
        </Link>
      </p>
    </address>
  );
};

export default Infocontact;
