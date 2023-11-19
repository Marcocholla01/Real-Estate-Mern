import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("DB Connnection Established Sucessfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(`/api/user`, userRouter);

app.use(`/api/auth`, authRouter);
