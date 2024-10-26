import React from "react";

const TaskAssigned = ({ assignedTasks }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
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
              className={`task-card flex flex-col p-4 rounded-md transition-shadow duration-300 ${getGlowClass(
                task.priority
              )}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  {task.title}
                </h3>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Sample task data for visualization
const sampleTasks = [
  {
    id: 1,
    title: "Finish the project report",
    description: "Complete the final report for the project.",
    date: "2024-10-30",
    priority: "High",
  },
  {
    id: 2,
    title: "Team meeting",
    description: "Discuss project updates with the team.",
    date: "2024-10-28",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Submit expense reports",
    description: "Submit all the necessary expense reports.",
    date: "2024-11-01",
    priority: "Low",
  },
];

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
  switch (priority) {
    case "High":
      return "border-2 border-red-500 bg-red-50 hover:shadow-lg hover:shadow-red-500/50";
    case "Medium":
      return "border-2 border-yellow-500 bg-yellow-50 hover:shadow-lg hover:shadow-yellow-500/50";
    case "Low":
      return "border-2 border-green-500 bg-green-50 hover:shadow-lg hover:shadow-green-500/50";
    default:
      return "border-2 border-gray-400 bg-gray-50 hover:shadow-lg hover:shadow-gray-500/50";
  }
};

// Main export
const App = () => {
  return <TaskAssigned assignedTasks={sampleTasks} />;
};

export default App;
