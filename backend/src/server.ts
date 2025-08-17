import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/AuthRoutes.js";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});
const PORT: number = Number(process.env.PORT) || 8000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at port:${PORT}`);
});
