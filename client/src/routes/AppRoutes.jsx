import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Public Pages
import Home from '../pages/public/Home';
import Features from '../pages/public/Features';
import Pricing from '../pages/public/Pricing';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';
import AdminLogin from '../pages/public/AdminLogin';

// Layouts
import DashboardLayout from '../components/layout/DashboardLayout';

// Dashboard Pages
import Dashboard from '../pages/dashboard/Dashboard';
import MyResumes from '../pages/dashboard/MyResumes';
import Profile from '../pages/dashboard/Profile';
import CoverLetters from '../pages/dashboard/CoverLetters';

// Editor Pages (Placeholders for now)
import ResumeEditor from '../pages/editor/ResumeEditor';

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
      
      {/* Protected Dashboard Routes nested inside DashboardLayout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="resumes" element={<MyResumes />} />
        <Route path="cover-letters" element={<CoverLetters />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Editor Routes (Usually full screen, so they might not share the DashboardLayout) */}
      <Route path="/editor" element={<DashboardLayout />}>
        <Route path="new" element={<ResumeEditor />} />
        <Route path=":id" element={<ResumeEditor />} />
      </Route>

      {/* 404 Fallback */}
      <Route path="*" element={
        <div className="min-h-[calc(100vh-73px)] flex items-center justify-center text-2xl font-bold text-gray-600 bg-gray-50">
          404 - Page Not Found
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;