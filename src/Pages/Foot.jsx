import {useEffect, useState} from "react";
import "./Foot.css";

const Foot = () => {
  const [data, setData] = useState([]);

  const [loading, setloading] = useState(true);



//compossant UseEffect pour la route foot

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/foot/getFoot");
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      setData(data.standing);
        setloading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };
  fetchData();
}, []);
   



  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center fw-bold classement">Classement de la ligue 1 au {new Date().toLocaleDateString()}</h1>

      <a href="https://www.maxifoot.fr/resultat-ligue-1-france.htm" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-3">Voir les résultats</a>
   
      {/* Affichez les données récupérées ici */}

    {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <table className="table table-striped  table-bordered  table-hover w-auto border border-2 border-dark">
        <thead>
          <tr>
            <th className="text-center w-auto">Rank</th>
            <th className="text-center w-auto">Équipe</th>
            <th className="text-center w-auto">Points</th>
            <th className="text-center w-auto">Journée</th>
            <th className="text-center w-auto">Diff</th>
    
          
          
         
            
          </tr>
        </thead>
<tbody>
  {data?.map((d, index) => {
    console.log("Couleur :", d.color);

    return (
      <tr
        key={index}
        
      >
        
        <td className="text-center d-flex justify-content-between" style={{ backgroundColor: d.color ?? "transparent" }}><img src={d.logo} alt={d.team} className="img-fluid" style={{width:20, height:20}}/>  {d.rank}</td>
        <td style={{ backgroundColor: d.color ?? "transparent" }}><a href={d.lien} target="_blank" rel="noopener noreferrer">{d.team === "Paris Saint-Germain" ? "PSG" : d.team}</a></td>
        <td className="text-center"style={{ backgroundColor: d.color ?? "transparent" }}>{d.points}</td>
        <td className="text-center"style={{ backgroundColor: d.color ?? "transparent" }}>{d.journee}</td>
        <td className="text-center"style={{ backgroundColor: d.color ?? "transparent" }}>{d.difference}</td>

            

    
      </tr>
    );
  })}
</tbody>
      </table>
      )}


  
    

    </div>
  );
};

export default Foot;