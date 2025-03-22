import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true 
    },

    email: { 
        type: String, 
        required: true, 
        unique: true 
    },

    password: { 
        type: String, 
        required: true 
    },

    profilePic: { 
        type: String, 
        default: "" 
    }, // Profile Image URL

    phone: { 
        type: String
    },

    address: { 
        type: String
    },

    isVerified: { 
        type: Boolean, 
        default: false 
    },

    listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }], // Items listed by user

  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
