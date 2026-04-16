import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import "../App.css";

const Tva = () => {
  const [taux, setTaux] = useState("");
  const [montantHT, setMontantHT] = useState("");
  const [txMarge, setTxMarge] = useState("");




// Nettoyage + conversion
const montantHTNumber = Number(montantHT.replace(",", ".").replace("€", ""));
const tauxNumber = Number(taux);
const txMargeNumber = Number(txMarge.replace(",", ".").replace("%", ""));

// Calcul TTC
const montantTTC =
  tauxNumber && montantHTNumber
    ? montantHTNumber * (1 + tauxNumber / 100)
    : 0;



    // Coefficient
const coefficient =
  txMargeNumber && tauxNumber
    ? (1 + tauxNumber / 100) / (1 - txMargeNumber / 100)
    : "";


// Autres calculs
const ttc = coefficient ? (100 * coefficient).toFixed(2) : "";
const HT = coefficient ? (ttc / (1 + tauxNumber / 100)).toFixed(2) : "";
const marge = HT ? (HT - 100).toFixed(2) : "";

  function handleTauxChange(event) {
    setTaux(event.target.value);
  }

  function handleTxMargeChange(e) {
    let value = e.target.value;

    // enlever le % si déjà présent
    value = value.replace("%", "");



    // ajouter %
    setTxMarge(value)
  }

  function handleMontantHTChange(event) {
  
    let value = event.target.value;

      value = value.replace("€", "");
    
    setMontantHT(value)
  }

  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center w-100 "
        style={{ paddingTop: "100px" }}
      >
        <h2
          className="center  title-h2 fw-semibold"
          style={{ "text-transform": "uppercase", backgroundColor: "green", "color":"white" }}
        >
          Commerce : Calcul d'un coeficient
        </h2>
        <p style={{ color: "red" }}>
          Quel coefficient multiplicateur appliquer pour obtenir un taux de
          marge donné ?
        </p>

        <p>
          Coefficient multiplicateur : Il s'agit du coefficient qui, appliqué à
          un prix d'achat donné, donne le prix de vente TTC.
        </p>
        <p>
          Taux de marge : Il s'agit de la marge divisée par le prix de vente HT.
        </p>
      </div>
      <div className="d-flex flex-column  justify-content-center gap-2 ">
        <div
          className="d-flex flex-column flex-md-row  justify-content-center  gap-2 "
          
        >
          <div className="d-flex flex-column  gap-3 "
           style={{"backgroundColor": "greenyellow"}}>
          <div className="d-flex mt-3 gap-3 justify-content-between m-2 "
         >
          <label htmlFor="Txmarge" >Taux de Marge souhaité</label>    
          <input
            type="text"
            className="form-control center"
            style={{ width: "6rem",  }}
            placeholder="Tx Mrg"
            value={txMarge? txMarge +"%" : ""}
            onChange={handleTxMargeChange}
            id="Txmarge"
          />
          </div>


            <div className="d-flex  gap-3 mt-3 justify-content-between m-2">
          <label htmlFor="Txmarge" >Taux de TVA</label>  

          <select
            className="form-select  mb-3 center"
          style={{ width: "6rem",  }}
            aria-label="Default select example"
            value={taux}
            onChange={handleTauxChange}
          >
            <option>TVA</option>
            <option value="20">20%</option>
            <option value="8.5">8.5%</option>
            <option value="5.5">5.5%</option>
            <option value="2.1">2.1%</option>
          </select>
          </div>

        {(txMarge && taux>0) && (

          <p className="center">Coefficient à appliquer : {coefficient.toFixed(3)}</p>)}


        </div >

            {(txMarge && taux>0) && (

        <div className="d-flex flex-column align-items-center text-center" 
        style={{ backgroundColor: "greenyellow" }}>
            <p className="text-center">Vérification</p>
     <table >
 

  <thead>
    <tr style={{ borderBottom: "1px solid black" }}>
      <th style={{"width":"10rem"}}>Libellé</th>
      <th>Valeur</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td className="text-start">Prix d'achat</td>
      <td>100.00 €</td>
    </tr>

    <tr>
      <td className="text-start">Prix de vente TTC</td>
      <td>{ttc} €</td>
    </tr>

    <tr>
      <td className="text-start">Prix de vente HT</td>
      <td>{HT} €</td>
    </tr>

    <tr>
      <td className="text-start">Marge</td>
      <td>{marge} €</td>
    </tr>
  </tbody>
</table>
        </div>)}
        </div>

     

        <div className="center">
      <input
        type="text"
        className="form-control w-25 mb-3 center"
        placeholder="Entrez le montant hors taxe"
        value={montantHT? montantHT + "€" :""} 
        onChange={handleMontantHTChange}
      />

      {taux && montantHT && (
        <div className="alert alert-info w-25 center" role="alert">
          Le montant TTC est de{" "}
          <span className="fw-bold" style={{ color: "red" }}>
            {montantTTC.toFixed(2)}€
          </span>
        </div>
      )}
       </div>
       </div>  
    </div>
  );
};

export default Tva;
