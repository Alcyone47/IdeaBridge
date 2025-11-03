import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/common/CustomButton";
import { images } from "../assets";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <img src={images.logo} alt="Logo" className="h-14 mb-6" />
      <h2 className="text-3xl font-bold mb-4">Sign in to your account
      </h2>
      <form onSubmit={handleLogin} className="bg-black p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-400">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <CustomButton text="Login" variant="filled" className="w-full font-semibold"/>
        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")} className="text-blue-400 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;