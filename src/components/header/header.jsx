import React from "react";
// import logo_agri from "../../../public/images/logo_agri.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SubMenuXuong from "../submenu/sub_menu.jsx";
import "../../../src/App.css";
const Header = (props) => {
  return (
    <div
      style={{
        background: "#398640",
        height: "70px",
        display: "flex",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", width: "14.8%" }}>
        <div
          style={{
            width: "96%",
            height: "54px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "0.625rem",
          }}
        >
          <img
            src="/images/logo_agri.png"
            style={{
              width: "100%",
              height: "28px",
            }}
          />
        </div>
      </div>
      {/* thanh giữa */}
      <div
        style={{
          width: "73%",
          height: "70px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "83.2%",
            height: "70px%",
          }}
        >
          {/* ------------Thông tin liên hệ------------ */}
          <div
            style={{
              width: "100%",
              height: "30px",
              background: "white",
              borderRadius: "0 0 1rem 1rem",
              display: "flex",justifyContent:"center",
              overflow:"hidden", 
            }}
          >
            <div
              style={{
                // width: "50%",
                // height: "100%",
                display: "flex",
                flex:1,
                alignItems: "center",
                justifyContent: "end",
                marginRight: "4rem",
                // paddingLeft: "10rem",
              }}
            >
              <div
                style={{
                  // width: "15%",
                  height: "26px",
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  background: "#c6c6c670",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    // width: "20px",
                    aspectRatio: "1/ 1",
                    height: "18px",
                    borderRadius: "50%",
                    background: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <i
                    className="fa-solid fa-phone-volume"
                    style={{
                      color: "green",
                      // marginRight: "0.125rem",
                      borderRadius: "50%",
                      aspectRatio: "1/ 1",
                      fontSize: "12px",
                      lineHeight: 1, // ✅ Rất quan trọng để fix lệch dọc
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                      // width: "1.04vw",
                      // height:"80%",
                    }}
                  ></i>
                </div>
              </div>

              {/* <i class="fa-regular fa-phone-volume"></i> */}
              <span style={{ marginLeft: "0.625rem", fontSize: "1rem" }}>
                Hỗ trợ dịch vụ:
                <strong style={{ color: "green" }}> 0xxx xxx xxx</strong>
              </span>
            </div>
            <div
              style={{
                // width: "582.5px",
                display: "flex",
                flex:1,
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              Hotline báo cháy:{" "}
              <strong style={{ color: "green" }}>
                {" "}
                0xxx xxx xxx - 0xxx xxx xxx
              </strong>
            </div>
          </div>
          {/* ---------------thanh menu + tài khoản-------------- */}
          <div
            style={{
              width: "100%",
              height: "2.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* ---------------Thanh menu------------------- */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // height: "100%",
                gap: "1rem",
                fontSize: "0.875rem",
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                position: "relative",
              }}
            >
              <div>Trang chủ</div>
              <div className="xuong" style={{ position: "relative" }}>
                Xưởng <SubMenuXuong />
              </div>

              <div>Hướng dẫn sử dụng</div>
              <div>Liên hệ</div>
            </div>

            {/* ---------------Tài khoản------------------- */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                height: "100%",
              }}
            >
              <div
                style={{
                  background: "#c6c6c670",
                  borderRadius: "50%",
                  aspectRatio: "1/ 1",
                  height: "70%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "50%",
                    aspectRatio: "1/ 1",
                    height: "71%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/images/vietnam.png"
                    style={{ aspectRatio: "1/ 1", height: "90%" }}
                    alt="Lá cờ Việt Nam"
                  />
                </div>
              </div>
              <div
                style={{
                  background: "#c6c6c670",
                  borderRadius: "50%",
                  aspectRatio: "1/ 1",
                  height: "70%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "50%",
                    // width: "20px",
                    aspectRatio: "1/ 1",
                    height: "71%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <i
                    className="fa-regular fa-bell"
                    style={{
                      color: "green",
                      fontSize: "0.9375rem",
                      lineHeight: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    color: "white",
                  }}
                >
                  Trần Văn Nghĩa
                </div>
                <div
                  style={{
                    background: "#c6c6c669",
                    borderRadius: "50%",
                    aspectRatio: "1/ 1",
                    height: "70%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      borderRadius: "50%",
                      aspectRatio: "1/ 1",
                      // height: "71%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",

                      height: "1.25rem",
                    }}
                  >
                    <i
                      className="fa-regular fa-user"
                      style={{
                        color: "green",
                        lineHeight: 1,
                        maxWidth: "100%",
                        aspectRatio: "1/1",
                        fontSize: "0.875rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        style={{ width: "1165px", height: "70px", background: "white" }}
      ></div> */}
      {/* VÙng */}
      <div style={{ width: "12.24%", height: "77%" }}>
        <div
          style={{
            width: "90.2%",
            height: "100%",
            fontSize: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          GIÁM SÁT
        </div>
      </div>
    </div>
  );
};
export default Header;
