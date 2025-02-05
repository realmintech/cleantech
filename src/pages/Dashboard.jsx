import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="container-fluid">
        <div className="row">
          <aside className="col-2 bg-secondary text-black dark:bg-gray-800 dark:text-white">
            <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          </aside>
          <div className="col-10 bg-white dark:bg-gray-900">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
