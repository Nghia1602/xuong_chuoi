import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import React from "react";
const data = [{ Kehoach: 100, Thucte: 98.26 }];

const Barchart_thongke = (props) => {
  return (
    <div
      style={{
        width: "95%",
        height: "20.16vh",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 0, left: -10, bottom: 10 }}
          // paddingRight={20}
        >
          <XAxis
            type="number"
            domain={[0, 150]}
            tickLine={false}
            tick={false}
          />
          <YAxis type="category" dataKey="name" tickLine={false} />
          <Tooltip />
          <Legend
          // wrapperStyle={{marginLeft:"20px"}}
            align="right" // Canh phải
            verticalAlign="bottom"
            formatter={(value) => {
              if (value === "Kehoach") return "Kế hoạch";
              if (value === "Thucte") return "Thực tế";
              return value;
            }}
          />
          <Bar
            dataKey="Kehoach"
            fill="#28537A"
            barSize={20}
            radius={[0, 4, 4, 0]}
          >
            <LabelList
              dataKey="Kehoach"
              fill="#ffff"
              position="outsideRight"
              offset={30}
              formatter={(value) => `${value}%`} // Hiển thị giá trị với dấu "%"
            />
          </Bar>
          <Bar
            dataKey="Thucte"
            fill="#5A9CCA"
            barSize={20}
            radius={[0, 4, 4, 0]}
          >
            <LabelList
              dataKey="Thucte"
              fill="#ffff"
              position="outsideRight"
              offset={100}
              formatter={(value) => `${value}%`} // Hiển thị giá trị với dấu "%"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart_thongke;
