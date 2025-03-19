import React, {useState, useEffect} from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Dedale = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () =>{
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUsers(json);
  }

  useEffect(() => {
   getUsers();
  },[])

  return (
    <div>
      <h2 className="popup-h2">Mon profil GitHub</h2>

    <div className="popup">
      <div className="popup-img">
      <img src="/img/phots_JohnDoe.png" alt='iconJohnDoe'></img>
      </div>
      
      {users && (
        <div className="popup-me d-flex flex-column">
    <ul className="d-flex flex-column">
      <li><i className="bi bi-person"></i> {users.name}</li>
      <hr className="w-100"></hr>
      <li></li>
      <hr className="w-100"></hr>
      <li><i class="bi bi-card-text"></i> {users.bio}</li>

      <hr className="w-100"></hr>
      <li><i class="bi bi-box"></i> Repositeries : {users.public_repos}</li>
      <hr className="w-100"></hr>
      <li><i class="bi bi-people"></i> Followers : {users.followers}</li>
      <hr className="w-100"></hr>
      <li><i class="bi bi-people"></i> Following : {users.following}</li>
    </ul>
    
    </div>
  )}
</div>
</div>
);
};

export default Dedale;
