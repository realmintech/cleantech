import React, { useCallback, useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import mockData from "../data/mockData";

Chart.register(...registerables);

const Analytics = () => {
  const [data, setData] = useState(mockData.monthlyMetrics);
  const [startDate, setStartDate] = useState("Jan");
  const [endDate, setEndDate] = useState("Dec");
  const [selectedMetric, setSelectedMetric] = useState("carbonEmissions");

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
  const energyData = data.map((entry) => entry.energySavings);
  const airQualityData = data.map((entry) => entry.airQualityIndex);
  const metricData = data.map((entry) => entry[selectedMetric]);

  const chartData = {
    labels,
    datasets: [
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
      {
        label: selectedMetric.replace(/([A-Z])/g, " $1").trim(),
        data: metricData,
        backgroundColor:
          selectedMetric === "carbonEmissions"
            ? "#FF5733"
            : selectedMetric === "energySavings"
            ? "#33FF57"
            : "#3357FF",
        borderColor: "#000",
        borderWidth: 2,
        barThickness: 10,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Analytics Dashboard
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        <label className="text-lg">
          Start Month:
          <select
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="ml-2 p-2 border rounded"
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
            className="ml-2 p-2 border rounded"
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
            className="ml-2 p-2 border rounded"
          >
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
            data={chartData}
            options={{ responsive: true, scales: { y: { beginAtZero: true } } }}
            height={250}
          />
        </div>

        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2 text-center">Pie Chart</h2>
          <Pie data={chartData} options={{ responsive: true }} height={250} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
