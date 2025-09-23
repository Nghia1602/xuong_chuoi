import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "01/09/2025",
    uv: 4000,
    // pv: 2400,
    amt: 2400,
  },
  {
    name: "02/09/2025",
    uv: 3000,
    // pv: 1398,
    amt: 2210,
  },
  {
    name: "03/09/2025",
    uv: 2000,
    // pv: 9800,
    amt: 2290,
  },
  {
    name: "04/09/2025",
    uv: 2780,
    // pv: 3908,
    amt: 2000,
  },
  {
    name: "05/09/2025",
    uv: 1890,
    // pv: 4800,
    amt: 2181,
  },
  {
    name: "06/09/2025",
    uv: 2390,
    // pv: 3800,
    amt: 2500,
  },
  {
    name: "07/09/2025",
    uv: 3490,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "08/09/2025",
    uv: 1890,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "09/09/2025",
    uv: 2490,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "10/09/2025",
    uv: 3090,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "11/09/2025",
    uv: 2890,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "12/09/2025",
    uv: 2590,
    // pv: 4300,
    amt: 2100,
  },
  

];

export default function BananaBunchMassStatisticsChart() {
  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <div style={{ minWidth: "1000px",  }}>
    <ResponsiveContainer width="100%" height={260}>
      <LineChart
        width={500}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 40,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          payload={[
            { value: "Khối lượng (tấn)", type: "line", color: "#53b5ceff" },
          ]}
        />
        {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
        <Line type="monotone" dataKey="uv" stroke="#53b5ceff" />
      </LineChart>
    </ResponsiveContainer>
    </div>
    </div>
  );
}
