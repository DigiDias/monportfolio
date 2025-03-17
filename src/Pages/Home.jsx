import React from "react";
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <main>
        <div className="home">
        <h1 className="home-title-h1">Bonjour, je suis John Doe</h1>
        <h2 className="home-title-h2">Développeur web full stack</h2>
        <button type="button" className="btn btn-danger">En savoir plus</button>
      </div>
      <section className="cont-A">
        <article className="cont-A-1">
    <p className="title-app">À propos</p>
    
    <img src="/img/john-doe-about.jpg" alt="Image de présentation" className="about-img"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,</p>
    </article>
<article className="cont-A-2">
        <p className="title-app">Mes compétences</p>
        <p className="comp">HTML5 90%</p>
        <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-danger" style={{ width: "90%" }}></div>
        </div>
        <p className="comp">CSS3 80%</p>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style={{width: "80%"}}></div>
</div>
<p className="comp">JAVASCRIPT 70%</p>
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning" style={{width: "70%"}}></div>
</div>
<p className="comp">PHP 60%</p>
<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style={{width: "60%"}}></div>
</div>
<p className="comp">REACT 50%</p>
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width: "50%"}}></div>
</div>
        </article>
</section>

      </main>
    );
}

export default Home;



