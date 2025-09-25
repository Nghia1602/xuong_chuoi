import react, { use, useState } from "react";

import Overview from "./Overview/Overview";

import Modules from "./Module/Module";
import { useLocation, useNavigate } from "react-router-dom";
const PackagingArea = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const isActive =(item)=> {
    if (item === "tong-quan") return location.pathname.includes("/tong-quan");
    if (item === "module") return location.pathname.includes("/module");
    return false

  }
//   const handleClick = (item) => {
//     setActive(item);
//     if (item === "tong-quan") {
//       navigate("/tong-quan");
//     } else if (item === "module") {
//       navigate("/module");
//     }
//   };
  return (
    <div className="w-full h-full justify-center flex flex-col font-be-vietnam-pro text-sm">
      <div className="h-[1.7rem] items-center w-full flex pl-[0.5rem] border-b-[0.3px] border-[#c6c6c6100]">
        <div
          className={`h-full w-[4.5rem] text-sm justify-center flex items-center cursor-pointer ${
            isActive("tong-quan") 
              ? "text-green-400 border-b-[0.5px] border-green-500"
              : "text-black"
          }`}
          onClick={() => navigate("/tong-quan")}
        >
          Tổng quan
        </div>
        <div
          className={`h-full w-[3.5rem] text-sm justify-center flex items-center cursor-pointer ${
            isActive("module") 
              ? "text-green-400 border-b-[0.5px] border-green-500"
              : "text-black"
          }`}
          onClick={() => navigate("/module")}
        >
          Module
        </div>
      </div>
      <div className="h-[56rem] w-full flex flex-col  items-center px-[0.4rem] pt-[0.4rem]">
        {/* <Overview /> */}
        <Modules />
      </div>
    </div>
  );
};
export default PackagingArea;
