import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Dedale = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const res = await fetch("https://api.github.com/users/digidias");
      if (!res.ok)
        throw new Error("Erreur lors de la récupération des données");
      const json = await res.json();
      setUsers(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2 className="d-flex w-100 mb-0 ms-0 border-bottom border-2 border-secondary">
        Mon profil GitHub
      </h2>

      <div className="popup">
        <div className="popup-img t">
          <img src="/img/avatar_Sammy.jpg" alt="Avatar Sammy" />
        </div>

        {users && (
          <div className="popup-me d-flex flex-column">
            <ul className="d-flex flex-column">
              <li className="border-bottom border-secondary pb-2">
                <i class="bi bi-person"></i> <span>{users.name}</span>
              </li>

              <li className="border-bottom border-secondary pb-2">
                <i class="bi bi-card-text"></i> {users.bio}
              </li>
              <li className="border-bottom border-secondary pb-2">
                <i class="bi bi-box"></i> Repositories : {users.public_repos}
              </li>
              <li className="border-bottom border-secondary pb-2">
                <i class="bi bi-people"></i> Followers : {users.followers}
              </li>
            <li className="border-bottom border-secondary pb-2">
                <i class="bi bi-people"></i> Following : {users.following}
              </li>

                       <li className="border-bottom border-secondary pb-2">
                <i className="bi bi-file-earmark-person cv-icon"></i>{" "}
  <a
    href="https://digidias.onrender.com/" target="_blank"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    Voir le CV
  </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dedale;
