import React, { useState } from "react";
import { Search, Menu, X, User } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300 ease-in-out`}
  >
    <button
      onClick={toggleSidebar}
      className="absolute top-4 right-4 text-white"
    >
      <X size={24} />
    </button>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">Menu Item 1</li>
        <li className="mb-2">Menu Item 2</li>
        <li className="mb-2">Menu Item 3</li>
      </ul>
    </div>
  </div>
);

const SearchBar = () => (
  <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2">
    <Search size={20} className="text-gray-400" />
    <input
      type="text"
      placeholder="Search..."
      className="ml-2 outline-none flex-grow"
    />
  </div>
);

const ProfileSection = ({ toggleSidebar }) => (
  <div className="flex items-center space-x-4">
    <button
      onClick={toggleSidebar}
      className="text-gray-600 hover:text-gray-800"
    >
      <Menu size={24} />
    </button>
    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
      <User size={24} className="text-gray-600" />
    </div>
  </div>
);

const ProfilePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <ProfileSection toggleSidebar={toggleSidebar} />
          <div className="w-1/2">
            <SearchBar />
          </div>
        </div>
        <main className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to Your Profile</h1>
          <p className="text-gray-600">This is your profile page content.</p>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
