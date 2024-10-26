import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Import the logout icon

const Sidebar = ({ isOpen, toggleSidebar, handleNavigate, handleLogout }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } flex flex-col`}
    >
      <div className="p-4 flex-1">
        {/* Profile section at the top of the sidebar */}
        <div
          className="flex items-center mb-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <img
            src="https://www.gravatar.com/avatar?d=mp&s=40"
            alt="Profile"
            className="rounded-full w-10 h-10 border-2 border-blue-500 mr-2"
          />
          <h2 className="text-lg font-semibold">User Name</h2>
        </div>
        <h2 className="text-xl font-semibold">Profile Sidebar</h2>
        <ul className="mt-4 space-y-2">
          <li
            className="hover:bg-blue-800 p-2 rounded-md cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            Dashboard
          </li>
          <li
            className="hover:bg-blue-800 p-2 rounded-md cursor-pointer"
            onClick={() => handleNavigate("/vital-task")}
          >
            Vital Task
          </li>
          <li
            className="hover:bg-blue-800 p-2 rounded-md cursor-pointer"
            onClick={() => handleNavigate("/my-task")}
          >
            My Task
          </li>
          <li
            className="hover:bg-blue-800 p-2 rounded-md cursor-pointer"
            onClick={() => handleNavigate("/settings")}
          >
            Settings
          </li>
          <li
            className="hover:bg-blue-800 p-2 rounded-md cursor-pointer"
            onClick={() => handleNavigate("/help")}
          >
            Help
          </li>
        </ul>
      </div>
      {/* Logout Icon at the Extreme Bottom */}
      <div className="p-4">
        <li
          className="hover:bg-red-600 p-2 rounded-md cursor-pointer flex"
          onClick={() => handleLogout()}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />{" "}
          {/* Logout icon */}
          Logout
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
