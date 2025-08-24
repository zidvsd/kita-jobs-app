import mongoose, { model, Schema } from "mongoose";

export interface IUser {
  email: string;
  passwordHash: string;
  role: "user" | "recruiter";
  skills: string[];
  profile: {
    username: string;
    about: string;
    contact: {
      phone: string;
      website: string;
      github: string;
      linkedin: string;
    };
    earnings: {
      hourlyRate: number;
      currency: string;
      totalEarnings: number;
    };
    workExperience: {
      jobTitle: string;
      company: string;
      startDate: Date;
      endDate: Date;
      description: string;
    }[];
  };
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["user", "recruiter"], required: true },
  skills: { type: [String], default: [] },
  profile: {
    username: { type: String, default: "" },
    about: { type: String, default: "" },
    contact: {
      phone: { type: String, default: "" },
      website: { type: String, default: "" },
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
    },
    earnings: {
      hourlyRate: { type: Number, default: 0 },
      currency: { type: String, default: "PHP" },
      totalEarnings: { type: Number, default: 0 },
    },
    workExperience: [
      {
        jobTitle: { type: String, default: "" },
        company: { type: String, default: "" },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String, default: "" },
      },
    ],
  },
});

const User = model<IUser>("User", userSchema);

export default User;
