import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const images = [];

  for (let i = 1; i <= 50; i++) {
    images.push(`/img/Holding/${i}.jpg`);
  }

  return (
    <div className="container text-center mt-5 pt-3 height-auto">
<div className="container text-center mt-5 pt-3 height-auto">
      
  <h2 className="text-center fw-bold mb-4">
    Application de Gestion des Loyers de SCI
  </h2>

  <article className="text-start mb-5 p-4 bg-light rounded shadow-sm">
    <p className="fs-5 fw-semibold mb-3">
      Développement d’une application web de gestion locative destinée à une SCI,
      permettant la centralisation des loyers, des informations immobilières,
      des gérants ainsi que l’automatisation de plusieurs processus administratifs.
    </p>

    <p className="mb-2">
      L’application offre une présentation structurée des <strong>bâtiments</strong>, <strong>locaux</strong>,
      <strong>locataires</strong> et <strong>gérants</strong>, afin de faciliter la gestion et la mise à jour
      des données foncières et contractuelles.
    </p>

    <p className="mb-2">
      Le système intègre le calcul des <strong>révisions de loyers</strong> via l’<strong>API INSEE</strong>,
      permettant de récupérer automatiquement les coefficients et indices d’évolution
      pour ajuster les loyers conformément à l’Indice de Référence des Loyers (IRL).
    </p>

    <p className="mb-2">
      Une fonctionnalité de <strong>signature électronique</strong> permet de valider les documents
      contractuels, accompagnée d’une <strong>génération automatique de PDF</strong>
      (quittances, contrats, ou avenants) afin de limiter les tâches papier.
    </p>

    <p className="mb-2">
      Des <strong>notifications automatiques par email</strong> sont envoyées pour informer
      de la publication de documents ou des échéances, améliorant ainsi la communication
      avec les parties prenantes.
    </p>

    <p className="mb-2">
      L’architecture repose sur un backend <strong>Node.js / Express</strong> sécurisé, 
      une exposition d’API REST, et une authentification <strong>JWT</strong>. 
      Le frontend est développé en <strong>React</strong>, incluant formulaires dynamiques
      et gestion fine des états via les hooks.
    </p>

    <p className="mb-0">
      Ce projet met en œuvre des <strong>bonnes pratiques full-stack</strong> :
      séparation des responsabilités, architecture modulaire, automatisation des traitements,
      réduction des saisies et amélioration de la traçabilité documentaire.
      Projet en cours non encore déployé.
    </p>
  </article>

</div>





      <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`SAV-${index}`}
            className="img-thumbnail shadow-sm"
            style={{ width: "250px", cursor: "pointer" }}
            onClick={() => setSelectedImg(src)}
            onError={(e) => (e.target.style.display = "none")}
          />
        ))}
      </div>

      {/* --- MODAL BOOTSTRAP --- */}
      {selectedImg && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          onClick={() => setSelectedImg(null)}
          style={{ background: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content bg-transparent border-0">
              <img
                src={selectedImg}
                alt="zoom"
                className="img-fluid rounded shadow"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Gallery;

