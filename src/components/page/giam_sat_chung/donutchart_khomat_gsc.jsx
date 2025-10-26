import React, { useEffect, useRef, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const COLORS = ["#BB0E3D", "#FFD441"];

const DonutChart_khomat_gsc = ({ data }) => {
  // const containerRef = useRef(null);
  // const [radius, setRadius] = useState({ inner: 60, outer: 80 }); // Giá trị mặc định

  const total = data.reduce((acc, item) => acc + item.value, 0);

  // useEffect(() => {
  //   const updateRadius = () => {
  //     if (containerRef.current) {
  //       const { width, height } = containerRef.current.getBoundingClientRect();
  //       const minSize = Math.min(width, height);
  //       setRadius({
  //         inner: minSize * 0.3,
  //         outer: minSize * 0.4,
  //       });
  //     }
  //   };

  //   updateRadius();
  //   window.addEventListener("resize", updateRadius);
  //   return () => window.removeEventListener("resize", updateRadius);
  // }, []);

  return (
    <div
      // ref={containerRef}
      style={{
        width: "100%",
        height: 174,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ResponsiveContainer width="100%" height={174}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={1}
            dataKey="value"
            nameKey="name"
            labelLine={true}
            label={({ value }) => value}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
                style={{ fontWeight: "bold" }}
              />
            ))}

            <Label
              value={total}
              position="center"
              style={{
                fill: "#333",
                fontSize: 14,
                fontWeight: "bold",
              }}
            />
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value}`, name]}
            labelStyle={{ color: "#333" }}
          />
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
            wrapperStyle={{
              marginTop: 10,
            }}
            formatter={(value) => {
              if (value === "Nhật Bản") return "Nhật Bản";
              if (value === "Trung Quốc") return "Trung Quốc";
              return value;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart_khomat_gsc;
