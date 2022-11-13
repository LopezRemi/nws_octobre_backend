import express from "express";
import { createLoans, deleteLoans } from "../controllers/loans_controllers.js";

const router = express.Router();

router.post('/', createLoans)
router.delete('/:id', deleteLoans)


export default router;