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
    pv: 2400,
    amt: 2400,
  },
  {
    name: "02/09/2025",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "03/09/2025",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "04/09/2025",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "05/09/2025",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "06/09/2025",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "07/09/2025",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "08/09/2025",
    uv: 2490,
    pv: 3400,
    amt: 2800,
  },
  {
    name: "09/09/2025",
    uv: 4390,
    pv: 3500,
    amt: 2700,
  },
  {
    name: "10/09/2025",
    uv: 2890,
    pv: 3400,
    amt: 2100,
  },
  {
    name: "11/09/2025",
    uv: 3290,
    pv: 2900,
    amt: 2530,
  },
  {
    name: "12/09/2025",
    uv: 3820,
    pv: 4210,
    amt: 2400,
  },
];

export default function BananaBunchQuanlityStatisticsChart() {
  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <div style={{ minWidth: "1000px",  }}>
        <ResponsiveContainer width="100%" height={430}>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 40,
              left: 10,
              bottom: 10, // Tăng khoảng cách để Legend không bị đè
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              layout="horizontal"
              verticalAlign="top"
              align="right"
              payload={[
                { value: "Buồng đầu vào", type: "line", color: "#d4cb73ff" },
                { value: "Buồng đạt", type: "line", color: "#48c748ff" },
                { value: "Buồng lỗi", type: "line", color: "#ff0000" },
              ]}
            />
            <Line type="monotone" dataKey="uv" stroke="#d4cb73ff" />
            <Line type="monotone" dataKey="pv" stroke="#48c748ff" />
            <Line type="monotone" dataKey="amt" stroke="#ff0000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
