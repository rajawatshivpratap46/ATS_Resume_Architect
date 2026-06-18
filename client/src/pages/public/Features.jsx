import React from 'react';

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI Keyword Optimizer",
      description: "Our AI scans your target job description and suggests the exact keywords you need to include to rank higher in Applicant Tracking Systems."
    },
    {
      icon: "📊",
      title: "Real-Time ATS Scoring",
      description: "Get instant feedback on your resume's readability, formatting, and keyword density before you even hit apply."
    },
    {
      icon: "✨",
      title: "Smart Cover Letters",
      description: "Generate highly personalized, professional cover letters tailored to specific companies in just one click."
    },
    {
      icon: "🎨",
      title: "Recruiter-Approved Templates",
      description: "Choose from dozens of clean, professional templates specifically engineered to be parsed easily by modern ATS software."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features to Land the Job</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to write, optimize, and organize your job applications in one place.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;