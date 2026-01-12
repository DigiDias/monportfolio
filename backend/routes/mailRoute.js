import mailController from "../controllers/mailController.js";

import express from "express";
const router = express.Router();
router.post("/send", mailController.sendMail);
export default router;
