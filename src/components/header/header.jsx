import React, { useState } from "react";
// import logo_agri from "../../../public/images/logo_agri.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SubMenuXuong from "../submenu/sub_menu.jsx";
// import "../../../src/App.css";
// import Menu from "../submenu/submenu2.jsx";
// import Menu1 from "../submenu/TestSubMenu.jsx";
import Menu1 from "../submenu/submenu2.jsx";
import { Link } from "react-router-dom";

const Header = ({ location, onLoginClick, user }) => {
  const { khu, xuong } = location;
  console.log("location", location);
  const locationName = (slug) => {
    switch (slug) {
      case "xuong-bp1-1":
        return "Xưởng BP1-1";
      case "xuong-bp1-2":
        return "Xưởng BP1-2";
      case "khu-tram-cho":
        return "Khu trạm chờ";
      case "giam-sat-chung":
        return "Giám sát chung";
      case "khu-dong-goi":
        return "Khu đóng gói";
      default:
        return slug || "";
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-center bg-[#398640]">
      <div className="hidden sm:flex flex items-center justify-center w-[14.8%]">
        <div className="w-[96%] h-[54px] flex items-center justify-center ">
          <img src="/images/logo_agri.png" className="h-[28px]" />
        </div>
      </div>
      {/* thanh giữa */}
      <div className="w-[73%] h-[70px] flex justify-center items-center">
        <div className="flex items-center flex-col w-[83%] h-[70px] justify-center">
          {/* ------------Thông tin liên hệ------------ */}
          <div className="w-[100%] h-[30px] bg-white  flex justify-center items-center overflow-hidden rounded-b-[1rem] xl:flex hidden">
            <div
              style={{
                // width: "50%",
                // height: "100%",
                display: "flex",
                flex: 1,
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
                flex: 1,
                alignItems: "center",
                // gap: "0.25rem",
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
          <div className="w-[100%] h-[2.5rem] flex justify-between items-center gap-[0.375rem]">
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
              <Link to={"/"} className="text-center ">
                Trang chủ
              </Link>
              <div
                className="xuong flex justify-center items-center "
                style={{
                  position: "relative",
                  // color: "red",
                  // background: "yellow",
                  // height: "15px",
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
              >
                Xưởng
                {isOpen && (
                  <div
                    className="absolute bg-white  w-[11rem] flex justify-center items-center rounded-[5px]"
                    style={{
                      top: "180%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: 100,
                    }}
                  >
                    <Menu1 />
                  </div>
                )}
                {/* <SubMenuXuong /> */}
              </div>

              <div className="text-center ">Hướng dẫn sử dụng</div>
              <div className="text-center ">Liên hệ</div>
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
              <div className="h-[70%]  aspect-square bg-[#c6c6c670] rounded-full flex justify-center items-center hidden md:flex">
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
              <div className="hidden md:flex h-[70%] aspect-square bg-[#c6c6c670] rounded-full flex justify-center items-center">
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
                {user ? (
                  <div className="text-center font-be-vietnam-pro text-white hidden sx:flex">
                    {user.displayName || user.username}
                  </div>
                ) : (
                  <div
                    className="text-center font-be-vietnam-pro text-white hidden sx:flex cursor-pointer"
                    onClick={onLoginClick}
                  >
                    Đăng nhập
                  </div>
                )}

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
                      cursor: "pointer",
                      height: "1.25rem",
                    }}
                    onClick={onLoginClick}
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
      <div className="w-[12.24%] h-[4.375rem] flex items-center justify-center text-white uppercase text-sm">
        {locationName(xuong)} | {locationName(khu)}
      </div>
    </div>
  );
};
export default Header;
