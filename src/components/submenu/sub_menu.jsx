import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
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
        width: "170px",
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
        <span style={{ marginRight: "42px" }}>Vùng snoul</span>
        <i className="fa-solid fa-angle-right"></i>
        <div
          className="sub_vung_snoul"
          style={{
            position: "absolute",
            top: "0px",
            left: "105%",
            background: "white",
            boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
            width: "170px",
            borderRadius: "8px",
          }}
        >
          <div style={{ padding: "8px 12px", cursor: "pointer" }}>
            <span style={{ marginRight: "25px" }}>Giám sát chung</span>
          </div>
          <div
            className="xuongbp1-1"
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <span style={{ marginRight: "25px" }}>Xưởng BP1-1</span>
            <i className="fa-solid fa-angle-right"></i>
            <div
              className="sub_bp1-1"
              style={{
                position: "absolute",
                left: "105%",
                top: "-35px",
                width: "170px",
                background: "white",
                boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
                borderRadius: "8px",
                zIndex: 1000,
                color: "black",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                to="/xuong/bp1-1/giam-sat-chung"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Giám sát chung
              </Link>
              <Link
                to="/xuong/bp1-1/khu-tram-cho"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Khu trạm chờ
              </Link>
              <Link
                to="/xuong/bp1-1/khu-dong-goi"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Khu đóng gói
              </Link>
              <Link
                to="/xuong/bp1-1/kho-mat"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Kho mát
              </Link>
              <Link
                to="/xuong/bp1-1/xuat-kho"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Xuất kho
              </Link>
              <Link
                to="/xuong/bp1-1/cai-dat"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Cài đặt
              </Link>
            </div>
          </div>
          <div style={{ padding: "8px 12px", cursor: "pointer" }}>
            <span style={{ marginRight: "25px" }}>
              {" "}
              Xưởng BP1-2
              
            </span>
            <i className="fa-solid fa-angle-right"></i>
            <div
              className="sub_bp1-1"
              style={{
                position: "absolute",
                left: "105%",
                top: "-35px",
                width: "170px",
                background: "white",
                boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
                borderRadius: "8px",
                zIndex: 1000,
                color: "black",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                to="/xuong/bp1-1/giam-sat-chung"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Giám sát chung
              </Link>
              <Link
                to="/xuong/bp1-1/khu-tram-cho"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Khu trạm chờ
              </Link>
              <Link
                to="/xuong/bp1-1/khu-dong-goi"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Khu đóng gói
              </Link>
              <Link
                to="/xuong/bp1-1/kho-mat"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Kho mát
              </Link>
              <Link
                to="/xuong/bp1-1/xuat-kho"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Xuất kho
              </Link>
              <Link
                to="/xuong/bp1-1/cai-dat"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Cài đặt
              </Link>
            </div>
          </div>
          <div style={{ padding: "8px 12px", cursor: "pointer" }}>
            <span style={{ marginRight: "39px" }}> Xưởng BP2</span>
            <div
              className="sub_bp1-1"
              style={{
                position: "absolute",
                left: "105%",
                top: "-35px",
                width: "170px",
                background: "white",
                boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
                borderRadius: "8px",
                zIndex: 1000,
                color: "black",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                to="/xuong/bp1-1/giam-sat-chung"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Giám sát chung
              </Link>
              <Link
                to="/xuong/bp1-1/khu-tram-cho"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Khu trạm chờ
              </Link>
              <Link
                to="/xuong/bp1-1/khu-dong-goi"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Khu đóng gói
              </Link>
              <Link
                to="/xuong/bp1-1/kho-mat"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Kho mát
              </Link>
              <Link
                to="/xuong/bp1-1/xuat-kho"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Xuất kho
              </Link>
              <Link
                to="/xuong/bp1-1/cai-dat"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Cài đặt
              </Link>
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div style={{ padding: "8px 12px", cursor: "pointer" }}>
            <span style={{ marginRight: "25px" }}>Xưởng ER1-1</span>
            <i className="fa-solid fa-angle-right"></i>
            <div
              className="sub_bp1-1"
              style={{
                position: "absolute",
                left: "105%",
                top: "-35px",
                width: "170px",
                background: "white",
                boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
                borderRadius: "8px",
                zIndex: 1000,
                color: "black",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                to="/xuong/bp1-1/giam-sat-chung"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Giám sát chung
              </Link>
              <Link
                to="/xuong/bp1-1/khu-tram-cho"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Khu trạm chờ
              </Link>
              <Link
                to="/xuong/bp1-1/khu-dong-goi"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Khu đóng gói
              </Link>
              <Link
                to="/xuong/bp1-1/kho-mat"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Kho mát
              </Link>
              <Link
                to="/xuong/bp1-1/xuat-kho"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Xuất kho
              </Link>
              <Link
                to="/xuong/bp1-1/cai-dat"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Cài đặt
              </Link>
            </div>
          </div>
          <div style={{ padding: "8px 12px", cursor: "pointer" }}>
            <span style={{ marginRight: "25px" }}>Xưởng ER1-2</span>
            <i className="fa-solid fa-angle-right"></i>
            <div
              className="sub_bp1-1"
              style={{
                position: "absolute",
                left: "105%",
                top: "-35px",
                width: "170px",
                background: "white",
                boxShadow: "0 2px 8px rgba(63, 63, 63, 0.15)",
                borderRadius: "8px",
                zIndex: 1000,
                color: "black",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                to="/xuong/bp1-1/giam-sat-chung"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Giám sát chung
              </Link>
              <Link
                to="/xuong/bp1-1/khu-tram-cho"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Khu trạm chờ
              </Link>
              <Link
                to="/xuong/bp1-1/khu-dong-goi"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Khu đóng gói
              </Link>
              <Link
                to="/xuong/bp1-1/kho-mat"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Kho mát
              </Link>
              <Link
                to="/xuong/bp1-1/xuat-kho"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Xuất kho
              </Link>
              <Link
                to="/xuong/bp1-1/cai-dat"
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Cài đặt
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "8px 12px", cursor: "pointer" }}>
        <span style={{ marginRight: "13px" }}>Vùng Kounmon</span>
        <i className="fa-solid fa-angle-right"></i>
        
      </div>
      <div style={{ padding: "8px 12px", cursor: "pointer" }}>
        <span style={{ marginRight: "54px" }}>Vùng Lào</span>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};
export default SubMenuXuong;
