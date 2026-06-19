import React from 'react';

const MyResumes = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Resumes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder for Resume Cards */}
        <div className="bg-white border border-gray-200 rounded-xl aspect-[1/1.4] flex flex-col items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 cursor-pointer transition-colors shadow-sm">
          <span className="text-4xl mb-2">+</span>
          <span className="font-medium">New Resume</span>
        </div>
      </div>
    </div>
  );
};

export default MyResumes;