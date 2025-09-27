import React from "react";
import { DesktopOutlined, BarChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AppRoutes from "../../Router/AreaRouter";
const Tabs = (props) => {
  return (
    <div className="w-full h-[2.1875rem] flex justify-center items-center  gap-2 text-sm font-be-vietnam-pro bg-[#B8E0C6]">
      <AppRoutes />
    </div>
  );
};
export default Tabs;
