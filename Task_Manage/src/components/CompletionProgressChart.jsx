import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data structure
const data = [
  { date: "2024-10-20", completion: 30, dueDate: 100 },
  { date: "2024-10-21", completion: 45, dueDate: 100 },
  { date: "2024-10-22", completion: 55, dueDate: 100 },
  { date: "2024-10-23", completion: 65, dueDate: 100 },
  { date: "2024-10-24", completion: 80, dueDate: 100 },
  { date: "2024-10-25", completion: 90, dueDate: 100 },
];

const CompletionProgressChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="completion"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="dueDate" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CompletionProgressChart;
