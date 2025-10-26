import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Empty } from "antd";
import { Label } from "recharts";
ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

// Giả sử bạn import JSON vào (hoặc fetch nếu file ngoài)

const FarmHarvestStatisticsChart = ({ data }) => {
  console.log("Data prop:", data);
  if (!data || !data.table)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Empty description="No data" />
      </div>
    );
  const labels = data.table.headers;
  console.log("Chart Data:", data);
  // Chuyển row thành dataset
  const wantedRows = ["Buồng đầu vào", "Buồng đạt", "Khối lượng (tấn)"];
  const colorMap = {
    "Buồng đầu vào": "#FCD617", // xanh lam
    "Buồng đạt": "#7DC241", // xanh lá
    "Khối lượng (tấn)": "#6A8FD8", // tím xanh
  };
  const filteredRows = data.table.rows.filter((row) =>
    wantedRows.includes(row.name)
  );
  const datasets = filteredRows.map((row) => {
    const color = colorMap[row.name] || "#000000";
    const isLine = row.name === "Khối lượng (tấn)";
    // Quyết định kiểu dataset dựa vào name (ví dụ "Khối lượng" là line, còn lại bar)

    const lineBorderWidth = 2; // ví dụ độ dày đường line
    const barBorderWidth = 0.3; // độ dày viền bar
    // Tạo datasets theo kiểu bạn muốn
    return {
      type: isLine ? "line" : "bar",
      label: row.name,
      data: row.value,
      backgroundColor: isLine ? undefined : color,
      borderColor: isLine ? color : undefined,
      borderWidth: isLine ? lineBorderWidth : barBorderWidth,
      tension: isLine ? 0 : undefined,
      yAxisID: isLine ? "y1" : "y",
      borderRadius: isLine ? 0 : 4,
      barThickness: isLine ? undefined : 20,
      order: isLine ? 1 : 2,
    };
  });
  const chartData = {
    labels,
    datasets,
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    scales: {
      x: {
        grid: { display: false },
        // title: {
        //   display: true,
        //   // text: "Nông trường",
        //   align: "start",
        // //  padding:{ top: 0, bottom: 10 },
        //   color: "#333",
        //   font: {
        //     size: 14,
        //     weight: "bold",
        //   },
        // },
      },
      y: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Số buồng",
        },
        grid: { drawOnChartArea: true },
      },
      y1: {
        type: "linear",
        position: "right",
        grid: { drawOnChartArea: false },
        title: { display: true, text: "Khối lượng (tấn)" },
        min: 9,
        max: 14,
      },
    },
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <div className="w-full h-[500px] overflow-x-auto">
      <div className="min-w-[1224px] h-full">
        <Chart
          data={chartData}
          className="text-be-vietnam-pro text-[0.875rem] w-full h-full "
          options={options}
        />
      </div>
    </div>
  );
};

export default FarmHarvestStatisticsChart;
