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
      <section className="about">
    <p>À propos</p>
    <img src="/img/john-doe-about.jpg" alt="Image de présentation" className="about-img"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,</p>
   
</section>

      </main>
    );
}

export default Home;


