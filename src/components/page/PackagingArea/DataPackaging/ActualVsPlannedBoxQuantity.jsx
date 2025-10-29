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



const ActualVsPlannedBoxQuantity = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div style={{ minWidth: "1200px", height: "430px" }}>
        <ResponsiveContainer width="100%" height="100%">
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
            <CartesianGrid  vertical={false} />
            <XAxis dataKey="name" tickLine={false}/>
            <YAxis tickLine={false} />
            <Tooltip />
            <Legend
              layout="horizontal"
              verticalAlign="top"
              align="right"
              wrapperStyle={{ paddingLeft: 20, paddingRight: 20 }}
              payload={[
                { value: "Buồng đầu vào", type: "rect", color: "#d4cb73ff" },
                { value: "Buồng đạt", type: "rect", color: "#48c748ff" },
                { value: "Buồng lỗi", type: "rect", color: "#ff0000" },
              ]}
            />
            <Bar
              dataKey="pv"
              fill="#d4cb73ff"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              barSize={30}
              radius={[5, 5, 0, 0]}
            />
            <Bar
              dataKey="uv"
              fill="#48c748ff"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
              barSize={30}
              radius={[5, 5, 0, 0]}
            />
            <Bar
              dataKey="amt"
              fill="#ff0000"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
              barSize={30}
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActualVsPlannedBoxQuantity;
