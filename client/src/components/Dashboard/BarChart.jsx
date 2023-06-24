"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        // {
        //   label: "Sales $",
        //   data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
        //   borderColor: "rgb(53, 162, 235)",
        //   backgroundColor: "rgb(53, 162, 235, 0.4",
        // },
        {
          label: "Not Saled $",
          data: [18100, 20001, 23195, 19940, 17180, 19845, 22485],
          borderColor: "rgba(252, 73, 95, 1) to rgba(255, 195, 113, 1)",
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
          text: "Daily Words Used",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
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
