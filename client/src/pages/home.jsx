import Previewimg from "../assets/Preview.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200">
      {/* Image Section */}
      <img
        src={Previewimg}
        alt="Nothing to show"
        className="w-72 h-72 object-cover rounded-2xl shadow-2xl mb-6 border-4 border-white"
      />

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
        Rent<span className="text-blue-600">Sphere</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-700 mb-6 font-medium">
        Rent & Lend Everyday Items with Ease.
      </p>

      {/* Explore Button */}
      <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
        Explore Rentals
      </button>
    </div>
  );
};

export default Home;

  