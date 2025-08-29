import React from "react";
import { RightOutlined } from "@ant-design/icons";
const SubMenuXuong = (props) => {
  return (
    <div
      className="submenuxuong"
      style={{
        // display: "none",
        position: "absolute",
        top: "160%",
        left: "50%", // Điểm giữa
        transform: "translateX(-50%)",
        backgroundColor: "white",
        color: "black",

        boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
        width: "150px",
        zIndex: 1000,
      }}
    >
      <div
        className="giamsatchung"
        style={{ padding: "8px 12px", cursor: "pointer" }}
      >
        Giám sát chung
      </div>

      <div
        className="vung_snoul"
        style={{ padding: "8px 12px", cursor: "pointer", position: "relative" }}
      >
        Vùng Snoul
        <div
          className="sub_vung_snoul"
          style={{
            position: "absolute",
            top: "0px",
            left: "105%",
            background: "white",
            boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
            width: "150px",
            borderRadius: "8px",
          }}
        >
          <div style={{ padding: "8px 12px", cursor: "pointer" }}>
            Giám sát chung
          </div>
          <div
            className="xuongbp1-1"
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <span>Xưởng BP1-1</span>
            <RightOutlined />
            <div
              className="sub_bp1-1"
              style={{
                position: "absolute",
                left: "105%",
                top: "-35px",
                width: "150px",
                background: "white",
                boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
                borderRadius: "8px",
                zIndex: 1000,
                color: "black",
              }}
            >
              <div style={{ padding: "8px 12px", cursor: "pointer" }}>
                Giám sát chung
              </div>
              <div style={{ padding: "8px 12px", cursor: "pointer" }}>
                Khu trạm chờ
              </div>
              <div style={{ padding: "8px 12px", cursor: "pointer" }}>
                khu đóng gói
              </div>
              <div style={{ padding: "8px 12px", cursor: "pointer" }}>
                Kho mát
              </div>
              <div style={{ padding: "8px 12px", cursor: "pointer" }}>
                Xuất kho
              </div>
              <div style={{ padding: "8px 12px", cursor: "pointer" }}>
                Cài đặt
              </div>
            </div>
          </div>
          <div style={{ padding: "8px 12px", cursor: "pointer" }}>
            Xưởng BP1-2
          </div>
          <div style={{ padding: "8px 12px", cursor: "pointer" }}>
            Xưởng BP2
          </div>
          <div style={{ padding: "8px 12px", cursor: "pointer" }}>
            Xưởng ER1-1
          </div>
          <div style={{ padding: "8px 12px", cursor: "pointer" }}>
            Xưởng ER1-2
          </div>
        </div>
      </div>
      <div style={{ padding: "8px 12px", cursor: "pointer" }}>Vùng Kounmon</div>
      <div style={{ padding: "8px 12px", cursor: "pointer" }}>Vùng Lào</div>
    </div>
  );
};
export default SubMenuXuong;
