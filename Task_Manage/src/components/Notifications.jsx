import { useState, useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

const Notifications = ({ initialNotifications }) => {
  const [notifications, setNotifications] = useState(() => {
    // Retrieve notifications from localStorage if they exist
    const savedNotifications = localStorage.getItem("notifications");
    return savedNotifications
      ? JSON.parse(savedNotifications)
      : initialNotifications;
  });

  const [scope, animate] = useAnimate();

  useEffect(() => {
    // Store notifications in localStorage whenever they change
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const removeAllNotifications = () => {
    // Animate the exit of all notifications
    animate("li", { opacity: 0, x: "100%" }, { delay: stagger(0.1) });

    // Set a timeout to clear the notifications state after the animations
    setTimeout(() => {
      setNotifications([]); // Clear notifications after animations
    }, 1000); // Match the delay of the stagger (1 second)
  };

  const removeNotification = (indexToRemove) => {
    setNotifications((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md rounded-lg p-8">
      <h2 className="text-white text-xl font-semibold mb-4">Notifications</h2>
      <button
        onClick={removeAllNotifications}
        className="mb-4 p-2 bg-red-500 text-white rounded"
      >
        Clear All Notifications
      </button>
      <ul className="space-y-2" ref={scope}>
        {notifications.map((notification, index) => (
          <motion.li
            key={index}
            className={`flex items-start p-4 rounded-md shadow-sm transition-transform duration-300 ease-in-out transform hover:scale-105 ${
              notification.type === "task" ? "bg-green-100" : "bg-yellow-100"
            } hover:bg-opacity-80`}
            initial={{ opacity: 0, x: "100%" }} // Start hidden and off-screen
            animate={{ opacity: 1, x: "0%" }} // Animate to visible position
            exit={{ opacity: 0, x: "100%" }} // Animate exit
          >
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                notification.type === "task" ? "bg-green-500" : "bg-yellow-500"
              }`}
            ></div>
            <div className="flex-1">
              <h3 className="text-gray-800 font-semibold">{notification.title}</h3>
              <p className="text-gray-800">{notification.message}</p>
            </div>
            <button
              onClick={() => removeNotification(index)}
              className="ml-4 text-gray-600 hover:text-gray-900"
              aria-label="Close notification"
            >
              ✕
            </button>
          </motion.li>
        ))}
        {notifications.length === 0 && (
          <p className="text-gray-300 italic">No notifications.</p>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
