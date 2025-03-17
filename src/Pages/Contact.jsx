import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Infocontact from "../components/infocontact";

const Contact = () => {
    return (
        <main style={{ paddingTop: "100px" }}>
        <div>
            <div className="entete">
            <h2 className="title-h2">Contact</h2>
            <p>Pour me conctacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <hr></hr>
            </div>
        <section className="cont-A">
            <form className="cont-A-1">
            <p className="title-cont-A">Formulaire de contact</p>
            
                <input type="text" placeholder="Votre nom" required></input>
                <input type="text" placeholder="Votre adresse mail" required></input>
                <input type="text" placeholder="Votre numero de téléphone" required></input>
                <input type="text" placeholder="Sujet" required></input>
                <textarea placeholder="Votre messsage" required></textarea>
                <button type="button" class="btn btn-primary">Primary</button>
            </form>
        

        <article className="cont-A-2">
        <h2 className="title-cont-A">Mes coordonnées</h2>
       <Infocontact />
 


        </article>
        </section>
        </div>
        
        </main>
    );
}

export default Contact;   