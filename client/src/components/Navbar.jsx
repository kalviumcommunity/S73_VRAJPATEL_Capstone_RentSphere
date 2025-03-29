import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          Rent<span className="text-yellow-300">Sphere</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/signup"
            className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-yellow-500"
          >
            Signup
          </Link>

          <Link
            to="/login"
            className="bg-white text-blue-600 px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-gray-100"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 p-4 text-center space-y-4">
          <Link
            to="/signup"
            className="block bg-yellow-400 text-blue-900 px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-yellow-500"
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </Link>

          <Link
            to="/login"
            className="block bg-white text-blue-600 px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
