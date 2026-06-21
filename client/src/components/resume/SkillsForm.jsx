import React from 'react';

const SkillsForm = ({ register }) => {
  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
        <p className="text-sm text-gray-500">List your skills separated by commas to optimize for ATS parsing.</p>
      </div>

      <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm">
        <label className="block text-sm font-medium text-gray-700 mb-2">Technical & Soft Skills</label>
        <textarea
          {...register('skills')}
          rows="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-y"
          placeholder="JavaScript, React, Node.js, MongoDB, Agile Methodologies, Team Leadership..."
        ></textarea>
      </div>
    </div>
  );
};

export default SkillsForm;