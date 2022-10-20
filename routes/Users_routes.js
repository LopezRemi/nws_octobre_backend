import express from "express";
import { createUsers } from "../controllers/users_controllers.js";

const router = express.Router();

router.post('/createUsers',createUsers)

export default router;