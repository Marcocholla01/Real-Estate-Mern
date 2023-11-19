import User from "../models/userModels.js";
import { errorHandler } from "../utils/error.js";
// import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  // const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: password });
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully");
  } catch (error) {
    next(errorHandler(550, "Duplicat"));
  }
};
