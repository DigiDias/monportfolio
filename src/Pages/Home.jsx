import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "../components/user";
import Dedale from "../components/dedale";


const Home = ({ nom, prenom, adresse, codePostal, Ville, Pays }) => {
  const [showDedale, setShowDedale] = useState(false); // État pour afficher Dedale

  const handleClick = () => {
    setShowDedale(true); // Affiche Dedale
  };

  const handleClose = () => {
    setShowDedale(false); // Cache Dedale
  };

  return (
    <div>
    <main className="d-flex flex-column justify-content-center align-items-center w-100 ">
      <div className="home d-flex flex-column align-items-center text-center text-white bg-cover vh-80 w-100 pt-5 mt-5">
    
        <h1 className="home-title-h1 fw-semibold fs-1">
          Bonjour, je suis {prenom} {nom} 
        </h1>
       <h2 className="home-title-h2 fw-semibold">
  Développeur web full stack – React, Node.js, Power BI
</h2>

{!showDedale && ( <button className="btn btn-danger" onClick={handleClick}>
          En savoir plus
        </button>)}
       

        {showDedale && (
          <div className="d-flex flex-column bg-dark">
            <Dedale />
            <button
              id="btnFermer"
              className="btn btn-secondary align-self-end"
              onClick={handleClose}
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    
      <section className="cont-A d-flex flex-wrap justify-content-center gap-4 p-4 border border-secondary-subtle mt-3 mb-3 shadow-lg bg-white w-90 mx-auto">
        <article className="cont-A-1 ">
          <p className="title-app">À propos</p>

          <img
            src="/img/Photo_SG_LK.jpg"
            alt="Image de présentation"
            className="about-img"
          />
        


<p>
Ancien contrôleur de gestion reconverti en développeur web full-stack, je combine une solide maîtrise des enjeux financiers
avec des compétences techniques en développement applicatif. Cette double expertise me permet de concevoir des outils métiers
performants, adaptés aux besoins concrets des équipes et aux réalités opérationnelles de l’entreprise.
<br /><br />
Spécialisé dans le développement d’applications web orientées données, j’interviens aussi bien sur le front-end que sur le back-end,
en portant une attention particulière à la qualité du code, à la maintenabilité et à l’expérience utilisateur.
J’intègre également des rapports et tableaux de bord Power BI afin de piloter la performance, centraliser les indicateurs
et faciliter l’analyse et la prise de décision.
<br /><br />
Curieux, rigoureux et orienté solutions, je développe des outils fiables, utiles et alignés avec les enjeux métiers
et les objectifs de performance.
</p>




        </article>
        <article className="cont-A-2 ">
          <p className="title-app">Mes compétences</p>
          <p className="comp">HTML5 90%</p>
          <div
            class="progress"
            role="progressbar"
            aria-label="Danger example"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-danger" style={{ width: "90%" }}></div>
          </div>
          <p className="comp">CSS3 80%</p>
          <div
            class="progress"
            role="progressbar"
            aria-label="Info example"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-info" style={{ width: "80%" }}></div>
          </div>
          <p className="comp">JAVASCRIPT 70%</p>
          <div
            class="progress"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-warning" style={{ width: "70%" }}></div>
          </div>
          <p className="comp">PHP 60%</p>
          <div
            class="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-success" style={{ width: "60%" }}></div>
          </div>

<p className="comp">POWER BI 60%</p>
          <div
            class="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-warning" style={{ width: "60%" }}></div>
          </div>


          <p className="comp">REACT 50%</p>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style={{ width: "50%" }}></div>
          </div>


       <p className="comp">EXPRESS 50%</p>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-secondary" style={{ width: "50%" }}></div>
          </div>

        </article>
      </section>
    </main>
  
  </div>
  );
};


export default Home;
