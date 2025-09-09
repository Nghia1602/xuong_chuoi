import React,{useState} from "react";
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
import { toPadding } from "chart.js/helpers";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const FarmHarvestStatisticsChart = () => {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Buồng đầu vào (buồng)",
        backgroundColor: "#FFEA83",
        data: [310, 337, 345, 302, 348, 322, 300, 379, 349, 381, 424, 313],
        borderRadius: 4,
        barThickness: 20,
        order:2
      },
      {
        type: "bar",
        label: "Buồng đạt (buồng)",
        backgroundColor: "#A2D576",
        data: [304, 293, 326, 295, 345, 283, 275, 352, 320, 358, 390, 284],
        borderRadius: 4,
        barThickness: 20,
         order:2
      },
      {
        type: "line",
        label: "Khối lượng (tấn)",
        borderColor: "#6A8FD8",
        backgroundColor: "#6A8FD8",
        data: [10.7, 9.8, 11.4, 9.7, 12.5, 9.8, 9.3, 12.5, 10.5, 13, 13.1, 9.9],
        tension: 0,
        yAxisID: "y1",
        order:1,
      },
    ],
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
        grid:{
          display:false, 
        }
      },
      y: {
        type: "linear",
        position: "left",
        ticks:{
          display:true,
          
          
        },
        title: {
          display: true,
          text: "Số buồng",
          
        },
        grid:{drawOnChartArea:true,
        }
      },
      y1: {
        type: "linear",
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Khối lượng (tấn)",
        },
        min: 9,
        max: 14,
      },
    },
    plugins: {
      legend: {
        position: "top",
        // align:"end",
        
      },
    },
  };

//   return (
//     <div className="w-full h-full  flex justify-center ">
//       <Chart  data={data} className="text-be-vietnam-pro text-[0.875rem] w-full" options={options} />
//     </div>
//   );
// };

return (
  <div className="w-full h-full overflow-x-auto">
    <div className="min-w-[1224px] h-full">
      <Chart
        data={data}
        className={`text-be-vietnam-pro text-[0.875rem] w-full h-full`}
        options={options}
      />
    </div>
  </div>
);
};
export default FarmHarvestStatisticsChart;
