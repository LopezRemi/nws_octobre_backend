import express from "express";
import { createLoaners } from "../controllers/Loaners_controllers.js";

const router = express.Router();

router.post('/',createLoaners)

export default router;