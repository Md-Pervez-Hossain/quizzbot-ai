"use client"
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const labels = Array.from({ length: daysInMonth }, (_, index) => {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), index + 1);
      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      const dayOfMonth = date.toLocaleDateString("en-US", { day: "numeric" });
      return `${day}, ${dayOfMonth}`;
    });

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Daily words used",
          data: [0, 300, 700, 1300, 500],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: " Words used this month",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Date",
          },
        },
        y: {
          title: {
            display: true,
            text: "Words",
          },
          ticks: {
            stepSize: 1000,
            callback: (value) => `${value}`,
          },
        },
      },
    });
  }, []);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Line data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
