import express from "express";
import { signup,getUser,getAllUsers } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/user/:id", getUser);
router.get("/users", getAllUsers); 


export default router;
