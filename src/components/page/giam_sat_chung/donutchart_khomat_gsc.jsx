import React from "react";
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

const DonutChart_khomat_gsc = ({data}) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div
      style={{
        width: "100%",
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ResponsiveContainer width={400} height={185}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={1}
            dataKey="value"
            nameKey="name"
            labelLine={true}
            label={({ value })=> (value)}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}

            {/* Hiển thị giá trị tổng ở giữa donut */}
            <Label
              value={total}
              position="center"
              style={{ fill: "#333", fontSize: 16, fontWeight: "bold" }}
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
