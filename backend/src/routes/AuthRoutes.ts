import express, { Router } from "express";
import { signUp, logIn } from "../controllers/authController.js";
const router = Router();

router.post("/signup", signUp);
router.post("/login", logIn);

export default router;
