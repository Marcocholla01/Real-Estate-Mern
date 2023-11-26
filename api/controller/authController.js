import User from "../models/userModels.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


// Account creation API
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully");
  } catch (error) {
    next(errorHandler(550, "Duplicate"));
  }
};

// Login API
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, `User not Found!`));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, `Wrong credentials`));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...restUserInfo } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(restUserInfo);
  } catch (error) {
    next(error);
  }
};

// Google Oauth API
export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...restUserInfo } = user._doc;
      res.cookie(`access_token`, token, { httpOnly: true }).status(200).json(restUserInfo)
    } else {
      // generate psaaword
      const generatedPassword = Math.random().toString(36).slice(-8);
      // Hash Password
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      //create the user
      console.log('Before username generation');
      const username = req.body.name ? req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4) : "defaultUsername";
      console.log('Generated username:', username);

      const newUser = new User({
        username,
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      console.log('After username generation');


      //save the user on the DB
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...restUserInfo } = newUser._doc;
      res.cookie(`access_token`, token, { httpOnly: true }).status(200).json(restUserInfo);

    }
  } catch (error) {
    next(errorHandler(500, `Error during Google OAuth: ${error.message}`));

  }
}
