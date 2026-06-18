import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm overflow-hidden">
        <div className="py-4 border-b border-gray-200">
          <h2 className="text-center text-xl font-bold text-black">Login</h2>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#4A90E2] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-[20px] transition-colors shadow-sm"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-black text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="hover:underline hover:text-blue-600 font-medium">
                Sign Up
              </Link>
            </p>
            <p className="text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-600 hover:underline">
                Forgot password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;