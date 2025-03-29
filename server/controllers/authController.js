import User from "../models/User.js"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signup = async (req, res) => {
  try {
    console.log("Signup Request Body:", req.body); // Log request data

    const { name, email, password, phone, address } = req.body; // ✅ Include phone & address

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,  // ✅ Save phone
      address // ✅ Save address
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Signup Error:", error.message); // Log error
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: "7d" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const getUser = async (req, res) => {
  try {
    console.log("Decoded User Data:", req.user); // Debugging

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "User not authorized" });
    }

    const userId = req.user.id; // Extract userId from JWT
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};




// export const getAllUsers = async (req, res) => {
//   try {
    
//     const users = await User.find().select("-password");

//     if (users.length === 0) {
//       return res.status(404).json({ message: "No users found" });
//     }

//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


export const updateUser = async (req, res) => {
  try {
    const userId = req.user.id; // Extract userId from JWT
    const updates = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};






