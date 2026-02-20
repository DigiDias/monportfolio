import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRoute from "./routes/mailRoute.js";
import footRoute from "./routes/footRoutes.js";

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/mail", mailRoute);
app.use("/api/foot", footRoute);


// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend démarré sur le port ${PORT}`);
});
