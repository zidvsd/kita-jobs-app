import User from "../models/User.js";
import { Request, Response } from "express";
export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find().select("-passwordHash");
  res.json(users);
};
