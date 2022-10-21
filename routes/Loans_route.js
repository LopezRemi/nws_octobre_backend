import express from "express";
import { createLoans, deleteLoans } from "../controllers/loans_controllers.js";

const router = express.Router();

router.post('/createLoans', createLoans)
router.delete('/deleteLoans/:id', deleteLoans)


export default router;