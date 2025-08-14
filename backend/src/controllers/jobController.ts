import { Request, Response } from "express";
import Job from "../models/Job.js";
export const getJobs = async (req: Request, res: Response) => {
  const jobs = await Job.find();
  res.json(jobs);
};
