import React from 'react';

const ResumePreview = ({ data, template }) => {
  // Simple rendering logic that changes slightly based on the selected template
  const isModern = template === 'modern';
  const isClassic = template === 'classic';

  return (
    <div className="bg-white shadow-2xl rounded-sm w-full min-h-[842px] max-w-[595px] mx-auto p-10 overflow-hidden transform origin-top border border-gray-200 print:shadow-none print:p-0">
      
      {/* Header */}
      <div className={`mb-6 ${isClassic ? 'text-center border-b-2 border-gray-800 pb-4' : 'border-b border-gray-300 pb-4'}`}>
        <h1 className={`font-bold text-gray-900 ${isModern ? 'text-4xl text-blue-800' : 'text-3xl'}`}>
          {data.firstName || 'First'} {data.lastName || 'Last'}
        </h1>
        <div className={`mt-2 text-sm text-gray-600 flex flex-wrap gap-3 ${isClassic ? 'justify-center' : ''}`}>
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>• {data.phone}</span>}
          {data.linkedin && <span>• {data.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-6">
          <h2 className={`text-lg font-bold uppercase tracking-wider mb-2 ${isModern ? 'text-blue-700' : 'text-gray-800 border-b border-gray-300'}`}>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-bold uppercase tracking-wider mb-3 ${isModern ? 'text-blue-700' : 'text-gray-800 border-b border-gray-300'}`}>
            Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-gray-800">{exp.role || 'Job Title'}</h3>
                    <div className="text-sm font-medium text-gray-600">{exp.company || 'Company Name'}</div>
                  </div>
                  <div className="text-sm text-gray-500 italic text-right">
                    {exp.startDate} {exp.startDate && exp.endDate ? ' - ' : ''} {exp.endDate}
                  </div>
                </div>
                {exp.description && (
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap mt-2">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-lg font-bold uppercase tracking-wider mb-3 ${isModern ? 'text-blue-700' : 'text-gray-800 border-b border-gray-300'}`}>
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-800">{edu.school || 'School Name'}</h3>
                  <div className="text-sm text-gray-700">{edu.degree || 'Degree'}</div>
                  {edu.description && <div className="text-sm text-gray-600 mt-1">{edu.description}</div>}
                </div>
                <div className="text-sm text-gray-500 italic text-right">
                  {edu.startDate} {edu.startDate && edu.endDate ? ' - ' : ''} {edu.endDate}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills && (
        <div>
          <h2 className={`text-lg font-bold uppercase tracking-wider mb-2 ${isModern ? 'text-blue-700' : 'text-gray-800 border-b border-gray-300'}`}>
            Skills
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{data.skills}</p>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;