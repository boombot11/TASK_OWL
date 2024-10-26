import React from "react";
import { motion } from "framer-motion";

const TaskList = ({ tasks }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "border-red-400";
      case "Medium": return "border-yellow-400";
      case "Low": return "border-green-400";
      default: return "border-gray-300";
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 custom-md:grid-cols-2 custom-lg:grid-cols-3 gap-5 justify-items-center">
      {tasks.map((task) => (
        <motion.div
          key={task.id}
          className={`border-2 p-4 rounded-lg bg-white shadow-md ${getPriorityColor(task.priority)} hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105`}
          style={{
            minWidth: "200px",
            boxShadow: `0 0 10px ${getPriorityColor(task.priority).split("-")[1]}`,
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <div className="flex flex-col">
            <h3 className="font-bold text-sm text-gray-800">{task.title}</h3>
            <p className="text-xs text-gray-600">{task.description}</p>
          </div>
          <div className="py-2 mt-2 text-xs text-gray-500">
            <p>{task.date}</p>
            <p>
              Priority:{" "}
              <span className={`text-${task.priority === "High" ? "red" : task.priority === "Medium" ? "yellow" : "green"}-600 font-semibold`}>
                {task.priority}
              </span>
            </p>
          </div>
          <p className={`text-xs font-semibold ${task.completed ? "text-green-600" : "text-red-600"}`}>
            {task.status}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default TaskList;
