import React from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';

const ExperienceForm = ({ register, fields, append, remove }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Work Experience</h3>
        <button
          type="button"
          onClick={() => append({ company: '', role: '', startDate: '', endDate: '', description: '' })}
          className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-md transition-colors"
        >
          <FiPlus className="mr-1" /> Add Role
        </button>
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="relative p-5 border border-gray-200 bg-white rounded-xl shadow-sm">
          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
              title="Remove"
            >
              <FiTrash2 className="text-lg" />
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                {...register(`experience.${index}.company`)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Tech Solutions Inc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role / Title</label>
              <input
                {...register(`experience.${index}.role`)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Software Engineer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="month"
                {...register(`experience.${index}.startDate`)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="month"
                {...register(`experience.${index}.endDate`)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities</label>
            <textarea
              {...register(`experience.${index}.description`)}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-y"
              placeholder="- Developed key features...&#10;- Improved performance by..."
            ></textarea>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceForm;