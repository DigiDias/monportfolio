//importataation de .env
import dotenv from "dotenv";
dotenv.config();

//connexion à l'API avec fetch pour le classement
const gestFoot = async() => {
   try {
    const response = await fetch(process.env.URL_CLASSEMENT);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
const entries = data?.children?.[0]?.standings?.entries ?? [];

const standing = entries.map((entry, index) => ({
  team: entry.team?.name ?? "Unknown",
  points: entry.stats?.find(stat => stat.name === "points")?.value ?? 0,
  rank: index + 1,
  qualification: entry.note?.description ?? null,
  color: entry.note?.color ?? null
}));

return {standing};

  } catch (error) {
    console.error("Error fetching football data:", error);
    throw error;
  }
}



//fetch pour les matchs

const getMatches = async() => {
  try {
    const response = await fetch(process.env.URL_MATCHS);
    const data = await response.json();
    const matches = data.events.map(event => ({
      date: event.dateEvent}));

    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return {data: matches};
  
  
  }
  catch (error) {
    console.error("Error fetching football data:", error);
    throw error;
  }
}


export default {
    gestFoot,
    getMatches
}

