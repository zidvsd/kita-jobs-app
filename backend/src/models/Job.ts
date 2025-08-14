import mongoose, { Schema, model } from "mongoose";

export interface IJob {
  title: string;
  description: string;
  employmentType: string;
}

const JobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  employmentType: { type: String, required: true },
});

const Job = model<IJob>("Job", JobSchema);

export default Job;
