import React from "react";
import { useNavigate } from "react-router-dom";
import { FiBarChart2, FiSun, FiTrendingUp } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">
        Welcome to Cleantech Analytics Dashboard
      </h1>
      <p className="text-gray-700 dark:text-gray-500 mb-6">
        Track environmental data, analyze sustainability trends, and gain
        insights into energy savings, carbon emissions, and air quality.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg flex items-center gap-4">
          <FiBarChart2 className="text-green-700 dark:text-green-400 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-black">
              Carbon Emissions
            </h2>
            <p className="text-gray-700 dark:text-gray-500">122.4 tons (Jan)</p>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg flex items-center gap-4">
          <FiSun className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-black">Energy Savings</h2>
            <p className="text-gray-700 dark:text-gray-500">40.2 kWh (Jan)</p>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg flex items-center gap-4">
          <FiTrendingUp className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-black">
              Air Quality Index
            </h2>
            <p className="text-gray-700 dark:text-gray-500">45 (Good)</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => navigate("/analytics")}
          className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition"
        >
          View Analytics
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="px-6 py-3 bg-[#046861] text-white rounded-lg shadow-md hover:bg-[#4ECDC4] transition"
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default Home;
