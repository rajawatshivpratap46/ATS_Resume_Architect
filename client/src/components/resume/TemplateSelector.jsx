import React from 'react';

const TemplateSelector = ({ currentTemplate, setTemplate }) => {
  const templates = [
    { id: 'modern', name: 'Modern ATS', color: 'bg-blue-100 border-blue-500' },
    { id: 'classic', name: 'Classic Executive', color: 'bg-gray-100 border-gray-500' },
    { id: 'creative', name: 'Creative Tech', color: 'bg-purple-100 border-purple-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Choose Template</h3>
        <p className="text-sm text-gray-500">All templates are optimized for Applicant Tracking Systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map(tpl => (
          <div 
            key={tpl.id}
            onClick={() => setTemplate(tpl.id)}
            className={`cursor-pointer rounded-xl p-6 border-2 transition-all ${
              currentTemplate === tpl.id 
                ? `${tpl.color} shadow-md scale-[1.02]` 
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="h-32 bg-white rounded shadow-sm border border-gray-200 p-2 mb-3 opacity-80 flex flex-col gap-1">
              {/* Wireframe representation */}
              <div className="h-2 w-1/2 bg-gray-300 rounded mx-auto"></div>
              <div className="h-1 w-1/3 bg-gray-200 rounded mx-auto mb-2"></div>
              <div className="h-1 w-full bg-gray-200 rounded"></div>
              <div className="h-1 w-full bg-gray-200 rounded"></div>
              <div className="h-1 w-3/4 bg-gray-200 rounded"></div>
            </div>
            <h4 className="text-center font-medium text-gray-800">{tpl.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;