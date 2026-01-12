import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import Infocontact from "../components/infocontact";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Contact = ({ nom, prenom, adresse, codePostal, ville, Pays }) => {
    console.log("Contact render");
  
  const [nomF, setNomF] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [messageStatus, setMessageStatus] = useState(null);
  const [isError, setIsError] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    nom: nomF,
    email,
    telephone,
    sujet,
    message,
  };

  try {
    const response = await fetch("/api/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Réponse serveur :", result);
    setMessageStatus("Message envoyé avec succès !");
     setIsError(false);
  } catch (error) {
    console.error("Erreur envoi :", error);
    setMessageStatus("Erreur lors de l'envoi du message.");
     setIsError(true);
  }
};

  return (
    <main style={{ paddingTop: "100px" }}>
      <div className="center">
        <h2 className="title-h2 fw-semibold">Contact</h2>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact
        </p>
        <hr></hr>
      </div>
      <section className="cont-A d-flex flex-wrap justify-content-center gap-4 p-4 border border-secondary-subtle mt-3 mb-3 shadow-lg bg-white w-90 mx-auto">
        <form onSubmit={handleSubmit} className="cont-A-1">
          <p className="title-app">Formulaire de contact</p>
<input
  type="text"
  placeholder="Votre nom"

  id="nomF"
  value={nomF}
  onChange={(e) => {
    console.log("valeur saisie :", e.target.value);
    setNomF(e.target.value);
  }}
/>


          <input type="text" placeholder="Votre adresse mail"  id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <input
            type="text"
            placeholder="Votre numero de telephone"
        
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          ></input>
          <input type="text" placeholder="Sujet" id="sujet" value={sujet} onChange={(e) => setSujet(e.target.value)}></input>

          <textarea placeholder="Votre message"  id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit" className="btn btn-primary align-self-center">
            Envoyer
          </button>

{messageStatus && (
  <div
    className={`alert ${isError ? "alert-danger" : "alert-success"} mt-3`}
    role="alert"
  >
    {messageStatus}
  </div>
)}

          
        </form>
        <article className="cont-A-2">
          <p className="title-app">Mes coordonnées</p>
          <p>Sammy Gouljiar</p>
          <Infocontact
            nom={nom}
            prenom={prenom}
            adresse={adresse}
            codePostal={codePostal}
            ville={ville}
            Pays={Pays}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.335771325818!2d55.500041073706626!3d-21.26411098123294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21787551e03dcbdb%3A0x589065505de775d8!2s200%20Rue%20Emmanuel%20Burel%2C%20Le%20Tampon%2097430%2C%20La%20R%C3%A9union!5e1!3m2!1sfr!2sfr!4v1768206811839!5m2!1sfr!2sfr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
      </section>
    </main>
  );
};

export default Contact;
