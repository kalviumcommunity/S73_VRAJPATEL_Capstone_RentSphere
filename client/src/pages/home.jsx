import Previewimg from "../assets/Preview.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 px-6 text-center">
        {/* Floating Card */}
        <div className="relative flex flex-col items-center bg-white shadow-2xl rounded-3xl p-8 max-w-xl w-full">
          {/* Image */}
          <img
            src={Previewimg}
            alt="Preview"
            className="w-48 h-48 object-cover rounded-2xl shadow-lg transition-transform transform hover:scale-105"
          />

          {/* Floating Label */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            Trusted by Thousands
          </div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold text-gray-900 mt-6">
            Rent<span className="text-blue-600">Sphere</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-700 mt-3 font-medium">
            Rent & Lend Everyday Items with Ease.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/explore")}
              className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Explore Rentals
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 bg-gray-200 text-gray-800 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-300 transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
