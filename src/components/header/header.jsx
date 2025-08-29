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
        width: "1920px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", width: "285px" }}>
        <div
          style={{
            width: "274px",
            height: "54px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
          }}
        >
          <img
            src="/images/logo_agri.png"
            style={{
              width: "274px",
              height: "28px",
            }}
          />
        </div>
      </div>
      {/* thanh giữa */}
      <div
        style={{
          width: "1400px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1165px",
            height: "70px",
          }}
        >
          {/* ------------Thông tin liên hệ------------ */}
          <div
            style={{
              width: "1165px",
              height: "30px",
              background: "white",
              borderRadius: "0 0 16px 16px",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "582.5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                marginRight: "80px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#c6c6c670",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="fa-solid fa-phone-volume"
                    style={{
                      color: "green",
                      marginRight: "2px",
                      borderRadius: "50%",
                      fontSize: "12px",
                    }}
                  ></i>
                </div>
              </div>

              {/* <i class="fa-regular fa-phone-volume"></i> */}
              <span style={{ marginLeft: "10px" }}>
                Hỗ trợ dịch vụ:
                <strong style={{ color: "green" }}> 0xxx xxx xxx</strong>
              </span>
            </div>
            <div
              style={{
                width: "582.5px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
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
              width: "1165px",
              height: "40px",
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
                height: "40px",
                gap: "16px",
                fontSize: "16px",
                color: "white",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                position: "relative",
              }}
            >
              <div>Trang chủ</div>
              <div className="xuong" style={{ position: "relative" }}>Xưởng <SubMenuXuong/>
              </div>
              
              <div>Hướng dẫn sử dụng</div>
              <div>Liên hệ</div>
            </div>

            {/* ---------------Tài khoản------------------- */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div
                style={{
                  background: "#c6c6c670",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/images/vietnam.png"
                    style={{ width: "16px", height: "16px" }}
                    alt="Lá cờ Việt Nam"
                  />
                </div>
              </div>
              <div
                style={{
                  background: "#c6c6c670",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="fa-regular fa-bell"
                    style={{ fontSize: "16px", color: "green" }}
                  ></i>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
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
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="fa-regular fa-user"
                      style={{ color: "green", fontSize: "14px" }}
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
      <div style={{ width: "235px", height: "70px" }}>
        <div
          style={{
            width: "212px",
            height: "70px",
            fontSize: "16px",
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
