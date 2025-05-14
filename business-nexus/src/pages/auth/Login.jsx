import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  FaApple,
  FaMicrosoft,
  FaEye,
  FaEyeSlash,
  FaLock,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");

    if (!validateForm()) return;

    try {
      // Get all stored credentials
      const credentialsData = localStorage.getItem("userCredentials");
      const credentials = credentialsData ? JSON.parse(credentialsData) : [];

      // Find matching credential
      const userCredential = credentials.find(
        (cred) => cred.email === email && cred.password === password
      );

      if (userCredential) {
        // Get full user data
        const usersData = localStorage.getItem("users");
        const users = usersData ? JSON.parse(usersData) : [];
        const user = users.find((u) => u.id === userCredential.userId);

        if (user) {
          // Store authentication state
          if (rememberMe) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(user));
          } else {
            sessionStorage.setItem("isLoggedIn", "true");
            sessionStorage.setItem("currentUser", JSON.stringify(user));
          }

          navigate("/dashboard", { replace: true });
        } else {
          setLoginError("User data not found");
        }
      } else {
        setLoginError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-white backdrop-blur-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Please sign in to continue</p>
        </div>

        {loginError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {loginError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-6 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none transition-all bg-transparent text-gray-800`}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-6 rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none transition-all bg-transparent text-gray-800`}
              placeholder="Password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-4 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <Input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <button
              type="button"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </button>
          </div>

          <Button type="submit" className="w-full sm:w-90 py-1">
            Sign In
          </Button>

          <div className="mt-8">
            <div className="relative flex items-center justify-center text-sm text-gray-600">
              <span className="px-2 bg-white">Or continue with</span>
              <div className="mb-12 absolute w-full h-px bg-gray-200"></div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <FcGoogle className="text-xl" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <FaLinkedin size={20} className="text-blue-800" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <MdEmail className="text-xl text-yellow-400" />
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6 flex items-center justify-center text-sm">
          <FaLock className="mr-2 text-gray-500" />
          <span className="text-gray-500">Secure SSL Connection</span>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
