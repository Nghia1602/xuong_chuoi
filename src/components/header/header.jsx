import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Header = (props) => {
  return (
    <div
      style={{
        width: "1920px",
        height: "70px",
        background: "#398640",
        display: "flex",
      }}
    >
      {/* logo */}
      <div
        style={{
          width: "285px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px",
        }}
      >
        <div
          style={{
            width: "275px",
            height: "54px",
            paddingLeft: "10px",
          }}
        >
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      {/* thanh giữa */}
      <div style={{ width: "1400px", height: "70px" }}>
        <div style={{ width: "1165px", height: "70px" }}>
          {/* ------------Thông tin liên hệ------------ */}
          <div
            style={{
              width: "1165px",
              height: "35px",
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
              <div style={{width: "28px", height:"28px", borderRadius: "50%", background:"#c6c6c6", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div style={{width: "20px", height:"20px", borderRadius: "50%", background:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <i
                    class="fa-solid fa-phone-volume"
                    style={{
                      color: "green",
                      marginRight: "2px",
                      borderRadius: "50%",
                      fontSize: "12px"
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
              }}
            >
              Hotline báo cháy:{" "}
              <strong style={{ color: "green" }}>
                {" "}
                0xxx xxx xxx - 0xxx xxx xxx
              </strong>
            </div>
          </div>
          <div style={{ width: "1165px", height: "35px" }}></div>
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

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          GIÁM SÁT
        </div>
      </div>
    </div>
  );
};
export default Header;
