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



export default function BananaBunchQuanlityStatisticsChart({data}) {
  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <div style={{ minWidth: "1000px",  }}>
        <ResponsiveContainer width="100%" height={400}>
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
            <Line type="monotone" dataKey="buongvao" stroke="#d4cb73ff" strokeWidth={2}/>
            <Line type="monotone" dataKey="buongdat" stroke="#48c748ff" strokeWidth={2}/>
            <Line type="monotone" dataKey="buongloi" stroke="#ff0000" strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
