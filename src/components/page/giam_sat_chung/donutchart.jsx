// import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Buồng đạt", value: 91.5 },
//   { name: "Còn lại", value: 8.5 },
// ];

// const COLORS = ["#2ecc71", "#d9d9d9"];

// const DonutChart = () => {
//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       {" "}
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart >
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             innerRadius="2.6vw"
//             outerRadius="3.6vw"
//             paddingAngle="0.16vw"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//           <text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fill="#2ecc71"
//             fontSize={16}
//           >
//             91.5%
//           </text>
//           <Legend
//             payload={[
//               {
//                 value: "Buồng đạt",
//                 type: "square",
//                 color: "#2ecc71",
//               },
//             ]}
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default DonutChart;

import React, { useState, useEffect, useRef } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  { name: "Buồng đạt", value: 91.5 },
  { name: "Còn lại", value: 8.5 },
];
const COLORS = ["#2ecc71", "#d9d9d9"];

const DonutChart = () => {
  // const containerRef = useRef(null);
  // const [radius, setRadius] = useState({ inner: 0, outer: 0 });

  // useEffect(() => {
  //   function updateRadius() {
  //     if (containerRef.current) {
  //       const { width, height } = containerRef.current.getBoundingClientRect();
  //       // Lấy min chiều rộng và chiều cao để giữ hình tròn
  //       const minSize = Math.min(width, height);
  //       // Đặt bán kính outer khoảng 45% của minSize, inner khoảng 30%
  //       setRadius({
  //         outer: minSize * 0.4,
  //         inner: minSize * 0.3,
  //       });
  //     }
  //   }
  //   updateRadius();
  //   window.addEventListener("resize", updateRadius);
  //   return () => window.removeEventListener("resize", updateRadius);
  // }, []);
  // const renderLegend = (props) => {
  //   const { payload } = props;
  //   return (
  //     <ul
  //       style={{
  //         listStyle: "none",
  //         margin: 0,
  //         padding: 0,
  //         fontSize: 14,
  //         color: "#333",
  //       }}
  //     >
  //       {payload.map((entry, index) => (
  //         <li
  //           key={`item-${index}`}
  //           style={{
  //             color: entry.color,
  //             marginBottom: 4,
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <div
  //             style={{
  //               width: 14,
  //               height: 14,
  //               backgroundColor: entry.color,
  //               marginRight: 8,
  //               borderRadius: entry.type === "square" ? 2 : "50%",
  //             }}
  //           ></div>
  //           {entry.value}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  return (
    <div  style={{ width: "100%", height: "192px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value={`${data[0].value}%`}
              position="center"
              fill="#2ecc71"
              fontSize={14}
            />
          </Pie>
          <Legend
            // content={renderLegend}
            payload={[
              {
                value: "Buồng đạt",
                type: "square",
                color: "#2ecc71",
              },
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
