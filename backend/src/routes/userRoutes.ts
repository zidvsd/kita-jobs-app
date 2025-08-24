import express from "express";
import { Router } from "express";
import { getUsers, getSingleUser } from "../controllers/userController.js";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getSingleUser);
export default router;
