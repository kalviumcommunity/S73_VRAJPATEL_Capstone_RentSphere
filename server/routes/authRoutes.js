import express from "express";
import { signup, login, getUser, updateUser } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser); // Protected route
router.put("/user", verifyToken, updateUser); // Protected update route

export default router;
