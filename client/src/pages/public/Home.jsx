import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Build a Resume that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Beats the ATS</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Harness the power of Artificial Intelligence to craft, optimize, and analyze your resume. Get past the robots and into the interview room.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/register" 
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg w-full sm:w-auto"
            >
              Start Building for Free
            </Link>
            <Link 
              to="/features" 
              className="px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-sm w-full sm:w-auto"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </main>

      {/* Quick Stats/Social Proof (Optional) */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
            <p className="text-gray-600 font-medium">ATS Pass Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-600 mb-2">10k+</h3>
            <p className="text-gray-600 font-medium">Resumes Generated</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600 mb-2">2x</h3>
            <p className="text-gray-600 font-medium">More Interviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;