import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3",
    uv: 2000,
    pv: 1980,
    amt: 2290,
  },
  {
    name: "4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
    {
    name: "8",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "9",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "10",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

const ActualBoxQuantityAndTargetQuantity = () => {
  return (
    <div className="w-full overflow-x-auto">
  <div style={{ minWidth: "1200px", height: "464px" }}>
    <ResponsiveContainer width="100%" height={464}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 0,
        }}
        barGap={2} 
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ paddingLeft: 20, paddingRight: 20 }} />
        <Bar
          dataKey="pv"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          barSize={30} radius={[5,5,0,0]}
        />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
          barSize={30} radius={[5,5,0,0]}
        />
        <Bar
          dataKey="amt"
          fill="#b90b53ff"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
          barSize={30} radius={[5,5,0,0]}
        />
      </BarChart>
    </ResponsiveContainer>
    </div>
    </div>
  );
};

export default ActualBoxQuantityAndTargetQuantity;
