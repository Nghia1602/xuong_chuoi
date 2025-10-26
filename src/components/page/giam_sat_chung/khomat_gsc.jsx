import React, { useMemo } from "react";
import DonutChart_khomat_gsc from "./donutchart_khomat_gsc";
const Khomat_gsc = (props) => {
  const data1_1 = [
    { name: "Nhật Bản", value: 1158 },
    { name: "Trung Quốc", value: 342 },
  ];
 const data1_2 = [
    { name: "Nhật Bản", value: 1045 },
    { name: "Trung Quốc", value: 115 },
  ];
  const data2_1 = [
    { name: "Nhật Bản", value: 760 },
    { name: "Trung Quốc", value: 230 },
  ];
  const data2_2 = [
    { name: "Nhật Bản", value: 1070 },
    { name: "Trung Quốc", value: 110 },
  ];

  const data3_1 = [
    { name: "Nhật Bản", value: 833 },
    { name: "Trung Quốc", value: 167 },
  ];
  const data3_2 = [
    { name: "Nhật Bản", value: 1500 },
    { name: "Trung Quốc", value: 330 },
  ];
  const currentURL = window.location.href;
  const xuong = useMemo(() => {
    if (currentURL.includes("bp1-1")) return "bp1-1";
    if (currentURL.includes("bp1-2")) return "bp1-2";
  });
  const data1=xuong === "bp1-1"?data1_1:data1_2;
  const data2=xuong === "bp1-1"?data2_1:data2_2;
  const data3=xuong === "bp1-1"?data3_1:data3_2;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: 261,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 35, //35
          background: "#14141411",
          borderRadius: "5px 5px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontFamily: "'Be Vietnam Pro', sans-serif",
        }}
      >
        Kho mát
      </div>
      <div
        style={{
          height: 226, //226px
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
            display: "flex",
            flex: 1, //623px //623px
            height: 218, //218px
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
              height: 26, //26
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
              height: 192, //192
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
            display: "flex",
            flex: 1, //623px
            height: 218, //218px
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
              height: 26, //26
              borderBottom: "1px solid #c6c6c670",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Thống kê số thùng chuối nhập kho trong ngày (Thùng)
          </div>
          <div
            style={{
              width: "94.7%", //590
              height: 192, //192
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
            display: "flex",
            flex: 1, //623px //623px
            height: 218, //218px
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "94.7%", //590
              height: 26, //26
              borderBottom: "1px solid #c6c6c670",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Thống kê số thùng chuối xuất kho trong ngày (Thùng)
          </div>
          <div
            style={{
              width: "94.7%", //590
              height: 192, //192
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
