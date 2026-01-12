import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";

const Infocontact = ({ nom, prenom, adresse, codePostal, ville, Pays }) => {
  return (
    <address className="infoContact">
      <p>
        <i className="bi bi-map"></i> {adresse}
      </p>
      <p>
        <i className="bi bi-geo-alt"></i> {codePostal} {ville} {Pays}
      </p>

      <p>
        <Link to="tel:0692823999">
          <i className="bi bi-phone"></i> 0692 82 39 99
        </Link>
      </p>
      <p>
        <Link to="mailto:sammy.gouljiar@gmail.com">
          <i className="bi bi-envelope-at"></i> sammy.gouljiar@digidias.re
        </Link>
      </p>
    </address>
  );
};

export default Infocontact;
