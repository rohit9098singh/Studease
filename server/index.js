import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDb } from "./config/dbConnect.js";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js"

dotenv.config();

const app = express();

const corsOption = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  // allowedHeaders: ["Content-Type", "Authorization"],
  // methods: ["GET", "PUT", "POST", "DELETE"],
};

app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", authRoute);

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB. Server not started.", error);
    process.exit(1);
  }
};

startServer();
