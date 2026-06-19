import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration API call here
    console.log('Registration Data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm overflow-hidden">
        {/* Header */}
        <div className="py-4 border-b border-gray-200">
          <h2 className="text-center text-xl font-bold text-black">SignUp</h2>
        </div>

        {/* Form Body */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent"
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
                className="w-full border-b border-gray-300 py-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors bg-transparent"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#4A90E2] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-[20px] transition-colors shadow-sm"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <div className="mt-6 text-center">
            <p className="text-black text-sm">
              Already a member?{' '}
              <Link to="/login" className="hover:underline hover:text-blue-600">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;