import express from 'express';
import bodyParser from 'body-parser';
import tasksRoute from './routes/tasks_routes.js'

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_LINK);

// Instantiate the app
const app = express();
//Parse incoming request data
app.use(bodyParser.json());
//Listing a particular task//Update a task
app.use('/tasks', tasksRoute);
// API server listing port 3000
app.listen(3000, function () {
  console.log('API running');
});
export default app;