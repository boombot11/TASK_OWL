// RecentActivityFeed.jsx
import React from "react";

const RecentActivityFeed = ({ activities }) => {
  return (
    <div className="  rounded-lg p-4">
      {/* <h2 className="text-white text-xl font-semibold mb-4">Recent Activity</h2> */}
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li
            key={index}
            className={`flex items-start p-2 rounded-md shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-80 bg-white hover:bg-gray-300`}
          >
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                activity.type === "update" ? "bg-blue-500" : "bg-red-500"
              }`}
            ></div>
            <p className="text-gray-800">{activity.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityFeed;
