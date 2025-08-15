import mongoose, { model, Schema } from "mongoose";
export interface IUser {
  username: string;
  email: string;
  passwordHash: string;
  role: "user" | "recruiter";
  skills: string[];
  profile: {};
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["user", "recruiter"], required: true },
  skills: { type: [String], required: true },
  profile: { type: { Object }, required: true },
});

const User = model<IUser>("User", userSchema);

export default User;
