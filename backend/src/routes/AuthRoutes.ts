import express, { Router } from "express";
import { signUp, logIn } from "../controllers/authController.js";
import { log } from "console";
const router = Router();

router.post("/signup", signUp);
router.post("/login", logIn);

export default router;
