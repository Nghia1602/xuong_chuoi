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
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        width: "100%",
        height: "100%",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        fontSize: 14,
      }}
    >
      <div style={{ width: "80%" }}> 
        <ResponsiveContainer width={340} height={192} >
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 160, left: -60, bottom: 20 }} 
            paddingRight={20}
            
          >
            <XAxis type="number" domain={[0, 150]} tickLine={false} tick={false}/>
            <YAxis type="category" dataKey="name" tickLine={false}/>
            <Tooltip />
            <Legend align="right"           // Canh phải
              formatter={(value) => {
                if (value === "Kehoach") return "Kế hoạch";
                if (value === "Thucte") return "Thực tế";
                return value;
                
              }}
            />
            <Bar dataKey="Kehoach" fill="#28537A" barSize={20} radius={[0, 4, 4, 0]}  >
                <LabelList
                dataKey="Kehoach"
                fill="#ffff"
                position="outsideRight"
                offset={30}
                formatter={(value) => `${value}%`} // Hiển thị giá trị với dấu "%"
              />
            </Bar >
            <Bar dataKey="Thucte" fill="#5A9CCA" barSize={20} radius={[0, 4, 4, 0]}>
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
    </div>
  );
};

export default Barchart_thongke;
