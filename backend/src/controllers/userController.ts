import User from "../models/User.js";
import { Request, Response } from "express";
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-passwordHash"); // exclude passwordHash
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(id).select("-passwordHash"); // exclude passwordHash

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
