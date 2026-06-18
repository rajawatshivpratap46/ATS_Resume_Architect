import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Public Pages
import Home from '../pages/public/Home';
import Features from '../pages/public/Features';
import Pricing from '../pages/public/Pricing';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';
import AdminLogin from '../pages/public/AdminLogin';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      
      {/* Add a fallback route for 404s (optional but recommended) */}
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-gray-600">
          404 - Page Not Found
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;