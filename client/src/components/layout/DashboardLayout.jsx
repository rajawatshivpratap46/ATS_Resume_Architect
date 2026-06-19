import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-[calc(100vh-73px)] bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Outlet renders the matched child route component */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;