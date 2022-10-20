import express from "express";
import { createMaterials } from "../controllers/materials_controllers.js";

const router = express.Router();

router.post('/createMaterials', createMaterials)

export default router;