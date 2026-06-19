import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiFileText, FiCpu, FiUser, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <FiHome /> },
    { name: 'My Resumes', path: '/dashboard/resumes', icon: <FiFileText /> },
    { name: 'AI Optimizer', path: '/editor/optimizer', icon: <FiCpu /> },
    { name: 'Cover Letters', path: '/dashboard/cover-letters', icon: <FiFileText /> },
    { name: 'Profile', path: '/dashboard/profile', icon: <FiUser /> },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-73px)] sticky top-[73px] flex flex-col">
      <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
          Menu
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              `flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`
            }
          >
            <span className="text-lg mr-3">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <NavLink
          to="/dashboard/settings"
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <FiSettings className="text-lg mr-3" />
          Settings
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;