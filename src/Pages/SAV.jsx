import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const images = [];

  for (let i = 1; i <= 50; i++) {
    images.push(`/img/SAV/${i}.jpg`);
  }

  return (
    <div className="container text-center mt-5 pt-3 height-auto">
      
<h2 className="text-center fw-bold mb-4">
  Application SAV
</h2>

<article className="text-start mb-5 p-4 bg-light rounded shadow-sm">
  <p className="fs-5 fw-semibold mb-3">
    Application web full-stack conçue pour la gestion et le suivi d’interventions SAV.
  </p>

  <p className="mb-2">
    Le backend repose sur <strong>Node.js</strong> et <strong>Express</strong>, avec une API sécurisée par
    authentification <strong>JWT</strong>. L’architecture est structurée autour de routes,
    contrôleurs, services et middlewares afin de garantir maintenabilité et sécurité.
  </p>

  <p className="mb-2">
    L’application intègre l’<strong>API Jira</strong> pour centraliser les tickets et projets,
    facilitant le suivi opérationnel et la coordination des équipes.
  </p>

  <p className="mb-2">
    Le frontend est développé en <strong>React</strong>, avec une gestion avancée des états via les hooks,
    des formulaires dynamiques et une consommation sécurisée des APIs backend.
  </p>

  <p className="mb-0">
    Ce projet met en œuvre des <strong>bonnes pratiques full-stack</strong> : sécurité,
    séparation des responsabilités, architecture modulaire et préparation au déploiement.
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

