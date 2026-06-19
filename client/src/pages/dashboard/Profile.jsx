import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FiPlus, FiTrash2, FiSave, FiUser, FiBriefcase, FiCode, FiFileText } from 'react-icons/fi';

const Profile = () => {
  // Initialize the form with react-hook-form
  const { register, control, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      summary: '',
      skills: '',
      // Initialize with one empty experience block
      experiences: [{ company: '', role: '', startDate: '', endDate: '', description: '' }]
    }
  });

  // useFieldArray handles dynamic lists (like adding multiple jobs)
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experiences'
  });

  const onSubmit = (data) => {
    console.log('Master Profile Data Saved:', data);
    // Here you will eventually dispatch an action to save this to your Redux store/MongoDB
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Master AI Profile</h1>
        <p className="text-gray-500 mt-2">
          Input your complete professional history here. The AI will use this central database to extract relevant data and generate highly tailored resumes and cover letters for specific job descriptions.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* 1. Basic Information */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center mb-6 border-b border-gray-100 pb-4">
            <FiUser className="text-blue-600 text-2xl mr-3" />
            <h2 className="text-xl font-bold text-gray-800">Basic Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input 
                {...register('firstName')} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input 
                {...register('lastName')} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="e.g. Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email"
                {...register('email')} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                {...register('phone')} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
              <input 
                {...register('linkedin')} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="linkedin.com/in/username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">GitHub URL</label>
              <input 
                {...register('github')} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                placeholder="github.com/username"
              />
            </div>
          </div>
        </div>

        {/* 2. Professional Summary */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center mb-6 border-b border-gray-100 pb-4">
            <FiFileText className="text-blue-600 text-2xl mr-3" />
            <h2 className="text-xl font-bold text-gray-800">Professional Summary</h2>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-3">Provide a comprehensive overview of your engineering background. The AI will summarize this based on the job you apply for.</p>
            <textarea 
              {...register('summary')} 
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-y"
              placeholder="e.g. Innovative Full Stack Engineer with expertise in the MERN stack, Generative AI integration, and scalable cloud architectures..."
            ></textarea>
          </div>
        </div>

        {/* 3. Master Work Experience */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
            <div className="flex items-center">
              <FiBriefcase className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Work Experience</h2>
            </div>
            <button 
              type="button"
              onClick={() => append({ company: '', role: '', startDate: '', endDate: '', description: '' })}
              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1.5 rounded-md"
            >
              <FiPlus className="mr-1" /> Add Role
            </button>
          </div>

          <div className="space-y-8">
            {fields.map((item, index) => (
              <div key={item.id} className="relative p-6 border border-gray-100 bg-gray-50 rounded-lg">
                {/* Remove Button */}
                {fields.length > 1 && (
                  <button 
                    type="button" 
                    onClick={() => remove(index)}
                    className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
                    title="Remove Experience"
                  >
                    <FiTrash2 className="text-lg" />
                  </button>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input 
                      {...register(`experiences.${index}.company`)} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="e.g. Tech Solutions Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role / Title</label>
                    <input 
                      {...register(`experiences.${index}.role`)} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="e.g. Software Engineer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input 
                      type="month"
                      {...register(`experiences.${index}.startDate`)} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input 
                      type="month"
                      {...register(`experiences.${index}.endDate`)} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities & Achievements</label>
                  <p className="text-xs text-gray-500 mb-2">List everything you did. The AI will select the most relevant points for each application.</p>
                  <textarea 
                    {...register(`experiences.${index}.description`)} 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-y"
                    placeholder="- Architected a microservices backend using Node.js and MongoDB...&#10;- Implemented CI/CD pipelines..."
                  ></textarea>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Technical Skills */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center mb-6 border-b border-gray-100 pb-4">
            <FiCode className="text-blue-600 text-2xl mr-3" />
            <h2 className="text-xl font-bold text-gray-800">Master Skills List</h2>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">All Skills (Comma separated)</label>
            <p className="text-sm text-gray-500 mb-3">Include all languages, frameworks, tools, and methodologies you know. The AI will match these against ATS keywords.</p>
            <textarea 
              {...register('skills')} 
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-y"
              placeholder="JavaScript, React, Node.js, MongoDB, Python, Docker, AWS, UI/UX Design, RAG..."
            ></textarea>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-end space-x-4 pt-4">
          <button 
            type="button"
            className="px-6 py-2.5 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-70"
          >
            <FiSave className="mr-2" />
            {isSubmitting ? 'Saving...' : 'Save Master Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;