import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6 mt-auto">
      <div className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ATS Architect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;