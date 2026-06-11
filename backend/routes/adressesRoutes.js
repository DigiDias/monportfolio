import express from "express";
import { getAdresses } from "../controllers/adressesController.js";

const router = express.Router();

router.post('/adresses', getAdresses);

export default router;