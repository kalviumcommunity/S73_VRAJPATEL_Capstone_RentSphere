import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AuthForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSignupPage = location.pathname === "/signup";
  const [isSignup, setIsSignup] = useState(isSignupPage);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsSignup(isSignupPage);
      setIsAnimating(false);
    }, 300);
  }, [isSignupPage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const url = `http://localhost:5000/api/auth/${isSignup ? "signup" : "login"}`;
      const { data } = await axios.post(url, formData);

      if (isSignup) {
        navigate("/login");
      } else {
        localStorage.setItem("token", data.token); // Store JWT token
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
      <div className="relative w-full max-w-md p-8 bg-white shadow-xl rounded-3xl overflow-hidden">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-10 bg-gray-200 rounded-full flex items-center p-1">
            <button
              className={`w-1/2 h-full rounded-full text-sm font-semibold transition-all ${
                !isSignup ? "bg-blue-500 text-white shadow-md" : "text-gray-600"
              }`}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className={`w-1/2 h-full rounded-full text-sm font-semibold transition-all ${
                isSignup ? "bg-blue-500 text-white shadow-md" : "text-gray-600"
              }`}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Form with Smooth Transition */}
        <div
          className={`transition-all duration-300 transform ${
            isAnimating ? "opacity-0 -translate-x-5" : "opacity-100 translate-x-0"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-center">{error}</p>}

            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                required
              />
            </div>

            {isSignup && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                    required
                  />
                </div>
              </>
            )}

            <button type="submit" className="w-full p-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 shadow-md transition-all">
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>
        </div>

        {/* Toggle Link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          {isSignup ? "Already have an account? " : "Don't have an account? "}
          <span
            className="text-blue-600 font-medium cursor-pointer hover:underline"
            onClick={() => navigate(isSignup ? "/login" : "/signup")}
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
