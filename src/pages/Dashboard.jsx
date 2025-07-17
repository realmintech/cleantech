import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`flex h-screen transition-all duration-300`}>
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64`}
      >
        <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </aside>

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="md:hidden p-4 bg-white dark:bg-orange-900 shadow-md">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-4xl text-black"
          >
            <FiMenu />
          </button>
        </div>

        <main className="p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
