import { useState } from "react";

const Tva = () => {
  const [taux, setTaux] = useState("");
  const [montantHT, setMontantHT] = useState("");
  const montantTTC =
    taux && montantHT
      ? (taux / 100) * Number(montantHT) + Number(montantHT)
      : "";

  function handleTauxChange(event) {
    setTaux(event.target.value);
  }

  function handleMontantHTChange(event) {
    setMontantHT(event.target.value);
  }

  return (
    <div>
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100 "
      style={{ paddingTop: "100px" }}
    >
      <h2 className="title-h2 fw-semibold">TVA</h2>

      <select
        className="form-select w-25 mb-3"
        aria-label="Default select example"
        value={taux}
        onChange={handleTauxChange}
      >
        <option>Choisissez un taux de TVA</option>
        <option value="20">20%</option>
        <option value="8.5">8.5%</option>
        <option value="5.5">5.5%</option>
        <option value="2.1">2.1%</option>
      </select>

      <input
        type="number"
        className="form-control w-25 mb-3"
        placeholder="Entrez le montant hors taxe"
        value={montantHT}
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

<div>
    <iframe src="https://time.is/fr/"></iframe>
</div>

    </div>
  );
};

export default Tva;
