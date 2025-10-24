import React, { useMemo } from "react";
import Barchart_thongke from "./barchart_thongke";
import "/images/japan.png";

const japanDataBP1_1 = [
  { label: "28CP (13kg)", value: 184 },
  { label: "28CP (18kg)", value: 221 },
  { label: "30CP (13kg)", value: 197 },
  { label: "26CP", value: 163 },
  { label: "35CP", value: 208 },
  { label: "40CP", value: 179 },
];
const japanDataBP1_2 = [
  { label: "28CP (13kg)", value: 190 },
  { label: "28CP (18kg)", value: 160 },
  { label: "30CP (13kg)", value: 210 },
  { label: "26CP", value: 185 },
  { label: "35CP", value: 200 },
  { label: "40CP", value: 175 },
];
const dataChinaBP1_1 = [
  { code: "A456", value: 350 },
  { code: "A789", value: 300 },
  { code: "B456", value: 350 },
  { code: "B789", value: 300 },
  { code: "CL", value: 350 },
  { code: "CP", value: 176 },
];
const dataChinaBP1_2 = [
  { code: "A456", value: 320 },
  { code: "A789", value: 280 },
  { code: "B456", value: 360 },
  { code: "B789", value: 310 },
  { code: "CL", value: 340 },
  { code: "CP", value: 190 },
];
const Khudonggoi_gsc = (props) => {
  const currentUrl = window.location.href;
  const xuong = useMemo(() => {
    if (currentUrl.includes("bp1-1")) return "bp1-1";
    if (currentUrl.includes("bp1-2")) return "bp1-2";
    return "unknown";
  }, [currentUrl]);

  // 🔹 Chọn dữ liệu tương ứng
  const japanData = xuong === "bp1-2" ? japanDataBP1_2 : japanDataBP1_1;
  const chinaData = xuong === "bp1-2" ? dataChinaBP1_2 : dataChinaBP1_1;
  const totalJapan = japanData.reduce((sum, item) => sum + item.value, 0);
  const totalChina = chinaData.reduce((sum, item) => sum + item.value, 0);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          height: "35px", //35px
          background: "#14141411",
          borderRadius: "5px 5px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontFamily: "'Be Vietnam Pro', sans-serif",
        }}
      >
        Khu đóng gói
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
            // width: 623,//623px
            height: 218, //218px
            flex: 1,
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
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
            Thống kê chung
          </div>
          <div
            style={{
              width: "94.7%", //590
              height: 192, //192px
              display: "flex",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 340,
                height: 192,
                gap: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // borderRight: "1px solid #c6c6c670",
              }}
            >
              <div
                style={{
                  width: 324,
                  height: 91,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px  ",
                }}
              >
                {/* --------------------kế hoạch---------------- */}
                <div
                  style={{
                    height: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "164px" }}>Kế hoạch</div>
                  <div
                    style={{
                      width: "80px",
                      color: "#28537A",
                      fontWeight: "bold",
                    }}
                  >
                    3110
                  </div>
                  <div
                    style={{
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Thùng
                  </div>
                </div>
                {/* --------------------Tổng thùng---------------- */}
                <div
                  style={{
                    height: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "164px" }}>Tổng thùng (thực tế)</div>
                  <div
                    style={{
                      width: "80px",
                      color: "#5A9CCA",
                      fontWeight: "bold",
                    }}
                  >
                    3056
                  </div>
                  <div
                    style={{
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Thùng
                  </div>
                </div>
                {/* --------------------Chênh lệch---------------- */}
                <div
                  style={{
                    height: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "164px" }}>Chênh lệch</div>
                  <div
                    style={{
                      width: "80px",
                      color: "#002147",
                      fontWeight: "bold",
                    }}
                  >
                    -54
                  </div>
                  <div
                    style={{
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Thùng
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 324,
                  height: 12,
                  borderBottom: "1px solid #c6c6c670",
                }}
              ></div>
              <div
                style={{
                  width: 324,
                  height: 65,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: 158,
                    height: 33,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#5A9CCA",
                    borderRadius: "4px",
                    color: "#ffff",
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 29,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRight: "1px solid #ffff",
                    }}
                  >
                    Thùng đạt
                  </div>
                  <div
                    style={{
                      width: 70,
                      height: 29,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    3000
                  </div>
                </div>
                <div
                  style={{
                    width: 158,
                    height: 33,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "4px",
                    color: "#EB1010",
                    border: "1px solid #EB1010",
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 29,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRight: "1px solid #EB1010",
                    }}
                  >
                    Thùng lỗi
                  </div>
                  <div
                    style={{
                      width: 70,
                      height: 29,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    56
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "40.67%", height: "100%" }}>
              <Barchart_thongke />
            </div>
          </div>
        </div>
        {/* ----------------------Nhật Bản ----------------- */}

        {/* ----------------------Nhật Bản ----------------- */}
        <div
          style={{
            height: 218,
            flex: 1,
            borderRight: "1px solid #c6c6c670",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          {/* Tiêu đề */}
          <div
            style={{
              width: "94.7%",
              height: 26,
              borderBottom: "1px solid #c6c6c670",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Số thùng chuối Nhật Bản (theo phẩm cấp)
          </div>

          {/* Nội dung */}
          <div
            style={{
              width: "94.7%",
              height: 192,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            {/* Tổng */}
            <div
              style={{
                width: "100%",
                height: 19,
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div style={{ width: 27, height: 19 }}>
                <img
                  src="/images/japan.png"
                  alt="Nhật Bản"
                  style={{ height: 19 }}
                />
              </div>
              <div
                style={{
                  width: 81,
                  height: 19,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Tổng: <strong style={{ marginLeft: 5, color: "#FFD441" }}>{totalJapan}</strong>
              </div>
            </div>

            {/* Danh sách phẩm cấp */}
            <div
              style={{
                width: "100%",
                height: 149,
                display: "flex",
                flexWrap: "wrap",
                gap: 9,
              }}
            >
              {japanData.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    width: 110,
                    height: 72.5,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: 26,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#DADADA",
                      borderRadius: "4px 4px 0 0",
                      
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: 46.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #DADADA",
                      boxSizing: "border-box",
                      borderRadius: "0 0 4px 4px",
                      color: "#FFD441",
                      
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ----------------------Trung Quốc ----------------- */}

        {/* ----------------------Trung Quốc ----------------- */}
        <div
          style={{
            flex: 1,
            height: 218,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {/* ======= Tiêu đề ======= */}
          <div
            style={{
              width: "94.7%",
              height: 26,
              borderBottom: "1px solid #c6c6c670",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Số thùng chuối Trung Quốc (theo phẩm cấp)
          </div>

          {/* ======= Nội dung ======= */}
          <div
            style={{
              width: "94.7%",
              height: 192,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            {/* Tổng số thùng */}
            <div
              style={{
                width: "100%",
                height: 19,
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div style={{ width: 27, height: 19 }}>
                <img
                  src="/images/china.png"
                  alt="Trung Quốc"
                  style={{ height: 19 }}
                />
              </div>
              <div
                style={{
                  width: 81,
                  height: 19,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Tổng:{" "}
                <strong style={{ marginLeft: 5, color:"#BB0E3D" }}>
                  {totalChina}
                </strong>
              </div>
            </div>

            {/* Bảng số liệu */}
            <div
              style={{
                width: "100%",
                height: 149,
                display: "flex",
                flexWrap: "wrap",
                gap: 9,
              }}
            >
              {chinaData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: 110,
                    height: 72.5,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                  }}
                >
                  <div
                    style={{
                      width: 110,
                      height: 26,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#DADADA",
                      borderRadius: "4px 4px 0 0",
                    }}
                  >
                    {item.code}
                  </div>
                  <div
                    style={{
                      width: 110,
                      height: 46.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #DADADA",
                      boxSizing: "border-box",
                      borderRadius: "0 0 4px 4px",
                      color: "#BB0E3D",

                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Khudonggoi_gsc;
