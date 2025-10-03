// src/components/Test/Submenu.jsx
import React from "react";
import { NavLink, useParams } from "react-router-dom";

const SubmenuTab = ({ tabs }) => {
  const { vung, xuong, khu } = useParams();

  return (
    <div className="flex">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={`/${vung}/${xuong}/${khu}/${tab.path}`}
          className={({ isActive }) =>
            `px-4 py-2 rounded ${isActive ? " text-green-600 " : " text-black"}`
          }
        >
          <div className="gap-1 flex">
            <div className="items-center flex ">{tab.icon}</div>
            <div>{tab.label}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SubmenuTab;
