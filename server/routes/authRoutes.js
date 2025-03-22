import express from "express";
import { signup,getUser,getAllUsers,updateUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/user/:id", getUser);
router.get("/users", getAllUsers); 
router.put("/user/:id",updateUser);


export default router;
