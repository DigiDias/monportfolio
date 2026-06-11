

const getAdressesByAdresses = async (adresses) => {

    const api = process.env.API_ADRESSES + encodeURIComponent(adresses);

    try {
        const response = await fetch(api);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching adresses:", error);
        throw error;
    }

}

export {
    getAdressesByAdresses
}
