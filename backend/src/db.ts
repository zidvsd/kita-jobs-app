import mongoose, { connect, mongo } from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const connectDB = async () => {
  const URI = process.env.MONGODB_URI;
  try {
    const connection = await mongoose.connect(URI as string);
    console.log("✅ MongoDB Connected");
    console.log("Connected to DB:", connection.connection.name);
  } catch (err) {
    console.log("Error connecting to database.", err);
  }
};

export default connectDB;
