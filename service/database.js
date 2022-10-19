import mongoose from "mongoose";
require ("dotenv").config();

mongoose.connect(process.env.MONGO_LINK);

