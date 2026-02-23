import getFoot from "../services/getFootService.js";

const getFootController = async (req, res) => {
  try {
    const data = await getFoot.gestFoot();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}





export default {
    getFootController,
 
}