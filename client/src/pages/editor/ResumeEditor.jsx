import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FiDownload, FiSave } from 'react-icons/fi';
import ResumeBuilder from '../../components/resume/ResumeBuilder';
import ResumePreview from '../../components/resume/ResumePreview';

const ResumeEditor = () => {
  const [template, setTemplate] = useState('modern');

  // Initialize the central form state
  const { register, control, watch, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedin: '',
      summary: '',
      experience: [{ company: '', role: '', startDate: '', endDate: '', description: '' }],
      education: [{ school: '', degree: '', startDate: '', endDate: '', description: '' }],
      skills: ''
    }
  });

  // Watch all fields to pass down live data to the preview
  const resumeData = watch();

  // Field arrays for dynamic lists
  const expFields = useFieldArray({ control, name: 'experience' });
  const eduFields = useFieldArray({ control, name: 'education' });

  const onSave = (data) => {
    console.log("Saving Resume:", data);
    // Integration point for sending data to the backend API
  };

  return (
    <div className="h-[calc(100vh-73px)] flex flex-col bg-gray-100 overflow-hidden -m-8">
      
      {/* Workspace Header */}
      <header className="bg-white px-6 py-3 border-b border-gray-200 flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Resume Workspace</h1>
          <p className="text-xs text-gray-500">Unsaved changes</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleSubmit(onSave)}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
          >
            <FiSave className="mr-2" /> Save Draft
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
            <FiDownload className="mr-2" /> Export PDF
          </button>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Side: Builder Panels */}
        <div className="w-1/2 lg:w-2/5 min-w-[400px] h-full shadow-lg z-10 relative">
          <ResumeBuilder 
            register={register} 
            control={control}
            expFields={expFields}
            eduFields={eduFields}
            template={template}
            setTemplate={setTemplate}
          />
        </div>

        {/* Right Side: Live Document Preview */}
        <div className="flex-1 overflow-y-auto bg-gray-200 p-8 flex justify-center custom-scrollbar">
          <div className="transform scale-90 md:scale-100 origin-top">
            <ResumePreview data={resumeData} template={template} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeEditor;