import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import userRouter from "./routes/UserRouter";
import doctorRouter from "./routes/DoctorRouter"
import cors from 'cors'

dotenv.config();

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));



app.use('/user', userRouter);
app.use('/doctor', doctorRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions) 
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('MongoDB connection error:', error);
  });

  

app.listen(process.env.PORT, () => {
    console.log(`This application is listening at ${process.env.PORT}`)
});




export default app;