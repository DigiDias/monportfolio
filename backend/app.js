import express from "express";
import dotenv from "dotenv";
import mailRoute from "./routes/mailRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/mail", mailRoute);


// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend démarré sur le port ${PORT}`);
});
