import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";


const Services = () => {
    return (
        <main style={{ paddingTop: "100px" }}>
        <div>
        <div className="center">
            <h2 className="title-h2">Mon offre de services</h2>
            <p>Voici les prestations sur lequelles je peux intervenir</p>
            
       <hr></hr>
        </div>
        <div className="Contener-Card row d-flex justify-content-evenly mb-4">

        <div className="card" style={{width: "18rem"}}>
  <div className="card-body d-flex  flex-column align-items-center">
  <i class="bi bi-brush text-primary mb-2"></i>
    <h5 className="card-title ">UX Design</h5>
    <p className="card-text text-center">l'UX Design est une discipline qui consite à concevoir des produits
        (sitesweb, applications mobiles, logiciels, objects connéctés, etc) en plaçant l'utilisateur
    </p>

  </div>
</div>


<div className="card" style={{width: "18rem"}}>
<div className="card-body d-flex  flex-column align-items-center">
<i class="bi-code-slash text-primary mb-2"></i>
    <h5 className="card-title">Dévéloppement web</h5>
    <p className="card-text text-center">Le développement de sites web consites à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
        et des frameworks (Boorstrap, react, Angular, ect).
    </p>

  </div>
</div>

<div className="card" style={{width: "18rem"}}>
<div className="card-body d-flex  flex-column align-items-center">
<i class="bi bi-search text-primary mb-2"></i>
    <h5 className="card-title">Référencement</h5>
    <p className="card-text text-center">Le référencement naturel (SEO) est une technique qui consite à optimiser un site web pour le faire remonter dans les résultats
        des moteurs de recherche (Google, Bing, Yahoo, ect.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
    </p>

  </div>
</div>


        </div>
        </div>
        </main>

    );
}

export default Services;
