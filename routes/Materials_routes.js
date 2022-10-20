import express from "express";
import { createMaterials, deleteMaterials, updateMaterials } from "../controllers/materials_controllers.js";

const router = express.Router();

router.post('/createMaterials', createMaterials)
router.patch('/updateMaterials', updateMaterials)
router.delete('/deleteMaterials/:id', deleteMaterials)

export default router;