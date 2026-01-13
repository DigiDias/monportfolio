import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Portfolio = () => {
  return (
   <main style={{ paddingTop: "100px" }}>
     

      <div>
        <div className="center">
          <h2 className="title-h2 fw-semibold">Portfolio</h2>
          <p>Voici quelques unes de mes réalisations</p>

          <hr></hr>
        </div>

        <div className="Contener-Card row justify-content-evenly d-flex gap-2">
          <div
            className="card cogit col-lg-3 col-md-4 col-sm-6 col-12 mb-3 px-0"
            
          >
            <img
              src="./img/foot.jpg"
              className="card-img-top"
              alt="image foot"
            ></img>
            <div class="card text-center d-flex flex-column h-100 ">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Championnat de Foot</h5>
                <p s="card-text">Site de gestion d'un championnat interne de foot</p>
                <a href="https://ravatefoot.onrender.com/" class="btn btn-primary align-self-center "
                target="_blank">
                  Voir le site
                </a>
              </div>
              <div class="card-footer text-body-secondary mt-auto">
                Site réalisé avec PHP MYSQL et BOOTSTRAPP
              </div>
            </div>
          </div>

          <div
            className="card cogit col-lg-3 col-md-4 col-sm-6 col-12 mb-3 px-0"
            
          >
            <img
              src="./img/sav.jpg"
              className="card-img-top"
              alt="photo service après vente"
            ></img>
            <div class="card text-center d-flex flex-column h-100 ">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Service après vente</h5>
                <p s="card-text">Site de SAV</p>
                <a href="/SAV" class="btn btn-primary align-self-center ">
                  Voir le site
                </a>
              </div>
              <div class="card-footer text-body-secondary mt-auto">
                Site réalisé avec REACT, EXPRESS, API JIRA, BOOTSTRAPP, JAVASCRIPT et POWER BI
              </div>
            </div>
          </div>

          <div
            className="card cogit col-lg-3 col-md-4 col-sm-6 col-12 mb-3 px-0"
            
          >
            <img
              src="./img/avatar_Sammy.jpg"
              className="card-img-top"
              alt="mon avatar"
            ></img>
            <div class="card text-center d-flex flex-column h-100 ">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Curriculum vitae</h5>
                <p s="card-text">Digitalisation de mon CV</p>
                <a href="https://digidias.onrender.com/" class="btn btn-primary align-self-center " target="_blank">
                  Voir le site
                </a>
              </div>
              <div class="card-footer text-body-secondary mt-auto">
                Site HTML CSS et BOOTSTRAPP
              </div>
            </div>
          </div>

          <div
            className="card cogit col-lg-3 col-md-4 col-sm-6 col-12 mb-3 px-0"
            
          >
            <img
              src="./img/PowerBi.jpg"
              className="card-img-top"
              alt="image Power BI"
            ></img>
            <div class="card text-center d-flex flex-column h-100 ">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Tableaux de Bord Power BI Intégrés</h5>
                <p s="card-text">
                  Mise en place de tableaux de bord Power BI intégrés dans une application web
                </p>
                <a href="/powerbi" class="btn btn-primary align-self-center ">
                  Voir le site
                </a>
              </div>
              <div class="card-footer text-body-secondary mt-auto">
                POWER BI, HTML, JAVASCRIPT, BOOTSRAPP, EXPRESS
              </div>
            </div>
          </div>

          <div
            className="card cogit col-lg-3 col-md-4 col-sm-6 col-12 mb-3 px-0card cogit col-md-4 col-sm-4 col-12 mb-3 px-0"
            
          >
            <img
              src="./img/Loyer.jpg"
              className="card-img-top"
              alt="image coder"
            ></img>
            <div class="card text-center d-flex flex-column h-100 ">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Gestion de SCI</h5>
                <p s="card-text">Création d'une appli de gestion des loyers</p>
                <a href="/holding" class="btn btn-primary align-self-center ">
                  Voir le site
                </a>
              </div>
              <div class="card-footer text-body-secondary mt-auto">
                EXPRESS, REACT, API INSEE, BOOTSTRAPP, JAVASCRIPT
              </div>
            </div>
          </div>
          <div
            className="card cogit col-lg-3 col-md-4 col-sm-6 col-12 mb-3 px-0"
            
          >
            <img
              src="./img/screens.jpg"
              className="card-img-top"
              alt="image screens"
            ></img>
            <div class="card text-center d-flex flex-column h-100 ">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Maquette d'un site Web</h5>
                <p s="card-text">Création du prototype d'un site réalisé dans le cadre d'un devoir du CFE</p>
                <a target="_blank" href="https://www.figma.com/design/av8Vhqj53KHlC3Ck8UgFVB/Devoir-4-Figma?node-id=48-12&p=f&t=1mQPdjHJ8UTka2VP-0" class="btn btn-primary align-self-center ">
                  Voir le site
                </a>
              </div>
              <div class="card-footer text-body-secondary mt-auto">
                Réalisé avec FIGMA
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
