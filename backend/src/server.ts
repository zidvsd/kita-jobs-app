import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/AuthRoutes.js";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();
const port: number = 8000;

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at port:${port}`);
});
