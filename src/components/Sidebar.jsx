import React from "react";
import { FiHome, FiBarChart2, FiSun, FiMoon, FiArchive } from "react-icons/fi";

const Sidebar = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className="h-screen w-72 text-white p-6 flex flex-col border-r border-white/10 bg-gradient-to-b from-teal-700 to-teal-900 shadow-2xl backdrop-blur-xl fixed top-0 left-0 dark:bg-teal-950 dark:from-teal-800 dark:to-teal-950">
      <h2 className="text-3xl font-extrabold mb-10 text-center tracking-wider">
        Cleantech
      </h2>

      <nav className="flex flex-col">
        <NavItem href="home" icon={<FiHome />} label="Home" />
        <NavItem href="/analytics" icon={<FiBarChart2 />} label="Analytics"/>
        <NavItem href="/profile" icon={<FiArchive />} label="Profile" />
      </nav>
      <button 
        onClick={toggleTheme}
        className="mt-auto flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 shadow-lg backdrop-blur-md"
      >
        {isDarkMode ? (
          <FiSun className="text-2xl text-yellow-400" />
        ) : (
          <FiMoon className="text-2xl text-blue-300" />
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
      className="flex items-center gap-4 my-2 p-4 rounded-xl transition-all duration-300 bg-white/10 text-white shadow-lg hover:bg-teal-500 hover:scale-110 dark:hover:bg-teal-700"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-lg font-semibold">{label}</span>
    </a>
  );
};

export default Sidebar;
