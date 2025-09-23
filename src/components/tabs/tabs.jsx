import React from "react";
import { DesktopOutlined, BarChartOutlined } from "@ant-design/icons";

const Tabs = (props) => {
  return (
    <div className="w-full h-[2.1875rem] flex justify-center items-center  gap-2 text-sm font-be-vietnam-pro bg-[#B8E0C6]">
      <div className="w-[5rem] flex gap-1 justify-center items-center">
        <BarChartOutlined />
        <div>Giám sát</div>
        
      </div>
      <div className="w-[5rem] flex gap-1 justify-center items-center">
        <DesktopOutlined />
        <div>Dữ liệu</div>
        
      </div>
    </div>
  );
};
export default Tabs;
