import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
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
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(`/api/user`, userRouter);
app.use(`/api/auth`, authRouter);

// Error Handler Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
