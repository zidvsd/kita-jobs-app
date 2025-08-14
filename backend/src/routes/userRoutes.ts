import express from "express";
import { Router } from "express";
import { getUsers } from "../controllers/userController.js";
const router = express.Router();

router.use("/", getUsers);

export default router;
