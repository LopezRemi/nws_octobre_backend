import express from 'express';
import userRoute from './routes/Users_routes.js'
import materialRoute from './routes/Materials_routes.js'
import indexRoute from './routes/index.js'
import loanRoute from './routes/Loans_route.js'
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';



dotenv.config();

mongoose.connect(process.env.MONGO_LINK);




// Instantiate the app
const app = express();



//Listing a particular task//Update a task
app.use(cors());
app.use(express.json());
app.use('/user', userRoute);
app.use('/materials', materialRoute);
app.use('/tasks', loanRoute);
app.use('/',indexRoute);


// API server listing port 300
app.listen(8000, function () {
  console.log('API running');
});
export default app;