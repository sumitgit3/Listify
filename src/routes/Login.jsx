import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  {AuthContext}  from "../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { user, signIn } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    // form validation
    if (!email || !password || !username) {
      toast.warn("Please enter all the fields.");
      return;
    }
    //signIn mutation
    await signIn(username,email,password);
  };
  
  //redirect to my List if logged in
  useEffect(() => {
    if (user) {
      navigate("/mylist");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="username"
              className="border rounded p-2 w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded p-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded p-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
          >
            Login
          </button>
        </form>

        {/* Navigation to SignUp */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-purple-600 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
