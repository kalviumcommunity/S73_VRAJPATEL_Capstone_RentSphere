import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // ✅ Initialize navigation

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Unauthorized: No token found");
  
        const response = await fetch("http://localhost:5000/api/auth/user", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
  
        const data = await response.json();
        console.log("User Data:", data); // Log response
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src={user.profilePic || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* User Details */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-gray-700">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-lg font-semibold">{user.phone || "N/A"}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-lg font-semibold">{user.address || "N/A"}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Verified</p>
            <p className={`text-lg font-semibold ${user.isVerified ? "text-green-500" : "text-red-500"}`}>
              {user.isVerified ? "Yes" : "No"}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Joined</p>
            <p className="text-lg font-semibold">{new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Listings Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800">Listings</h3>
          {user.listings && user.listings.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {user.listings.map((listing) => (
                <li key={listing} className="bg-gray-100 p-3 rounded-lg text-gray-700">
                  {listing}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-2">No listings available</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Logout
          </button>
        </div>

        {/* ✅ Back to Dashboard Button */}
        <div className="mt-6 flex justify-center">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            onClick={() => navigate("/dashboard")} // Navigate to dashboard
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
