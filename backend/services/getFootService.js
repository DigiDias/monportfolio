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
  team: entry.team?.name ?? "Inconnue",
  points: entry.stats?.find(stat => stat.name === "points")?.value ?? 0,
  journee: entry.stats?.find(j => j.name === "gamesPlayed")?.displayValue ?? 0,
  difference: entry.stats?.find(j => j.name === "pointDifferential")?.displayValue ?? 0,
  rank: index + 1,
  qualification: entry.note?.description ?? null,
  color: entry.note?.color ?? null,
  logo: entry.team.logos?.find(l=> l.href !== null)?.href ?? null,
  lien: entry.team?.links?.find(l => l.href.includes("https"))?.href ?? null
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

