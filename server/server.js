import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

// Load environment variables
dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON
app.use(cookieParser());
app.use(cors());


// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
