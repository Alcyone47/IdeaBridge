import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomButton from "../../components/common/CustomButton";
import { images } from "../../assets";
import api from "../../api/axios"

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "entrepreneur",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("api/users/register", formData)
      /* const res = await axios.post("http://localhost:5000/api/users/register", formData); */
      setSuccess("Signup successful! Redirecting to login...");
      setError("");
      setTimeout(() => navigate("/login"), 5000);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <img src={images.logo} alt="Logo" className="h-10 mb-6" />
      <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>
      <form onSubmit={handleSignup} className="bg-black p-8 pt-4 rounded-2xl shadow-lg w-full max-w-md">
        {success && <p className="text-green-500 text-sm mb-3">{success}</p>}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-gray-400">Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm text-gray-400">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-400">I am a...</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <option value="entrepreneur">Startup Founder</option>
            <option value="investor">Investor</option>
          </select>
        </div>
        <CustomButton text="Sign Up" variant="filled" className="w-full font-semibold bg-white" />
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer hover:underline"
            >
            Log in
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;