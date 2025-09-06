// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LabelList,
// } from "recharts";

// const data = [
//   { name: "1", value: 310 },
//   { name: "2", value: 300 },
//   { name: "3", value: 315 },
//   { name: "4", value: 313 },
//   { name: "5", value: 304 },
//   { name: "6", value: 325 },
//   { name: "7", value: 306 },
// ];

// const HarvestBarChart = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         fontFamily: "'Be Vietnam Pro', sans-serif",
//         fontSize: 14,
//         color: "#0000",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <ResponsiveContainer width="100%" height="100%" display="flex">
//         <BarChart
//           data={data}
//           margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//           barSize={35}
//         >
//           <CartesianGrid vertical={false} horizontal={true} />
//           <XAxis dataKey="name" tick={{ dy: 10 }} tickLine={false} />
//           <YAxis
//             domain={[280, 360]}
//             tick={{ fontFamily: "Be Vietnam Pro" }}
//             label={{
//               value: "Nông trường",
//               position: "insideBottomLeft",
//               dy: 30,
//               dx: 20,
//             }}
//             tickLine={false}
//             style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 14 }}
//           />
//           <Tooltip />
//           <Bar dataKey="value" fill="#f3c26b">
//             <LabelList dataKey="value" position="top" />
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default HarvestBarChart;
import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { name: "1", value: 310 },
  { name: "2", value: 300 },
  { name: "3", value: 315 },
  { name: "4", value: 313 },
  { name: "5", value: 304 },
  { name: "6", value: 325 },
  { name: "7", value: 306 },
];

const HarvestBarChart = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [barSize, setBarSize] = useState(30);
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        // Tính barSize theo chiều rộng và số cột
        const calculatedBarSize = Math.min(50, width / data.length - 10);
        setBarSize(calculatedBarSize > 10 ? calculatedBarSize : 10);

        // Tính fontSize label theo chiều cao container
        const calculatedFontSize = Math.min(16, height * 0.4);
        setFontSize(calculatedFontSize > 8 ? calculatedFontSize : 8);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "63vw", // bạn tùy chỉnh kích thước container theo ý muốn
        height: "20vh",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        color: "#000",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          barSize={barSize}
        >
          <CartesianGrid vertical={false} horizontal={true} />
          <XAxis dataKey="name" tick={{ dy: 10, fontSize }} tickLine={false} />
          <YAxis
            domain={[280, 360]}
            tick={{ fontFamily: "Be Vietnam Pro", fontSize }}
            label={{
              value: "Nông trường",
              position: "insideBottomLeft",
              dy: 30,
              dx: 20,
              fontSize,
            }}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#f3c26b">
            <LabelList dataKey="value" position="top" style={{ fontSize }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HarvestBarChart;
