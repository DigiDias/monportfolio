import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Portfolio = () => {
    return (
        <main style={{ paddingTop: "100px" }}>
        <div>
        <div className="center">
            <h2 className="title-h2">Portfolio</h2>
            <p>Voici quelques unes de mes réalisations</p>
            
       <hr></hr>
        </div>

        <div className="Contener-Card row">

        <div className="card cogit l-md-4 col-sm-12 mb-3 px-0" style={{width: "18rem"}}>
  <img src="./img/fresh-food.jpg" className="card-img-top" alt="photo FresFood"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Site de vente de produits frais en lignes</p>
    <a href="#" className="btn btn-primary">Voir le site</a>
    
  </div>
  <p className="sousTitre">Site réalisé avec PHP et MYSQL</p>
</div>


<div className="card cogit l-md-4 col-sm-12 mb-3 px-0" style={{width: "18rem"}}>
  <img src="./img/restaurant-japonais.jpg" className="card-img-top" alt="photo restaurant japonais"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Voir le site</a>
    
  </div>
  <p className="sousTitre">Site réalisé avec PHP et MYSQL</p>
</div>

<div className="card cogit l-md-4 col-sm-12 mb-3 px-0" style={{width: "18rem"}}>
  <img src="./img/espace-bien-etre.jpg" className="card-img-top" alt="photo Espace Bien être"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Voir le site</a>
    
  </div>
  <p className="sousTitre">Site réalisé avec PHP et MYSQL</p>
</div>

<div className="card cogit l-md-4 col-sm-12 mb-3 px-0" style={{width: "18rem"}}>
  <img src="./img/seo.jpg" className="card-img-top" alt="photo SEO"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Voir le site</a>
    
  </div>
  <p className="sousTitre">Site réalisé avec PHP et MYSQL</p>
</div>

<div className="card cogit l-md-4 col-sm-12 mb-3 px-0" style={{width: "18rem"}}>
  <img src="./img/coder.jpg" className="card-img-top" alt="photo Coder"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Voir le site</a>
    
  </div>
  <p className="sousTitre">Site réalisé avec PHP et MYSQL</p>
</div>

<div className="card cogit l-md-4 col-sm-12 mb-3 px-0" style={{width: "18rem"}}>
  <img src="./img/screens.jpg" className="card-img-top" alt="photo Screens"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Voir le site</a>
    
  </div>
  <p className="sousTitre">Site réalisé avec PHP et MYSQL</p>
</div>


</div>


        </div>
        </main>
    );
}

export default Portfolio;


