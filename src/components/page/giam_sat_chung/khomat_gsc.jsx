import React from "react";
import DonutChart_khomat_gsc from "./donutchart_khomat_gsc";
const Khomat_gsc = (props) => {
  const data1 = [
    { name: "Nhật Bản", value: 1158 },
    { name: "Trung Quốc", value: 342 },
  ];

  const data2 = [
    { name: "Nhật Bản", value: 760 },
    { name: "Trung Quốc", value: 230 },
  ];

  const data3 = [
    { name: "Nhật Bản", value: 833 },
    { name: "Trung Quốc", value: 167 },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "13.4%", //35
          background: "#14141411",
          borderRadius: "5px 5px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontFamily: "'Be Vietnam Pro', sans-serif",
        }}
      >
        Khu mát
      </div>
      <div
        style={{
          height: "86.6%", //226px
          width: "100%", //1888px
          display: "flex",
          alignItems: "center",
          //   justifyContent:"space-between",
          fontSize: 14,
          fontFamily: "'Be Vietnam Pro', sans-serif",
          // gap: 5,
        }}
      >
        <div
          style={{
            width: "33%", //623px
            height: "96.46%", //218px
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid #c6c6c670",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "94.7%", //590
              height: "12%", //26
              borderBottom: "1px solid #c6c6c670",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Thống kê số thùng chuối trong kho (Thùng)
          </div>
          <div
            style={{
              width: "94.7%", //590
              height: "88%", //192
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DonutChart_khomat_gsc data={data1} />
          </div>
        </div>
        {/* ----------------------Nhật Bản ----------------- */}

        {/* ----------------------Nhật Bản ----------------- */}
        <div
          style={{
            width: "33%", //623px
            height: "96.46%", //218px
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid #c6c6c670",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "94.7%", //590
              height: "12%", //26
              borderBottom: "1px solid #c6c6c670",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Thống kê số thùng chuối trong kho (Thùng)
          </div>
          <div
            style={{
              width: "94.7%", //590
              height: "88%", //192
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DonutChart_khomat_gsc data={data2} />
          </div>
        </div>
        {/* ----------------------Trung Quốc ----------------- */}

        {/* ----------------------Trung Quốc ----------------- */}
        <div
          style={{
            width: "33%", //623px
            height: "96.46%", //218px
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid #c6c6c670",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "94.7%", //590
              height: "12%", //26
              borderBottom: "1px solid #c6c6c670",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Thống kê số thùng chuối trong kho (Thùng)
          </div>
          <div
            style={{
              width: "94.7%", //590
              height: "88%", //192
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DonutChart_khomat_gsc data={data3} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Khomat_gsc;
