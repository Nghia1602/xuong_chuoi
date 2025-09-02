import React from "react";
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
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        fontSize: 14,
        color:"#0000"
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          barSize={35}
        >
          <CartesianGrid
            
            vertical={false}
            horizontal={true}
          />
          <XAxis dataKey="name" tick={{ dy: 10 }} tickLine={false} />
          <YAxis
            domain={[280, 360]}
            tick={{ fontFamily: "Be Vietnam Pro" }}
            label={{
              value: "Nông trường",
              position: "insideBottomLeft",
              dy: 30,
              dx: 20,
            }}
            tickLine={false}
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 14 }}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#f3c26b">
            <LabelList dataKey="value" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HarvestBarChart;
