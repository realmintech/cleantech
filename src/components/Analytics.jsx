import React, { useCallback, useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import mockData from "../data/mockData";

Chart.register(...registerables);

const Analytics = () => {
  const [data, setData] = useState(mockData.monthlyMetrics);
  const [startDate, setStartDate] = useState("Jan");
  const [endDate, setEndDate] = useState("Dec");
  const [selectedMetric, setSelectedMetric] = useState("none");

  const filterData = useCallback(() => {
    const startIdx = mockData.monthlyMetrics.findIndex(
      (item) => item.month === startDate
    );
    const endIdx = mockData.monthlyMetrics.findIndex(
      (item) => item.month === endDate
    );

    if (startIdx !== -1 && endIdx !== -1 && startIdx <= endIdx) {
      setData(mockData.monthlyMetrics.slice(startIdx, endIdx + 1));
    }
  }, [startDate, endDate]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  const labels = data.map((entry) => entry.month);
  const colors = ["#FF6B6B", "#4ECDC4", "#FFD166"];

  const datasets = [];

  if (selectedMetric === "none") {
    datasets.push(
      {
        label: "Carbon Emissions",
        data: data.map((entry) => entry.carbonEmissions),
        backgroundColor: colors[0],
        borderColor: "#fff",
        borderWidth: 3,
        borderRadius: 5,
      },
      {
        label: "Energy Savings",
        data: data.map((entry) => entry.energySavings),
        backgroundColor: colors[1],
        borderColor: "#fff",
        borderWidth: 3,
        borderRadius: 5,
      },
      {
        label: "Air Quality Index",
        data: data.map((entry) => entry.airQualityIndex),
        backgroundColor: colors[2],
        borderColor: "#fff",
        borderWidth: 3,
        borderRadius: 5,
      }
    );
  } else {
    datasets.push({
      label: selectedMetric.replace(/([A-Z])/g, " $1").trim(),
      data: data.map((entry) => entry[selectedMetric]),
      backgroundColor:
        selectedMetric === "carbonEmissions"
          ? colors[0]
          : selectedMetric === "energySavings"
          ? colors[1]
          : colors[2],
      borderColor: "#fff",
      borderWidth: 3,
      borderRadius: 5,
    });
  }

  const barChartData = {
    labels,
    datasets,
  };

  const totalCarbon = data.reduce(
    (sum, entry) => sum + entry.carbonEmissions,
    0
  );
  const totalEnergy = data.reduce((sum, entry) => sum + entry.energySavings, 0);
  const totalAirQuality = data.reduce(
    (sum, entry) => sum + entry.airQualityIndex,
    0
  );

  const pieChartData =
    selectedMetric === "none"
      ? {
          labels: ["Carbon Emissions", "Energy Savings", "Air Quality Index"],
          datasets: [
            {
              label: "Total Comparison",
              data: [totalCarbon, totalEnergy, totalAirQuality],
              backgroundColor: colors,
              borderColor: "#fff",
              borderWidth: 3,
              hoverOffset: 10,
            },
          ],
        }
      : {
          labels,
          datasets: [
            {
              label: selectedMetric.replace(/([A-Z])/g, " $1").trim(),
              data: data.map((entry) => entry[selectedMetric]),
              backgroundColor:
                colors[
                  selectedMetric === "carbonEmissions"
                    ? 0
                    : selectedMetric === "energySavings"
                    ? 1
                    : 2
                ],
              borderColor: "#fff",
              borderWidth: 3,
              hoverOffset: 10,
            },
          ],
        };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center  text-[#046861] dark:text-[#046861] ">
        Analytics Dashboard
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        <label className="text-lg">
          Start Month:
          <select
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="ml-2 p-2 border rounded shadow-md"
          >
            {mockData.monthlyMetrics.map((entry) => (
              <option key={entry.month} value={entry.month}>
                {entry.month}
              </option>
            ))}
          </select>
        </label>

        <label className="text-lg">
          End Month:
          <select
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="ml-2 p-2 border rounded shadow-md"
          >
            {mockData.monthlyMetrics.map((entry) => (
              <option key={entry.month} value={entry.month}>
                {entry.month}
              </option>
            ))}
          </select>
        </label>

        <label className="text-lg">
          Select Metric:
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="ml-2 p-2 border rounded shadow-md"
          >
            <option value="none">None (Show All)</option>
            <option value="carbonEmissions">Carbon Emissions</option>
            <option value="energySavings">Energy Savings</option>
            <option value="airQualityIndex">Air Quality Index</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2 text-center">Bar Chart</h2>
          <Bar
            data={barChartData}
            options={{ responsive: true, scales: { y: { beginAtZero: true } } }}
            height={250}
          />
        </div>

        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2 text-center">Pie Chart</h2>
          <Pie
            data={pieChartData}
            options={{ responsive: true }}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
