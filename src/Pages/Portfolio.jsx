import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

        <div className="card col-md-4 col-sm-12 mb-3" style={{width: "18rem"}}>
  <img src="./img/fresh-food.jpg" className="card-img-top" alt="photoFresFood"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="card" style={{width: "18rem"}}>
  <img src="./img/restaurant-japonais.jpg" className="card-img-top" alt="PhotorestaurantJaponais"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card" style={{width: "18rem"}}>
  <img src="./img/espace-bien-etre.jpg" className="card-img-top" alt="PhotoespaceBienEtre"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div className="card" style={{width: "18rem"}}>
  <img src="./img/seo.jpg" className="card-img-top" alt="photoSeo"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card" style={{width: "18rem"}}>
  <img src="./img/coder.jpg" className="card-img-top" alt="photoCoder"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card" style={{width: "18rem"}}>
  <img src="./img/screens.jpg" className="card-img-top" alt="photoSceens"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


</div>


        </div>
        </main>
    );
}

export default Portfolio;


