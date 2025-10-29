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


export default function BananaBunchMassStatisticsChart({data}) {
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
          right: 50,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid  vertical={false}/>
        <XAxis dataKey="name" tickLine={false}/>
        <YAxis tickLine={false}/>
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          payload={[
            { value: "Khối lượng (tấn)", type: "line", color: "#53b5ceff" },
          ]}
        />
        {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
        <Line type="monotone" dataKey="khoiluong" stroke="#53b5ceff" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
    </div>
    </div>
  );
}
