import React from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';

const EducationForm = ({ register, fields, append, remove }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Education</h3>
        <button
          type="button"
          onClick={() => append({ school: '', degree: '', startDate: '', endDate: '', description: '' })}
          className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-md transition-colors"
        >
          <FiPlus className="mr-1" /> Add Education
        </button>
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="relative p-5 border border-gray-200 bg-white rounded-xl shadow-sm">
          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
            >
              <FiTrash2 className="text-lg" />
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution / School</label>
              <input
                {...register(`education.${index}.school`)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="University of Technology"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree & Major</label>
              <input
                {...register(`education.${index}.degree`)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="B.S. Computer Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="month"
                {...register(`education.${index}.startDate`)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date / Expected</label>
              <input
                type="month"
                {...register(`education.${index}.endDate`)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details (GPA, Awards)</label>
            <textarea
              {...register(`education.${index}.description`)}
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-y"
              placeholder="GPA: 3.8/4.0, Dean's List..."
            ></textarea>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationForm;