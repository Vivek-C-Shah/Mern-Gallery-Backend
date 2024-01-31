import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongo = async () => {
  const res = await mongoose.connect(process.env.MONGODB_URI);
  if (res) {
    console.log("Connected Successfully");
  }
};

export default connectToMongo;
