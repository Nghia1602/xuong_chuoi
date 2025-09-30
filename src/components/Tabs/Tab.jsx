import React from "react";


import { useParams } from "react-router-dom";
import SubmenuTab from "./submenuTab";
import { DesktopOutlined, BarChartOutlined } from "@ant-design/icons";


const Tabs = () => {
  const { khu } = useParams();

  // Cấu hình tab cho từng khu
  const tabsConfig = {
    "giam-sat-chung": [
      { path: "giam-sat", label: "Giám sát",  },
      { path: "du-lieu", label: "Dữ liệu" },
    ],
    "khu-tram-cho": [
      { path: "giam-sat", label: "Giám sát",icon: <DesktopOutlined /> },
      { path: "du-lieu", label: "Dữ liệu", icon: <BarChartOutlined /> },
    ],
    "khu-dong-goi": [
      { path: "giam-sat", label: "Giám sát" },
      { path: "du-lieu", label: "Dữ liệu" },
    ],
  }

  const currentTabs = tabsConfig[khu] || [];

  
  return (
    <div className="w-full h-[2.1875rem] flex justify-center items-center  gap-[1px] text-sm font-be-vietnam-pro bg-[#B8E0C6]">
      <SubmenuTab tabs={currentTabs} />
    </div>
  );
  
};

export default Tabs;

