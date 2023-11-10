import express from "express";
import { test } from "../controller/userController.js";

const router = express.Router();

// test Request
router.get(`/test`, test);

export default router;
