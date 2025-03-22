import mongoose from "mongoose"; // Importing mongoose for database connection
import dotenv from "dotenv"; // Importing dotenv to load environment variables from .env file

dotenv.config(); // Load environment variables from .env file

// Function to connect to MongoDB
const connectDB = async () => {
  try {

    // Attempting to connect to the database using the MONGO_URI from environment variables

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Use new URL parser to avoid deprecation warnings
      useUnifiedTopology: true, // Use new server discovery and monitoring engine
    });

    
    console.log(`✅ MongoDB Connected`); // Log success message when connected

  } catch (error) {
    console.error(`Error: ${error.message}`); // Log error message if connection fails
    process.exit(1); // Exit the process with failure status (1)
  }
};

export default connectDB; // Export the function for use in other parts of the application

