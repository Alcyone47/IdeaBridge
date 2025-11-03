import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomButton from "../components/common/CustomButton";
import { images } from "../assets";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setError("");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <img src={images.logo} alt="Logo" className="h-10 mb-6" />
      <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
      <form
        onSubmit={handleLogin}
        className="bg-black p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-400">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
        </div>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <CustomButton text="Login" variant="filled" className="w-full font-semibold mt-8" />

        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;