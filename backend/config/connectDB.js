import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("You must provide MONGODB_URI in the .env file");
}
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to database successful!");
  } catch (error) {
    console.log("Mongodb error", error);
    process.exit(1);
  }
};

export default connectDB;
