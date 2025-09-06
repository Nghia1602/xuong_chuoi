import React, {useEffect, useState} from "react";

import DonutChart from "../../content/donutchart";
import HarvestBarChart from "./barchart_giamsatchung";
import Khudonggoi_gsc from "./khudonggoi_gsc";
import Khomat_gsc from "./khomat_gsc";
const GiamSatChung = (props) => {
  
  return (
    <div
      style={{
        width: "100%",
        height: "88.97%", //847px
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        fontFamily: "'Be Vietnam Pro',sans-serif ",
        overflow:"hidden",
        // flexWrap: "wrap",
      }}
    >
      
      {/* -------------------Bảng 1--------------- */}
      <div
        style={{
          width: "98.33%",//1888px
          height: "30.81%",//261px
          borderRadius: "0.3125rem 0.3125rem 0 0",
          boxShadow: "0 0.125rem 0.5rem rgba(63, 63, 63, 0.15)",
          marginBottom: "0.9375rem",
          marginTop: "0.625",
          // border: "1px solid red",
          
        }}
      >
        <div
          style={{
            maxWidth: "100%",//1888px
            height: "13.41%",//35px
            background: "#14141411",
            borderRadius: "5px 5px 0 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize:"14px",
            fontFamily:"'Be Vietnam Pro', sans-serif"
          }}
        >
          Khu trạm chờ
        </div>
        <div
          style={{
            width: "100%",//1888px
            height: "86.59%", //226px// Giảm height để có không gian cho BarChart
            padding: "10px",
            boxSizing: "border-box",
            display: "flex",
            
            alignItems: "center",
            justifyContent: "center",
            // border: "1px solid blue",
            gap: "6px",
            
            // flexWrap: "wrap",
            // overflow: "auto"
          }}
        >
          <div
            style={{
              // Width: "33.3%",//625px
              flex:1,
              height: "96.6%",//218px
              // border: "1px solid red",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "95%",//590px
                height: "12%",//26px
                boxSizing: "border-box",
                borderBottom: "1px solid #c6c6c670",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize:'0.875rem'
              }}
            >
              Thống kê chung
            </div>
            <div
              style={{
                width: "95%",//590px
                height: "88%",//192
                display: "flex",
                justifyContent: "space-between",
                // border: "1px solid red",
              }}
            >
              <div
                style={{
                  width: "57.6%",//340px
                  height: "100%",//192px
                  // border: "1px solid green",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  borderRight: "1px solid #c6c6c670",
                }}
              >
                <div
                  style={{
                    width: "95%",//324px
                    height: "30.2%",//58px
                    // border: "1px solid red",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems:"center",
                    fontSize: "14px",
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                  }}
                >
                  <div
                    style={{
                      height: "25px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "164px" }}>Buồng đầu vào</div>
                    <div
                      style={{
                        width: "80px",
                        color: "#FCD617",
                        fontWeight: "bold",
                      }}
                    >
                      2173
                    </div>
                    <div
                      style={{
                        width: "80px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      Buồng
                    </div>
                  </div>
                  <div
                    style={{
                      height: "25px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "164px" }}>Buồng đạt</div>
                    <div
                      style={{
                        width: "80px",
                        color: "#4FA336",
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
                      Buồng
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "95%",//324px
                    height: "57.3%",//110px
                    flexDirection: "column",
                    display: "flex",
                    // border: "1px solid blue",
                    boxSizing: "border-box",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      height: "48%",//51px
                      // border: "1px solid red",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      style={{
                        background: "#4FA336",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "47%",//24px
                        color: "white",
                        fontSize: "13px",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                      }}
                    >
                      Tổng khối lượng buồng đạt
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "53%",//27px
                        color: "#4FA336",fontSize:"0.875rem"
                        // fontWeight: "bold",
                      }}
                    >
                      <strong style={{fontFamily:"'Be Vietnam Pro', sans-serif", fontSize:"0.875rem", fontWeight:""}}>68.68 </strong>(Tấn )
                    </div>
                  </div>
                  <div
                    style={{
                      height: "48%",//51px
                      // border: "1px solid red",
                    }}
                  >
                    <div
                      style={{
                        background: "#4FA336",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "47%",//24px
                        color: "white",
                        fontFamily: "'Be Vietnam Pro', sans-serif",

                        fontSize: "13px",
                      }}
                    >
                      Năng suất trung bình buồng đạt
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "53%",//27px
                        color: "#4FA336",
                        fontWeight: "bold",
                      }}
                    >
                      31.05 (kg/buồng )
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "70.6%",//240px
                  height: "20vh",//192px
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DonutChart />
              </div>
            </div>
          </div>





          {/* ------------------GIám sát chung 1-2---------------------- */}
          <div
            style={{
              // Width: "66.4%",// 1255px
              height: "100%",// 218px
              // border: "1px solid red",
              display: "flex",
              flex:2,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "97%",//1220px
                height: "12%",//26px
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid #c6c6c670",
              }}
            >
              Thống kê số lượng thu hoạch theo từng nông trường (buồng)
            </div>
            <div style={{ width: "97%", height: "88%", fontSize: "0.875rem",  }}>
              {" "}
              <HarvestBarChart />
            </div>
          </div>
        </div>
      </div>
      {/* -------------------Bảng 2--------------- */}
      <div
        style={{
          width: "98.33%",//1888px
          height: "30.81%",
          borderRadius: "5px 5px 0 0",
          boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
          marginBottom: "15px",
          fontSize: 14,
          fontFamily: "'Be Vietnam Pro', sans-serif",
          
        }}
      >
        <Khudonggoi_gsc />
      </div>
      {/* -------------------Bảng 3--------------- */}
      {/* <div
        style={{
          width: "1888px",
          height: "261px",
          borderRadius: "5px 5px 0 0",
          boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
          marginBottom: "15px",
        }}
      >
        <Khomat_gsc/>
      </div> */}
    </div>
  );
};
export default GiamSatChung;
