// dataConfig.js
import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export const dataConfig = {
  "vung-snoul": {
    label: "Vùng Snoul",
    children: {
      "xuong-bp1-1": {
        label: "Xưởng BP1-1",
        children: {
          "giam-sat-chung": "Giám sát chung",
          "khu-tram-cho": "Khu trạm chờ",
          "khu-dong-goi": "Khu đóng gói",
          "kho-mat": "Kho mát",
          "cai-dat": "Cài đặt",
          "xuat-kho": "Xuất kho",
        },
      },
      "xuong-bp1-2": {
        label: "Xưởng BP1-2",
        children: {
          "giam-sat-chung": "Giám sát chung",
          "khu-tram-cho": "Khu trạm chờ",
          "khu-dong-goi": "Khu đóng gói",
          "kho-mat": "Kho mát",
          "cai-dat": "Cài đặt",
          "xuat-kho": "Xuất kho",
        },
      },
      "xuong-er1-1": {
        label: "Xưởng ER1-1",
        children: {
          "giam-sat-chung": "Giám sát chung",
          "khu-tram-cho": "Khu trạm chờ",
          "khu-dong-goi": "Khu đóng gói",
        },
      },
    },
  },
  "vung-knounmon": {
    label: "Vùng Knounmon",
    children: {
      "xuong1": {
        label: "Xưởng 1",
        children: {
          "khu-tram-cho": "Khu trạm chờ",
          "khu-dong-goi": "Khu đóng gói",
        },
      },
      "xuong2": {
        label: "Xưởng 2",
        children: {
          "khu-tram-cho": "Khu trạm chờ",
          "khu-dong-goi": "Khu đóng gói",
        },
      },
    },
  },
};
// buildMenu.js

export const buildItems = (config, basePath = "") =>
  Object.entries(config).map(([key, value]) => {
    if (typeof value === "string") {
      // node lá
      return {
        key,
        label: <Link to={`${basePath}/${key}`}>{value}</Link>,
      };
    }
    // node cha
    return {
      key,
      label: value.label,
      children: buildItems(value.children, `${basePath}/${key}`),
    };
  });

const Menu1 = () => {
  const items = buildItems(dataConfig);

  return (
    <Menu
      style={{ width: 256, borderRadius: 5 }}
      mode="vertical"
      items={items}
    />
  );
};

export default Menu1;
