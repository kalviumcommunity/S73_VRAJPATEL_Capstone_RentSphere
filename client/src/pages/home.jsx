import Previewimg from "../assets/Preview.png"


const Home = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-100">
        <img src={Previewimg} alt="Nothing to show" className="w-64 h-64 object-cover rounded-xl shadow-lg mb-6 border border-gray-300"/>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">RentSphere</h1>
        <p className="text-lg text-gray-600 mb-6">Rent & Lend Everyday Items with Ease.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Explore Rentals
        </button>
      </div>
    );
  };
  
  export default Home;
  