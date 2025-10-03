import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";

const SubmenuTab = ({ tabs }) => {
  const { vung, xuong, khu } = useParams();
  const location = useLocation();

  // Lấy tab cha đang active từ URL
  const activeTab = tabs.find((tab) =>
    location.pathname.includes(`/${vung}/${xuong}/${khu}/${tab.path}`)
  );

  return (
    <div className="flex h-[65px] w-full flex-col  ">
      {/* Tabs cha */}
      <div className="flex  w-[100%] h-[35px] justify-center items-center  ">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={`/${vung}/${xuong}/${khu}/${tab.path}`}
            className={({ isActive }) =>
              `px-4 py-1 rounded  ${
                isActive ? "text-green-600" : "text-black"
              }`
            }
          >
            <div className="flex items-center gap-1">
              {tab.icon && <div>{tab.icon}</div>}
              <div>{tab.label}</div>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Subtabs riêng biệt ở ngoài */}
      {activeTab?.children?.length > 0 && (
        <div className="flex w-full h-[30px] justify-start items-center text-sm pl-[5px] border-b border-b-[0.3px] border-[#c6c6c670]">
          {activeTab.children.map((child) => (
            <NavLink
              key={child.path}
              to={`/${vung}/${xuong}/${khu}/${activeTab.path}/${child.path}`}
              className={({ isActive }) =>
                `px-3 py-1  flex items-center justify-center ${
                  isActive ? "text-green-500 border-b border-b-[1px] border-green-500" : "text-gray-700"
                }`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubmenuTab;
