import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard"; // Corrected import
import TaskManager from "./components/TaskManager";


import Sidebar from "./components/Sidebar"; // Correct this if necessary
import ProfilePage from "./ProfilePage";

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit" element={<TaskManager />} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
