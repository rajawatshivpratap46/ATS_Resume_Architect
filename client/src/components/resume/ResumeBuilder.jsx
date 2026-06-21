import React, { useState } from 'react';
import { FiUser, FiBriefcase, FiBook, FiCode, FiLayout } from 'react-icons/fi';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import TemplateSelector from './TemplateSelector';

const ResumeBuilder = ({ register, control, expFields, eduFields, template, setTemplate }) => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal', icon: <FiUser /> },
    { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
    { id: 'education', label: 'Education', icon: <FiBook /> },
    { id: 'skills', label: 'Skills', icon: <FiCode /> },
    { id: 'design', label: 'Design', icon: <FiLayout /> },
  ];

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      
      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 overflow-x-auto bg-gray-50 shrink-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-4 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
              activeTab === tab.id 
                ? 'border-blue-600 text-blue-600 bg-white' 
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Scrollable Form Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'personal' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">First Name</label>
                <input {...register('firstName')} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Last Name</label>
                <input {...register('lastName')} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input {...register('email')} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone</label>
              <input {...register('phone')} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">LinkedIn URL</label>
              <input {...register('linkedin')} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Professional Summary</label>
              <textarea {...register('summary')} rows="4" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <ExperienceForm 
            register={register} 
            fields={expFields.fields} 
            append={expFields.append} 
            remove={expFields.remove} 
          />
        )}

        {activeTab === 'education' && (
          <EducationForm 
            register={register} 
            fields={eduFields.fields} 
            append={eduFields.append} 
            remove={eduFields.remove} 
          />
        )}

        {activeTab === 'skills' && (
          <SkillsForm register={register} />
        )}

        {activeTab === 'design' && (
          <TemplateSelector currentTemplate={template} setTemplate={setTemplate} />
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;