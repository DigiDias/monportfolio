import {getAdressesByAdresses} from "../services/adressesServices.js"

const getAdresses = async (req, res) => {

    const { adresses } = req.body;

    try {
        const data = await getAdressesByAdresses(adresses)

        if (!data) {
            return res.status(404).json({ message: "pas de data" })
        }

        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erreur serveur" })
    }

}

export  {
    getAdresses
}



