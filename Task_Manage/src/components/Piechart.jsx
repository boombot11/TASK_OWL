import React, { useState, useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register necessary components for PieChart
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ completed = 1, pending = 1, inProgress = 1 }) => {
  const [chartSize, setChartSize] = useState({ width: "100%", height: "100%" });

  useEffect(() => {
    // Define a function to set the chart size based on screen width
    const updateChartSize = () => {
      if (window.innerWidth >= 1000) {
        setChartSize({ width: "600px", height: "400px" });
      } else {
        setChartSize({ width: "90%", height: "300px" });
      }
    };

    // Initial size setting
    updateChartSize();

    // Add a resize event listener
    window.addEventListener("resize", updateChartSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateChartSize);
  }, []);

  // Chart data
  const data = {
    labels: ["Completed", "Pending", "In Progress"],
    datasets: [
      {
        label: "Task Status",
        data: [completed, pending, inProgress],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: "rgba(255,255,255,0.8)",
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        height: chartSize.height,
        width: chartSize.width,
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
