import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
const JWT_KEY = process.env.JWT_KEY;

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    passwordHash,
    role,
    skills: [],
    profile: {},
  });
  await newUser.save();
  res.json({ message: "User Created" });
};

export const logIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword)
    return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_KEY!, {
    expiresIn: "1h",
  });

  res.json({ token });
};
