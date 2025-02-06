import React from "react";
import { FiHome, FiBarChart2, FiSettings, FiSun, FiMoon } from "react-icons/fi";

const Sidebar = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className="h-screen w-72 text-white p-6 flex flex-col border-r border-white/10 bg-gradient-to-b from-green-600 to-green-800 shadow-2xl backdrop-blur-xl fixed top-0 left-0 dark:bg-green-900 dark:from-green-800 dark:to-green-950">
      <h2 className="text-3xl font-extrabold mb-10 text-center tracking-wider">
        Cleantech
      </h2>

      <nav className="flex flex-col space-y-4">
        <NavItem href="/" icon={<FiHome />} label="Home" />
        <NavItem href="/analytics" icon={<FiBarChart2 />} label="Analytics" />
        <NavItem href="/settings" icon={<FiSettings />} label="Settings" />
      </nav>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="mt-auto flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 shadow-lg"
      >
        {isDarkMode ? (
          <FiSun className="text-2xl text-white" />
        ) : (
          <FiMoon className="text-2xl text-white" />
        )}
        <span className="text-lg font-semibold">
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
      className="flex items-center gap-5 p-4 rounded-xl transition-all duration-300 bg-white/10 text-white shadow-md hover:bg-green-500 hover:scale-105 dark:hover:bg-green-700"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
};

export default Sidebar;
