import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Helper to highlight active links
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          ATS<span className="text-blue-600">Architect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/features" 
            className={`font-medium transition-colors ${isActive('/features') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`font-medium transition-colors ${isActive('/pricing') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            Pricing
          </Link>
          
          <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
            <Link 
              to="/login" 
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
            >
              Log in
            </Link>
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;