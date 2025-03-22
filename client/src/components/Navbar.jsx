import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          Rent<span className="text-yellow-300">Sphere</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
