import express from 'express';
import userRoute from './routes/Users_routes.js'
import materialRoute from './routes/Materials_routes.js'
import indexRoute from './routes/index.js'

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_LINK);


// Instantiate the app
const app = express();
//Listing a particular task//Update a task
app.use(express.json());
app.use('/tasks', userRoute);
app.use('/tasks', materialRoute);
app.use('/',indexRoute);

// API server listing port 3000
app.listen(3000, function () {
  console.log('API running');
});
export default app;