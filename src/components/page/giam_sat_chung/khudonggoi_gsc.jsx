import React from "react";

const Khudonggoi_gsc = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          height: "35px",
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
          height: "226px",
          width: "1888px",
          display: "flex",
          alignItems: "center",
          //   justifyContent:"space-between",
          fontSize: 14,
          fontFamily: "'Be Vietnam Pro', sans-serif",
          gap: 1,
          border: "1px solid red",
        }}
      >
        <div
          style={{
            width: 623,
            height: 218,
            border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 590,
              height: 26,
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
              width: 590,
              height: 192,
              display: "flex",

              justifyContent: "center",
            }}
          >
            <div style={{ width: 340, height: "100%", gap: "2px" }}>
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
                    1990
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
                  <div style={{ width: "164px" }}>Tổng thùng (thực tế)</div>
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
                    
                  }}
                >
                  <div style={{ width: 80, height: 29 }}>Thùng đạt</div>
                  <div style={{ width: 70, height: 29 }}>3000</div>
                </div>
                <div style={{ width: 158, height: 33 }}></div>
              </div>
            </div>
            <div
              style={{ width: 240, height: "100%", border: "1px solid red" }}
            ></div>
          </div>
        </div>
        <div style={{ width: 623, height: 218 }}>
          <div
            style={{
              width: 590,
              height: 26,
              borderBottom: "1px solid #c6c6c670",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Số thùng chuối Nhật Bản (theo phẩm cấp)
          </div>
          <div
            style={{ width: 590, height: 192, border: "1px solid red" }}
          ></div>
        </div>
        <div style={{ width: 623, height: 218 }}>
          <div
            style={{
              width: 590,
              height: 26,
              borderBottom: "1px solid #c6c6c670",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Số thùng chuối Trung Quốc (theo phẩm cấp)
          </div>
          <div style={{ width: 590, height: 192 }}></div>
        </div>
      </div>
    </div>
  );
};
export default Khudonggoi_gsc;
