import { useState, useRef } from "react";

const Adresses = () => {

    const [adresseDepart, setAdresseDepart] = useState("");
    const [adresseArrivee, setAdresseArrivee] = useState("");

    const [suggestionsDepart, setSuggestionsDepart] = useState([]);
    const [suggestionsArrivee, setSuggestionsArrivee] = useState([]);

    const [coordDepart, setCoordDepart] = useState(null);
    const [coordArrivee, setCoordArrivee] = useState(null);

    const [distance, setDistance] = useState(null);

    const timeoutDepart = useRef(null);
    const timeoutArrivee = useRef(null);

    const rechercherAdresse = async (valeur) => {

        try {

            const response = await fetch(
                "/api/adresses",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        adresses: valeur
                    })
                }
            );

            const data = await response.json();

            return data.features || [];

        } catch (error) {

            console.error(error);

            return [];

        }
    };

    const handleDepartChange = (e) => {

        const valeur = e.target.value;

        setAdresseDepart(valeur);

        setCoordDepart(null);

        clearTimeout(
            timeoutDepart.current
        );

        if (valeur.length < 3) {

            setSuggestionsDepart([]);

            return;
        }

        timeoutDepart.current =
            setTimeout(async () => {

                const result =
                    await rechercherAdresse(
                        valeur
                    );

                setSuggestionsDepart(
                    result
                );

            }, 500);
    };

    const handleArriveeChange = (e) => {

        const valeur = e.target.value;

        setAdresseArrivee(valeur);

        setCoordArrivee(null);

        clearTimeout(
            timeoutArrivee.current
        );

        if (valeur.length < 3) {

            setSuggestionsArrivee([]);

            return;
        }

        timeoutArrivee.current =
            setTimeout(async () => {

                const result =
                    await rechercherAdresse(
                        valeur
                    );

                setSuggestionsArrivee(
                    result
                );

            }, 500);
    };

    const selectDepart = (adresse) => {

        setAdresseDepart(
            adresse.properties.label
        );

        setCoordDepart(
            adresse.geometry.coordinates
        );

        setSuggestionsDepart([]);
    };

    const selectArrivee = (adresse) => {

        setAdresseArrivee(
            adresse.properties.label
        );

        setCoordArrivee(
            adresse.geometry.coordinates
        );

        setSuggestionsArrivee([]);
    };

    const degToRad = (deg) => {

        return deg * (
            Math.PI / 180
        );
    };

    const calculDistance = () => {

        if (
            !coordDepart ||
            !coordArrivee
        ) {

            alert(
                "Veuillez sélectionner les deux adresses"
            );

            return;
        }

        const [
            lon1,
            lat1
        ] = coordDepart;

        const [
            lon2,
            lat2
        ] = coordArrivee;

        const R = 6371;

        const dLat =
            degToRad(
                lat2 - lat1
            );

        const dLon =
            degToRad(
                lon2 - lon1
            );

        const a =
            Math.sin(
                dLat / 2
            ) *
            Math.sin(
                dLat / 2
            ) +
            Math.cos(
                degToRad(lat1)
            ) *
            Math.cos(
                degToRad(lat2)
            ) *
            Math.sin(
                dLon / 2
            ) *
            Math.sin(
                dLon / 2
            );

        const c =
            2 *
            Math.atan2(
                Math.sqrt(a),
                Math.sqrt(1 - a)
            );

        setDistance(
            (R * c).toFixed(2)
        );
    };

    return (
        <main style={{ paddingTop: "50px" }}>

           <div className="bg-light p-4 rounded shadow-sm mb-4">

    <h1 className="text-primary fw-bold text-center mb-4">
        Calculateur de distance
    </h1>

    <p className="text-muted mb-3 text-center">
        Recherchez deux adresses grâce à l'autocomplétion et obtenez instantanément la distance entre les deux points.
    </p>

    <div className="d-flex gap-2 flex-wrap text-center justify-content-center">

        <span className="badge bg-primary">
            Géolocalisation
        </span>

        <span className="badge bg-success">
            Autocomplétion
        </span>

        <span className="badge bg-warning text-dark">
            Calcul GPS
        </span>

    </div>

</div>

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3 className="mb-0">
                        Calculateur de distance
                    </h3>

                </div>

                <div className="card-body">

                    <div className="mb-4 position-relative">

                        <label className="form-label">
                            Adresse de départ
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={adresseDepart}
                            onChange={
                                handleDepartChange
                            }
                            placeholder="Saisir une adresse"
                        />

                        {
                            suggestionsDepart.length > 0 && (

                                <ul
                                    className="
                                        list-group
                                        position-absolute
                                        w-100
                                    "
                                    style={{
                                        zIndex: 1000
                                    }}
                                >

                                    {
                                        suggestionsDepart.map(
                                            (
                                                adresse,
                                                index
                                            ) => (

                                                <li
                                                    key={index}
                                                    className="
                                                        list-group-item
                                                        list-group-item-action
                                                    "
                                                    onClick={() =>
                                                        selectDepart(
                                                            adresse
                                                        )
                                                    }
                                                >

                                                    {
                                                        adresse
                                                            .properties
                                                            .label
                                                    }

                                                </li>

                                            )
                                        )
                                    }

                                </ul>

                            )
                        }

                    </div>

                    <div className="mb-4 position-relative">

                        <label className="form-label">
                            Adresse d'arrivée
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={adresseArrivee}
                            onChange={
                                handleArriveeChange
                            }
                            placeholder="Saisir une adresse"
                        />

                        {
                            suggestionsArrivee.length > 0 && (

                                <ul
                                    className="
                                        list-group
                                        position-absolute
                                        w-100
                                    "
                                    style={{
                                        zIndex: 1000
                                    }}
                                >

                                    {
                                        suggestionsArrivee.map(
                                            (
                                                adresse,
                                                index
                                            ) => (

                                                <li
                                                    key={index}
                                                    className="
                                                        list-group-item
                                                        list-group-item-action
                                                    "
                                                    onClick={() =>
                                                        selectArrivee(
                                                            adresse
                                                        )
                                                    }
                                                >

                                                    {
                                                        adresse
                                                            .properties
                                                            .label
                                                    }

                                                </li>

                                            )
                                        )
                                    }

                                </ul>

                            )
                        }

                    </div>

                    <button
                        className="
                            btn
                            btn-primary
                            w-100
                        "
                        onClick={
                            calculDistance
                        }
                    >
                        Calculer la distance
                    </button>

                </div>

            </div>

            {
                distance && (

                    <div
                        className="
                            alert
                            alert-success
                            mt-4
                            text-center
                        "
                    >

                        <h4>
                            Distance :
                            {" "}
                            {distance}
                            {" "}
                            km
                        </h4>

                    </div>

                )
            }

        </div>
        </main>
    );
};

export default Adresses;