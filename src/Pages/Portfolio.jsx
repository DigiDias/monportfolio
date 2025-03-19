import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Portfolio = () => {
    return (
        <main >
            <img className="img-banniere" src="/img/banner.jpg" alt="Image de la banniére"></img>

        <div>
        <div className="center">
            <h2 className="title-h2">Portfolio</h2>
            <p>Voici quelques unes de mes réalisations</p>
            
       <hr></hr>
        </div>

        <div className="Contener-Card row justify-content-evenly">
          <div className="card cogit col-md-4 col-sm-4 col-12 mb-3 px-0" style={{width: "18rem"}}>

       
  <img src="./img/fresh-food.jpg" className="card-img-top" alt="image FresFood"></img>
  <div class="card text-center d-flex flex-column h-100 ">

  <div class="card-body d-flex flex-column justify-content-between">
   <h5 class="card-title">Fresh Food</h5>
    <p s="card-text">Site de vente en ligne</p>
    <a href="#" class="btn btn-primary align-self-center ">Voir le site</a>
  </div>
  <div class="card-footer text-body-secondary mt-auto">
    Site réalisé avec PHP et MYSQL
  
  </div>
</div>
</div>


<div className="card cogit col-md-4 col-sm-4 col-12 mb-3l-md-4 col-sm-12 mb-3 px-0" style={{width: "18rem"}}>

       
<img src="./img/restaurant-japonais.jpg" className="card-img-top" alt="image Restaurant Japonais"></img>
<div class="card text-center d-flex flex-column h-100 ">

<div class="card-body d-flex flex-column justify-content-between">
 <h5 class="card-title">Restaurant Akira</h5>
  <p s="card-text">Site de vente de produits frais en ligne</p>
  <a href="#" class="btn btn-primary align-self-center ">Voir le site</a>
</div>
<div class="card-footer text-body-secondary mt-auto">
  Site réalisé avec WordPress

</div>
</div>
</div>

<div className="card cogit col-md-4 col-sm-4 col-12 mb-3 px-0" style={{width: "18rem"}}>

       
<img src="./img/espace-bien-etre.jpg" className="card-img-top" alt="image Espace Bien être"></img>
<div class="card text-center d-flex flex-column h-100 ">

<div class="card-body d-flex flex-column justify-content-between">
 <h5 class="card-title">Espace bien-être</h5>
  <p s="card-text">Site de vente de produits frais en ligne</p>
  <a href="#" class="btn btn-primary align-self-center ">Voir le site</a>
</div>
<div class="card-footer text-body-secondary mt-auto">
  Site réalisé avec LARAVEL

</div>
</div>
</div>

<div className="card cogit col-md-4 col-sm-4 col-12 mb-3 px-0" style={{width: "18rem"}}>

       
<img src="./img/SEO.jpg" className="card-img-top" alt="image SEO"></img>
<div class="card text-center d-flex flex-column h-100 ">

<div class="card-body d-flex flex-column justify-content-between">
 <h5 class="card-title">SEO</h5>
  <p s="card-text">Amélioration d'un référencement d'un site e-commerce</p>
  <a href="#" class="btn btn-primary align-self-center ">Voir le site</a>
</div>
<div class="card-footer text-body-secondary mt-auto">
  Utilisation des outils SEO

</div>
</div>
</div>

<div className="card cogit col-md-4 col-sm-4 col-12 mb-3 px-0" style={{width: "18rem"}}>

       
<img src="./img/coder.jpg" className="card-img-top" alt="image coder"></img>
<div class="card text-center d-flex flex-column h-100 ">

<div class="card-body d-flex flex-column justify-content-between">
 <h5 class="card-title">Création d'une API</h5>
  <p s="card-text">Création d'une API RESTFULL publique</p>
  <a href="#" class="btn btn-primary align-self-center ">Voir le site</a>
</div>
<div class="card-footer text-body-secondary mt-auto">
  PHP - SYMFONY

</div>
</div>
</div>
<div className="card cogit col-md-4 col-sm-4 col-12 mb-3 px-0" style={{width: "18rem"}}>
<img src="./img/screens.jpg" className="card-img-top" alt="image screens"></img>
<div class="card text-center d-flex flex-column h-100 ">

<div class="card-body d-flex flex-column justify-content-between">
 <h5 class="card-title">Maquette d'un site Web</h5>
  <p s="card-text">Création du prototype d'un site</p>
  <a href="#" class="btn btn-primary align-self-center ">Voir le site</a>
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
}

export default Portfolio;


