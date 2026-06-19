import React, { useState } from 'react';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    adminId: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Login Attempt:', formData);
    // Add admin authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm overflow-hidden border-t-4 border-blue-500">
        <div className="py-6 border-b border-gray-200 bg-gray-50">
          <h2 className="text-center text-xl font-bold text-gray-800">Admin Portal</h2>
          <p className="text-center text-sm text-gray-500 mt-1">Authorized Personnel Only</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="adminId"
                placeholder="Admin ID / Email"
                value={formData.adminId}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
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
                className="w-full border-b border-gray-300 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-2 px-4 rounded-[20px] transition-colors shadow-sm"
              >
                Authenticate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;