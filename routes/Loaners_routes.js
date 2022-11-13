import express from "express";
import { createLoaners, deleteLoaner, getLoanerByMaterial } from "../controllers/Loaners_controllers.js";

const router = express.Router();

router.post('/',createLoaners)
router.post('/getLoanerByMaterial',getLoanerByMaterial)
router.delete("/:id",deleteLoaner)

export default router;