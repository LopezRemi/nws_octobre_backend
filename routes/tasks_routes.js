import express from "express";
import { getAllTasks, getSpecificTasks, postTasks, deleteTasks, uptadeTasks, createUsers } from "../controllers/tasks_controllers.js";

const router = express.Router();

router.get('', getAllTasks)
router.get('/:id', getSpecificTasks)
router.post('/add', postTasks)
router.delete('/DELETE/:id', deleteTasks)
router.put('/UPDATE/:id', uptadeTasks)
router.post('/createUsers',createUsers)


export default router;