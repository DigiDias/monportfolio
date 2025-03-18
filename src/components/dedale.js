import React, {useState, useEffect} from "react";
import "../App.css";

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
        <div className="popup-me">
    <ul>
      <li>Nom : {users.name}</li>
      <li>Nom : {users.bio}</li>
      <li>Repositeries : {users.public_repos}</li>
      <li>Followers : {users.followers}</li>
      <li>Following : {users.following}</li>
    </ul>
    
    </div>
  )}
</div>
</div>
);
};

export default Dedale;
