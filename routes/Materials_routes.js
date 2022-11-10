import express from "express";
import { createMaterials, deleteMaterials, updateMaterials, getMaterials } from "../controllers/materials_controllers.js";

const router = express.Router();


router.get('/', getMaterials)
router.post('/', createMaterials)
router.patch('/:id', updateMaterials)
router.delete('/:id', deleteMaterials)

export default router;