import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex space-x-4">
            <Link
              to="/profile"
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full transition hover:bg-yellow-500"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-full transition hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto mt-10 text-center">
        <h2 className="text-3xl font-semibold">Welcome to Your Dashboard</h2>
        <p className="text-gray-600 mt-2">Manage your profile and settings here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
