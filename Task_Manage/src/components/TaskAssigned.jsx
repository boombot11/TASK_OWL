// TaskAssigned.jsx
import React from "react";
import { Avatar } from "@mui/material";

const TaskAssigned = () => {
  // Sample custom data
  const assignedTasks = [
    {
      id: 1,
      title: "Complete Project Report",
      description: "Finalize the report for the project.",
      priority: "High",
      assignees: ["Alice Smith", "Bob Johnson"],
      date: "2024-12-01",
    },
    {
      id: 2,
      title: "Prepare Presentation",
      description: "Create slides for the upcoming presentation.",
      priority: "Medium",
      assignees: ["Charlie Brown", "David Wilson"],
      date: "2024-12-05",
    },
    {
      id: 3,
      title: "Design New Logo",
      description: "Draft initial concepts for the new logo.",
      priority: "Low",
      assignees: ["Eve Davis", "Frank Clark"],
      date: "2024-12-10",
    },
  ];

  return (
    <div className="p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">
        Tasks Assigned to You
      </h2>
      {assignedTasks.length === 0 ? (
        <p className="text-gray-500 italic">No tasks assigned.</p>
      ) : (
        <ul className="space-y-4">
          {assignedTasks.map((task) => (
            <li
              key={task.id}
              className={`task-card flex flex-col  p-4 rounded-md transition-shadow duration-300 ${getGlowClass(
                task.priority
              )}`}
            >
              {/* Task Title */}
              <div className="font-semibold text-lg text-gray-800 mb-1">
                {task.title}
              </div>

              {/* Task Priority and Assignees */}
              <div className="py-4 flex items-center mb-2">
                <div className="relative">
                  {task.assignees.map((name, idx) => (
                    <Avatar
                      key={idx}
                      sx={{
                        bgcolor: getColor(idx),
                        position: 'absolute',
                        left: `${idx * 24}px`,
                         // Adjust overlap distance
                        zIndex: assignedTasks.length - idx,
                      }}
                    >
                      {getInitials(name)}
                    </Avatar>
                  ))}
                </div>
               
              </div>

        

              {/* Task Date */}
              <p style={{ paddingLeft: '520px' }} className="pl-12 text-sm text-gray-500">Due: {task.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Helper function to get initials from a full name
const getInitials = (name) => {
  const names = name.split(" ");
  return names.map((n) => n.charAt(0)).join("");
};

// Helper function to get a background color based on the index
const getColor = (index) => {
  const colors = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FF33A1", // Pink
    "#33FFF9", // Cyan
    "#FFB833", // Orange
  ];
  return colors[index % colors.length];
};

// Helper function to get background color based on priority
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

// Helper function to apply glow effect based on priority
const getGlowClass = (priority) => {
  return "border-2 border-blue-500 bg-blue-50 hover:shadow-lg hover:shadow-blue-500/50"; // Uniform glow effect
};

export default TaskAssigned;
