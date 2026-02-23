//importer Controller

import getFoot from '../controllers/getFootController.js';

import express from "express";
const router = express.Router();
router.get("/getFoot", getFoot.getFootController);

export default router;
