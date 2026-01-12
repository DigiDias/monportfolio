import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const images = [];

  for (let i = 1; i <= 50; i++) {
    images.push(`/img/PowerBI/${i}.jpg`);
  }

  return (
    <div className="container text-center mt-5 pt-3 height-auto">
      
<h2 className="text-center fw-bold mb-4">
  Application Tableau de Bord Power BI
</h2>

<article className="text-start mb-5 p-4 bg-light rounded shadow-sm">
  <p className="fs-5 fw-semibold mb-3">
    Mise en place d’une application web permettant de centraliser et d’accéder facilement aux
    différents rapports Power BI du groupe à travers un tableau de bord dédié.
  </p>

  <p className="mb-2">
    L’objectif est de faciliter la navigation et d’améliorer l’accessibilité aux rapports
    décisionnels, tout en offrant une interface claire, unifiée et adaptée aux utilisateurs internes.
  </p>

  <p className="mb-2">
    Le backend repose sur <strong>Node.js</strong> et <strong>Express</strong>, avec une API sécurisée
    par authentification <strong>JWT</strong>. L’architecture est organisée autour de routes,
    contrôleurs, services et middlewares afin d’assurer robustesse, maintien et sécurité.
  </p>

  <p className="mb-2">
    Une <strong>double authentification</strong> (2FA) a été mise en place via <strong>Google Authenticator</strong>,
    avec génération de secrets TOTP, stockage sécurisé et validation des codes lors de la connexion
    afin de renforcer la protection des accès applicatifs.
  </p>

  <p className="mb-2">
    L’application intègre l’<strong>API Jira</strong> afin de centraliser les projets, tickets et suivis
    opérationnels, améliorant ainsi la coordination et la visibilité des équipes.
  </p>

  <p className="mb-2">
    Le frontend est développé en <strong>React</strong>, avec une gestion des états via les hooks, une
    communication sécurisée avec le backend et des formulaires dynamiques.
  </p>

  <p className="mb-0">
    Ce projet applique des <strong>bonnes pratiques full-stack</strong> : séparation des responsabilités,
    architecture modulaire, authentification forte (JWT + 2FA), et préparation à l’intégration/déploiement.
  </p>
</article>




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

