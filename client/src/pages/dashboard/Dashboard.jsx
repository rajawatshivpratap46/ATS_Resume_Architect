import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiTrendingUp, FiCheckCircle, FiClock } from 'react-icons/fi';

const Dashboard = () => {
  // Mock data for initial layout testing
  const stats = [
    { label: 'Total Resumes', value: '3', icon: <FiCheckCircle className="text-green-500" /> },
    { label: 'Avg ATS Score', value: '84%', icon: <FiTrendingUp className="text-blue-500" /> },
    { label: 'Recent Scans', value: '12', icon: <FiClock className="text-purple-500" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Engineer</h1>
          <p className="text-gray-500 mt-1">Here is what's happening with your job applications today.</p>
        </div>
        <Link 
          to="/editor/new" 
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm font-medium"
        >
          <FiPlus className="mr-2" />
          Create New Resume
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
            <div className="p-3 bg-gray-50 rounded-lg text-2xl">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for Recent Resumes Table/Grid */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Documents</h2>
        <div className="text-center py-12 text-gray-500 border-2 border-dashed border-gray-200 rounded-lg">
          No resumes generated yet. Click "Create New Resume" to get started.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;