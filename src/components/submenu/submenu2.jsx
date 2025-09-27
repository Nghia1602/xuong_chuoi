import React, { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState({});
  console.log(open);

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menuData = [
    {
      name: "Giám sát chung",
      key: "giam-sat-chung-vung",
    },
    {
      name: "Vùng Snoul",
      key: "vungsnoul",
      children: [
        {
          name: "Giám sát chung",
          key: "giam-sat-chung-xuong",
        },
        {
          name: "Xưởng BP1-1",
          key: "xuong-bp1-1",
          children: [
            { name: "Khu D", path: "/vung-a/xuong-a/khu-d" },
            { name: "Khu E", path: "/vung-a/xuong-a/khu-e" },
            { name: "Khu F", path: "/vung-a/xuong-a/khu-f" },
            { name: "Khu G", path: "/vung-a/xuong-a/khu-g" },
          ],
        },
        {
          name: "Xưởng BP1-2",
          key: "xuong-bp1-2",
          children: [
            { name: "Khu D", path: "/vung-a/xuong-b/khu-d" },
            { name: "Khu E", path: "/vung-a/xuong-b/khu-e" },
          ],
        },
        {
          name: "Xưởng BP2",
          key: "xuong-bp2",
          children: [
            { name: "Khu D", path: "/vung-a/xuong-b/khu-d" },
            { name: "Khu E", path: "/vung-a/xuong-b/khu-e" },
          ],
        },
        {
          name: "Xưởng ER1-1",
          key: "xuong-er1-1",
          children: [
            { name: "Khu D", path: "/vung-a/xuong-b/khu-d" },
            { name: "Khu E", path: "/vung-a/xuong-b/khu-e" },
          ],
        },
        {
          name: "Xưởng ER1-2",
          key: "xuong-er1-2",
          children: [
            { name: "Khu D", path: "/vung-a/xuong-b/khu-d" },
            { name: "Khu E", path: "/vung-a/xuong-b/khu-e" },
          ],
        },
      ],
    },
    {
      name: "Vùng Kounmon",
      key: "vung-kounmon",
      children: [
        {
          name: "Xưởng A",
          key: "xuongA_H",
          children: [
            { name: "Khu I", path: "/vung-h/xuong-a/khu-i" },
            { name: "Khu K", path: "/vung-h/xuong-a/khu-k" },
          ],
        },
      ],
    },
  ];

  // Hàm render đệ quy
  const renderMenu = (items, level = 0) => {
    if (level === 0) {
      // Render các vùng (level 0)
      return items.map((item, index) => (
        <div
          key={item.key}
          className="absolute bg-white w-[10rem] h-[2rem] border rounded shadow-sm border-gray-300"
          style={{ top: index * 40 + "px", left: 0 }}
        >
          <div
            onClick={() => item.children && toggle(item.key)}
            className="flex justify-between items-center w-full py-1 px-3 hover:bg-gray-100 rounded-md cursor-pointer select-none"
          >
            <span className="font-semibold text-gray-800">{item.name}</span>
            {item.children ? (
              open[item.key] ? (
                <i className="fa-solid fa-angle-down"></i>
              ) : (
                <i className="fa-solid fa-angle-right"></i>
              )
            ) : null}
          </div>
          {open[item.key] && item.children && (
            <div className="absolute left-full top-0 ml-2 bg-gray-50 border rounded shadow-lg z-20 p-3 min-w-40 border-gray-300">
              {renderMenu(item.children, level + 1)}
            </div>
          )}
        </div>
      ));
    } else if (level === 1) {
      // Render các xưởng (level 1) - có background
      return items.map((item, index) => (
        <div key={item.key} className="mb-2 relative">
          {" "}
          {/* THÊM 'relative' VÀO ĐÂY */}{" "}
          <div
            onClick={() => item.children && toggle(item.key)}
            className="flex justify-between items-center w-full py-2 px-3 bg-blue-100 hover:bg-blue-200 rounded-md cursor-pointer select-none border border-blue-300 transition-colors"
          >
            {" "}
            <span className="text-sm font-medium text-blue-800">
              {item.name}{" "}
            </span>
           {" "}
            {item.children ? (
              open[item.key] ? (
                <i className="fa-solid fa-angle-down"></i>
              ) : (
                <i className="fa-solid fa-angle-right"></i>
              )
            ) : null}
           {" "}
          </div>
           {/* Menu con của xưởng (các khu) */}{" "}
          {open[item.key] && item.children && (
            <div className="absolute left-full top-0 ml-2 bg-white border rounded shadow-lg z-30 min-w-28 border-gray-300">
              {" "}
              {/* Dùng top-0 để căn trên cùng của thẻ div Level 1 */}
                {renderMenu(item.children, level + 1)}{" "}
            </div>
          )}
         {" "}
        </div>
      ));
    } else {
      // Render các khu (level 2+)
      return items.map((item, index) => (
        <div key={item.key || index}>
          <div
            className="block py-2 px-3 hover:bg-gray-100 rounded-md text-sm whitespace-nowrap cursor-pointer transition-colors text-gray-700 hover:text-gray-900"
            onClick={() => alert(`Navigating to: ${item.path}`)}
          >
            {item.name}
          </div>
        </div>
      ));
    }
  };

  return <div className=" h-32">{renderMenu(menuData)}</div>;
};
