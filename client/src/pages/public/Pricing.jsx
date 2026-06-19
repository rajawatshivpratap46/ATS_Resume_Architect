import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, features, isPro }) => (
  <div className={`p-8 rounded-2xl ${isPro ? 'bg-gradient-to-b from-blue-600 to-purple-700 text-white shadow-2xl transform md:-translate-y-4' : 'bg-white text-gray-800 shadow-lg border border-gray-200'}`}>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-extrabold">${price}</span>
      <span className={isPro ? 'text-blue-200' : 'text-gray-500'}>/month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className={`w-5 h-5 mr-3 ${isPro ? 'text-blue-300' : 'text-blue-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <Link 
      to="/register" 
      className={`block text-center py-3 px-6 rounded-full font-bold transition-colors ${isPro ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
    >
      {isPro ? 'Upgrade to Pro' : 'Get Started Free'}
    </Link>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Invest in your career with plans designed for every job seeker.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <PricingCard 
            title="Starter" 
            price="0" 
            isPro={false}
            features={[
              "1 Resume Template",
              "Basic PDF Export",
              "1 Job Description Analysis",
              "Standard Support"
            ]} 
          />
          <PricingCard 
            title="Professional" 
            price="9.99" 
            isPro={true}
            features={[
              "Unlimited Resume Templates",
              "Unlimited PDF/Word Exports",
              "Advanced AI Keyword Suggestions",
              "Unlimited Cover Letters",
              "Priority Support"
            ]} 
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;