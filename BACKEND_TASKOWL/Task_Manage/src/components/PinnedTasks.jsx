import React from "react";
import { motion } from "framer-motion";
import { PinIcon } from "@heroicons/react/solid"; // Import pin icon from Heroicons

const PinnedTasks = ({ pinnedTasks }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">
        Pinned Tasks
      </h2>
      {pinnedTasks.length === 0 ? (
        <p className="text-gray-500 italic">No pinned tasks.</p>
      ) : (
        <ul className="space-y-4">
          {pinnedTasks.map((task) => (
            <motion.li
              key={task.id}
              className={`flex flex-col p-4 rounded-md shadow-md transition-transform transform hover:scale-105 ${getPinColor(
                task.priority
              )}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <PinIcon className="h-5 w-5 text-yellow-500 mr-2" />{" "}
                  {/* Pin icon */}
                  <h3 className="font-semibold text-lg text-gray-800">
                    {task.title}
                  </h3>
                </div>
                <span
                  className={`text-sm px-2 py-1 rounded-full text-white ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </div>
              <p className="text-gray-700">{task.description}</p>
              <p className="text-sm text-gray-500">Due: {task.date}</p>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Helper function to get background color based on priority for pin
const getPinColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 border border-red-500";
    case "Medium":
      return "bg-yellow-100 border border-yellow-500";
    case "Low":
      return "bg-green-100 border border-green-500";
    default:
      return "bg-gray-100 border border-gray-500";
  }
};

// Helper function to get background color based on priority for text badge
const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-500";
    case "Medium":
      return "bg-yellow-500";
    case "Low":
      return "bg-green-500";
    default:
      return "bg-gray-400";
  }
};

export default PinnedTasks;
