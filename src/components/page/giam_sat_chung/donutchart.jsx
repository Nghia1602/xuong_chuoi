import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Label } from "recharts";

const COLORS = ["#4FA336", "#d9d9d9"]; // Xanh lá: đạt, Xám: còn lại

const DonutChart = ({ data }) => {
  if (!data || data.length < 2) return null;

  const dauVao = data[0].value; // Buồng đầu vào
  const dat = data[1].value;    // Buồng đạt
  const khongDat = Math.max(dauVao - dat, 0); // Phần còn lại

  const chartData = [
    { name: "Buồng đạt", value: dat },
    { name: "Còn lại", value: khongDat },
  ];

  const total = dauVao > 0 ? dauVao : 1;
  const percentage = ((dat / total) * 100).toFixed(1);

  return (
    <div style={{ width: "100%", height: "192px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Label
              value={`${percentage}%`}
              position="center"
              fill="#4FA336"
              fontSize={18}
              fontWeight="bold"
            />
          </Pie>
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            payload={[
              { value: "Buồng đạt", type: "circle", color: "#4FA336" },
              { value: "Còn lại", type: "circle", color: "#d9d9d9" },
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
