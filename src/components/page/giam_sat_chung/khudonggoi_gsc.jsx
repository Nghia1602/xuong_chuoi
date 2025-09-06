import React from "react";
import Barchart_thongke from "./barchart_thongke";
import "/images/japan.png";

const Khudonggoi_gsc = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          height: "13.4%", //35px
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
            // width: 623,//623px
            height: "96%",//218px
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
              width: "94.7%",//590
              height: "12%",//26
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
              width: "94.7%",//590
              height: "88%",//192px
              display: "flex",
              alignItems:"center",

              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 340,
                height: "100%",
                gap: "5px",
                display: "flex",
                flexDirection: "column",alignItems:"center", justifyContent:"center"
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
            // width: 623,
            height: "96%",//218px
            flex: 1,
            borderRight: "1px solid #c6c6c670",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
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
            Số thùng chuối Nhật Bản (theo phẩm cấp)
          </div>
          <div
            style={{
              width: 590,
              height: 192,
              // border: "1px solid red",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <div
              style={{
                width: "590px",
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
                Tổng: <strong style={{ marginLeft: 5 }}>1056</strong>
              </div>
            </div>
            <div
              style={{
                width: "590px",
                height: 149,
                display: "flex",
                flexWrap: "wrap",
                gap: 9,
              }}
            >
              {/* ---------------------------------------
              -------------------------------------------
              -------------------Số liệu Nhật Bản-----------------
              ------------------------------------------
              ----------------------------------------
              -------------------------------------------- */}

              {/* ++++++++++++++++++++++++SL1++++++++++++++++++++++++++++ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,

                  // marginLeft: 6,
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
                  28CP (13kg)
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  176
                </div>
              </div>

              {/* ----------------------------SỐ LIỆU 2------------------------------ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,

                  // marginLeft: 6,
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
                  28CP (18kg)
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  176
                </div>
              </div>
              {/* ----------------------------SỐ LIỆU 3------------------------------ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,

                  // marginLeft: 6,
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
                  30CP (13kg)
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  176
                </div>
              </div>
              {/* ----------------------------SỐ LIỆU 4------------------------------ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,

                  // marginLeft: 6,
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
                  26CP
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  176
                </div>
              </div>
              {/* ----------------------------SỐ LIỆU 5------------------------------ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,

                  // marginLeft: 6,
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
                  35CP
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  176
                </div>
              </div>
              {/* ----------------------------SỐ LIỆU 6------------------------------ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,
                  flexBasis: "100%",
                  // marginLeft: 6,
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
                  40CP
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  176
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------Trung Quốc ----------------- */}

        {/* ----------------------Trung Quốc ----------------- */}
        <div
          style={{
            // width: 623,
            flex:1,
            height: "96%",//218px
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
            Số thùng chuối Trung Quốc (theo phẩm cấp)
          </div>
          <div
            style={{
              width: 590,
              height: 192,
              // border: "1px solid red",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <div
              style={{
                width: "590px",
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
                Tổng: <strong style={{ marginLeft: 5 }}>2000</strong>
              </div>
            </div>
            <div
              style={{
                width: "590px",
                height: 149,
                display: "flex",
                flexWrap: "wrap",
                gap: 9,
              }}
            >
              {/* ---------------------------------------
              -------------------------------------------
              -------------------Số liệu Trung Quốc-----------------
              ------------------------------------------
              ----------------------------------------
              -------------------------------------------- */}

              {/* ++++++++++++++++++++++++SL1++++++++++++++++++++++++++++ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,

                  // marginLeft: 6,
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
                  A456
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  350
                </div>
              </div>

              {/* ----------------------------SỐ LIỆU 2------------------------------ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,

                  // marginLeft: 6,
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
                  A789
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  300
                </div>
              </div>
              {/* ----------------------------SỐ LIỆU 3------------------------------ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,

                  // marginLeft: 6,
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
                  B456
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  350
                </div>
              </div>
              {/* ----------------------------SỐ LIỆU 4------------------------------ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,

                  // marginLeft: 6,
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
                  B789
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  300
                </div>
              </div>
              {/* ----------------------------SỐ LIỆU 5------------------------------ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,

                  // marginLeft: 6,
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
                  CL
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  350
                </div>
              </div>
              {/* ----------------------------SỐ LIỆU 6------------------------------ */}
              <div
                style={{
                  width: 110,
                  height: 72.5,
                  display: "flex",
                  flexDirection: "column",
                  // border: "0 1px 1px 1px solid #DADADA",
                  borderRadius: 4,
                  flexBasis: "100%",
                  // marginLeft: 6,
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
                  CP
                </div>
                <div
                  style={{
                    width: 110,
                    height: 46.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: " 1px solid #DADADA",
                    boxSizing: "border-box",
                    borderRadius: "0 0 4px 4px ",
                  }}
                >
                  176
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Khudonggoi_gsc;
