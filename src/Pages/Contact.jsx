import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <main style={{ paddingTop: "100px" }}>
        <div className="center">
            <h2 className="title-h2">Contact</h2>
            <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
       <hr></hr>
        </div>
        <section className="cont-A">
            <article className="cont-A-1">
            <p className="title-app">Formulaire de contact</p>
            <input type="text" placeholder="Votre nom" required></input>
            <input type="text" placeholder="Votre adresse mail" required></input>
            <input type="text" placeholder="Votre numero de telephone" required></input>
            <input type="text" placeholder="Sujet" required></input>
            <textarea  placeholder="Votre message" required></textarea>
        
        </article>
        <article className="cont-A-2">
            <p className="title-app">Mes coordonnées</p>
            <p>John Doe</p>
        <adress>
          <p>40 rue laure Diebold</p>
          <p>69009 Lyon, France</p>
        
        <p><Link to="tel:1020304050">10 20 30 40 50</Link></p>
        <p><Link to="mailto:johndoe@gmail.com">johndoe@gmail.com</Link></p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253931507972!2d4.7964039750926295!3d45.778665712403885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1742198219513!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </adress>

        </article>
        </section>
        </main>
    );
}

export default Contact;