import React from "react";
import { FiHome, FiBarChart2, FiSettings, FiSun, FiMoon } from "react-icons/fi";

const Sidebar = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className="h-screen w-72 text-white p-6 flex flex-col border-r border-white/20 bg-gradient-to-b from-green-500 to-green-700 shadow-xl fixed top-0 left-0 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center tracking-wide">
        Cleantech
      </h2>

      <nav className="flex flex-col space-y-6">
        <NavItem href="/" icon={<FiHome />} label="Home" />
        <NavItem href="/analytics" icon={<FiBarChart2 />} label="Analytics" />
        <NavItem href="/settings" icon={<FiSettings />} label="Settings" />
      </nav>
      <button
        onClick={toggleTheme}
        className="mt-auto flex items-center gap-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-green-200 transition-all duration-300"
      >
        {isDarkMode ? (
          <FiSun className="text-xl" />
        ) : (
          <FiMoon className="text-xl" />
        )}
        <span className="text-lg font-medium">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </div>
  );
};

const NavItem = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-6 p-4 rounded-lg transition-all duration-300 hover:bg-green-600 hover:scale-105 bg-white/10 hover:text-white"
    >
      <span className="text-3xl text-green-200">{icon}</span>
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
};

export default Sidebar;
