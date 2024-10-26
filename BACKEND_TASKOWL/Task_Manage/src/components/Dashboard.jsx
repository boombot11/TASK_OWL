import React, { useState, useEffect } from "react";
// import SearchBar from "./SearchBar";
import ProfileIcon from "./ProfileIcon";
import TaskList from "./Tasklist"; // Import TaskList
import PieChart from "./Piechart"; // Import PieChart
import Notifications from "./Notifications"; // Import Notifications
import RecentActivityFeed from "./RecentActivityFeed"; // Import RecentActivityFeed
import TaskAssigned from "./TaskAssigned"; // Import TaskAssigned
import CompletionProgressChart from "./CompletionProgressChart.jsx";
import StaticText from "./StaticText.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("none");
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [chartView, setChartView] = useState("completion"); // Default to completion progress chart
  const navigate = useNavigate();

  const handleProfileClick = () => {
    window.location.href='/profile'
  };

  const getTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch tasks.");
    }
    return await response.json();
  };

  const formatTask = (task) => {
    const dueDate = task.due_date ? new Date(task.due_date.seconds * 1000) : null;
    const completedDate = task.complete ? new Date(task.complete.seconds * 1000) : null;

    return {
      id: Number(task.id), // Convert id to a number
      title: task.id || "Untitled Task", // Default title if missing
      description: task.description || "No description provided",
      priority: task.priority === "s" ? "Low" : task.priority === "m" ? "Medium" : "High", // Map Firestore priority
      date: dueDate ? `${dueDate.getFullYear()}-${(dueDate.getMonth() + 1).toString().padStart(2, '0')}-${dueDate.getDate().toString().padStart(2, '0')}` : null, // Format date as YYYY-MM-DD
      completed: task.status, // Map status to boolean
    };
  };

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const tasksData = await getTasks();
        const formattedTasks = tasksData.map(formatTask); // Format tasks after fetching
        setTasks(formattedTasks);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("http://localhost:3000/notifications"); // Replace with your actual API
        const data = await response.json();
        const formattedNotifications = data.map((item) => ({
          message: item.message,
          type: item.type,
        }));
        setNotifications(formattedNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  // Filter and sort tasks based on user input
  const filteredTasks = tasks
    .filter(
      (task) =>
        task.title.toLowerCase().includes(filter.toLowerCase()) ||
        task.description.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "priority") {
        return a.priority.localeCompare(b.priority);
      } else if (sort === "date") {
        return new Date(a.date) - new Date(b.date);
      }
      return 0; // no sorting
    });

  const assignedTasks = tasks.filter((task) => !task.completed);

  return (
    <div
      className="flex flex-col p-4 space-y-4"
      style={{
        background: "#c2e59c",
        background: "-webkit-linear-gradient(to right, #64b3f4, #c2e59c)",
        background: "linear-gradient(to right, #64b3f4, #c2e59c)",
      }}
    >
      <div className="flex flex-row gap-3 justify-between">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl bg-none  text-white font-sans  pr-7">Dashboard</h1>
        <h2 onClick={()=>window.location.href='/edit'} className="font-bold bg-none text-3xl text-white font-sans  pr-7">Task Owl</h2>
        <h2 onClick={()=>window.location.href='/edit'} className="font-bold bg-none  text-3xl text-white font-sans pr-7">Task Owl</h2>
     <a style={{borderRadius:"100px",background:'none'}} href="https://wa.me/14155238886?text=join%20topic-shoe" target="_blank">
      <img style={{borderRadius:"100px",background:"none",position:"fixed",bottom:"20px",right:"20px"}} src="./WhatsApp Image 2024-10-26 at 12.32.10 PM.jpeg" width="150px" class="whatsapp_logo" alt="whatsapp_logo"></img>
     </a>
      </div>
      <div  className="flex items-center justify-between">
        <h1 className="font-bold text-3xl text-white font-sans shadow-xl">Settings</h1>
        {/* <SearchBar /> */}
        <ProfileIcon onClick={handleProfileClick} />
      </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 space-y-4">
          <div className="bg-white p-4 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 shadow-md">
            <h2 className="text-xl font-semibold">Recent Activities</h2>
            <RecentActivityFeed activities={[]} /> {/* Pass actual activities */}
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Filter tasks..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full mr-4"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="none">Sort by...</option>
              <option value="priority">Priority</option>
              <option value="date">Date</option>
            </select>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <TaskList tasks={filteredTasks} />
          </div>

          <TaskAssigned assignedTasks={assignedTasks} />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex justify-center space-x-4">
            <button onClick={() => setChartView("completion")} className={`rounded-full w-6 h-6 ${chartView === "completion" ? "bg-blue-500" : "bg-gray-300"}`}></button>
            <button onClick={() => setChartView("pie")} className={`rounded-full w-6 h-6 ${chartView === "pie" ? "bg-green-500" : "bg-gray-300"}`}></button>
            <button onClick={() => setChartView("both")} className={`rounded-full w-6 h-6 ${chartView === "both" ? "bg-purple-500" : "bg-gray-300"}`}></button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Tasks Overview</h2>
            <div className="justify-center flex align-middle">
              {chartView === "completion" && <CompletionProgressChart />}
              {chartView === "pie" && <PieChart tasks={filteredTasks} />}
              {chartView === "both" && (
                <div className="flex-col justify-around">
                  <div className="w-full">
                    <CompletionProgressChart />
                  </div>
                  <div className="w-full">
                    <PieChart tasks={filteredTasks} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <Notifications notifications={notifications} />
          <StaticText />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
