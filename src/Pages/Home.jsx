import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "../components/user";
import Dedale from "../components/dedale";

const Home = () => {
  const [showDedale, setShowDedale] = useState(false); // État pour afficher Dedale

  const handleClick = () => {
    setShowDedale(true); // Affiche Dedale
  };

  const handleClose = () => {
    setShowDedale(false); // Cache Dedale
  };

  return (
    <main>
      <div className="home d-flex flex-column justify-content-center align-items-center text-center text-white bg-cover vh-80 w-100">
        <h1 className="home-title-h1 fw-semibold fs-1">
          Bonjour, je suis <User />
        </h1>
        <h2 className="home-title-h2 fw-semibold">
          Développeur web full stack
        </h2>
        <button className="btn btn-danger" onClick={handleClick}>
          En savoir plus
        </button>

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
            src="/img/john-doe-about.jpg"
            alt="Image de présentation"
            className="about-img"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a,
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
        </article>
      </section>
    </main>
  );
};

export default Home;
