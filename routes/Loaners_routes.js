import express from "express";
import { createLoaners, deleteLoaner, getLoanerByMaterial, getByMaterial } from "../controllers/Loaners_controllers.js";

const router = express.Router();

router.post('/',createLoaners)
router.post('/getLoanerByMaterial',getLoanerByMaterial)
router.delete("/:id",deleteLoaner)
router.post('/getByMaterial', getByMaterial)

export default router;