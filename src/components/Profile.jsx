import React from "react";
import { FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="p-6 flex flex-col items-center justify-center text-black text-center">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800  p-8">
        <h1 className="text-3xl font-bold  text-[#046861] dark:text-[#046861]  mb-2">
          Cleantech Solutions
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-600 mb-4">
          Innovating for a sustainable future.
        </p>
        <div className="space-y-4">
          <div className="flex justify-center gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-600">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                San Francisco, CA
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-600">
                Established
              </h3>
              <p className="text-gray-600 dark:text-gray-400">2015</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-600">
                Employees
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                500+ team members
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-600">
              Our Mission
            </h3>
            <p className="text-gray-800 dark:text-gray-600">
              Cleantech Solutions is committed to advancing environmental
              sustainability through cutting-edge technology and innovative
              solutions. We aim to empower businesses to reduce their carbon
              footprint and achieve their sustainability goals.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://twitter.com/cleantech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-500 hover:text-blue-600"
          >
            <FiTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/cleantech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-700 hover:text-blue-800"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://instagram.com/cleantech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-800 hover:text-gray-900"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
