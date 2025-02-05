import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const mockData = {
  monthlyMetrics: [
    {
      month: "Jan",
      carbonEmissions: 122.4,
      energySavings: 40.2,
      airQualityIndex: 45,
    },
    {
      month: "Feb",
      carbonEmissions: 118.6,
      energySavings: 42.5,
      airQualityIndex: 48,
    },
    {
      month: "Mar",
      carbonEmissions: 115.3,
      energySavings: 38.9,
      airQualityIndex: 43,
    },
    {
      month: "Apr",
      carbonEmissions: 120.1,
      energySavings: 36.7,
      airQualityIndex: 41,
    },
    {
      month: "May",
      carbonEmissions: 110.5,
      energySavings: 50.3,
      airQualityIndex: 39,
    },
    {
      month: "Jun",
      carbonEmissions: 105.7,
      energySavings: 53.2,
      airQualityIndex: 35,
    },
    {
      month: "Jul",
      carbonEmissions: 112.9,
      energySavings: 44.1,
      airQualityIndex: 37,
    },
  ],
};

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mockData.monthlyMetrics);
  }, []);

  const labels = data.map((entry) => entry.month);

  const carbonData = data.map((entry) => entry.carbonEmissions);
  const energyData = data.map((entry) => entry.energySavings);
  const airQualityData = data.map((entry) => entry.airQualityIndex);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Carbon Emissions",
        data: carbonData,
        backgroundColor: "#FF5733",
        borderColor: "#FF5733",
        borderWidth: 2,
        barThickness: 10,
      },
      {
        label: "Energy Savings",
        data: energyData,
        backgroundColor: "#33FF57",
        borderColor: "#33FF57",
        borderWidth: 2,
        barThickness: 10,
      },
      {
        label: "Air Quality Index",
        data: airQualityData,
        backgroundColor: "#3357FF",
        borderColor: "#3357FF",
        borderWidth: 2,
        barThickness: 10,
      },
    ],
  };

  const pieChartData = {
    labels: data.map((entry) => entry.month), 
    datasets: [
      {
        label: "Carbon Emissions",
        data: carbonData,
        backgroundColor: "#FF5733",
        borderColor: "#FF5733",
        borderWidth: 2,
      },
      {
        label: "Energy Savings",
        data: energyData,
        backgroundColor: "#33FF57",
        borderColor: "#33FF57",
        borderWidth: 2,
      },
      {
        label: "Air Quality Index",
        data: airQualityData,
        backgroundColor: "#3357FF",
        borderColor: "#3357FF",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2 text-center">
            Environmental Metrics Comparison (Bar Chart)
          </h2>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              indexAxis: "x",
              barPercentage: 0.8,
              categoryPercentage: 0.5,
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Month",
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Value",
                  },
                },
              },
            }}
            height={250} 
          />
        </div>

        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2 text-center">
            Environmental Metrics Comparison (Pie Chart)
          </h2>
          <Pie
            data={pieChartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                tooltip: {
                  callbacks: {
                    label: function (tooltipItem) {
                      return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(
                        2
                      )}`;
                    },
                  },
                },
              },
            }}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
