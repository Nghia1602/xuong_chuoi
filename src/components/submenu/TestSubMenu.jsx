import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

import { Link } from "react-router-dom";
const items = [
  {
    key: "vung-snoul",
    label: "Vùng Snoul",
    children: [
      {
        key: "giam-sat-chung",
        label: <Link to={"/vung-snoul/giam-sat-chung"}>Giám sát chung</Link>,

      },
      {
        key: "xuong-bp1-1",
        label: "Xưởng BP1-1",

        children: [
          { key: "xuong-bp1-1-giam-sat-chung", label: <Link to={"/vung-snoul/xuong-bp1-1/giam-sat-chung"}>Giám sát chung</Link> },
          { key: "xuong-bp1-1-khu-tram-cho", label: <Link to={"/vung-snoul/xuong-bp1-1/khu-tram-cho"}>Khu trạm chờ</Link>},
          { key: "xuong-bp1-1-khu-dong-goi", label: <Link to={"/vung-snoul/xuong-bp1-1/khu-dong-goi"}>Khu đóng gói</Link> },
          { key: "xuong-bp1-1-kho-mat", label: <Link to={"/vung-snoul/xuong-bp1-1/kho-mat"}>Kho mát</Link>  },
          { key: "xuong-bp1-1-cai-dat", label: <Link to={"/vung-snoul/xuong-bp1-1/cai-dat"}>Cài đặt</Link> },
          { key: "xuat-kho", label: <Link to={"/vung-snoul/xuong-bp1-1/xuat-kho"}>Xuất kho</Link> },
        ],
      },
      {
        key: "xuong-bp1-2",
        label: "Xưởng BP1-2",

        children: [
            { key: "xuong-bp1-2-giam-sat-chung", label: <Link to={"/vung-snoul/xuong-bp1-2/giam-sat-chung"}>Giám sát chung</Link> },
          { key: "xuong-bp1-2-khu-tram-cho", label: <Link to={"/vung-snoul/xuong-bp1-2/khu-tram-cho"}>Khu trạm chờ</Link>},
          { key: "xuong-bp1-2-khu-dong-goi", label: <Link to={"/vung-snoul/xuong-bp1-2/khu-dong-goi"}>Khu đóng gói</Link> },
          { key: "xuong-bp1-2-kho-mat", label: <Link to={"/vung-snoul/xuong-bp1-2/kho-mat"}>Kho mát</Link>  },
          { key: "xuong-bp1-2-cai-dat", label: <Link to={"/vung-snoul/xuong-bp1-2/cai-dat"}>Cài đặt</Link> },
          { key: "xuong-bp1-2-xuat-kho", label: <Link to={"/vung-snoul/xuong-bp1-2/xuat-kho"}>Xuất kho</Link> },
        ],
      },
      {
        key: "xuong-er1-1",
        label: "Xưởng ER1-1",

        children: [
         { key: "xuong-er1-1-giam-sat-chung", label: <Link to={"/vung-snoul/xuong-er1-1/giam-sat-chung"}>Giám sát chung</Link> },
          { key: "xuong-er1-1-khu-tram-cho", label: <Link to={"/vung-snoul/xuong-er1-1/khu-tram-cho"}>Khu trạm chờ</Link>},
          { key: "xuong-er1-1-khu-dong-goi", label: <Link to={"/vung-snoul/xuong-er1-1/khu-dong-goi"}>Khu đóng gói</Link> },
          { key: "xuong-er1-1-kho-mat", label: <Link to={"/vung-snoul/xuong-er1-1/kho-mat"}>Kho mát</Link>  },
          { key: "xuong-er1-1-cai-dat", label: <Link to={"/vung-snoul/xuong-er1-1/cai-dat"}>Cài đặt</Link> },
          { key: "xuong-er1-1-xuat-kho", label: <Link to={"/vung-snoul/xuong-er1-1/xuat-kho"}>Xuất kho</Link> },
        ],
      },
      {
        key: "xuong-er1-2",
        label: "Xưởng ER1-2",

        children: [
          { key: "giam-sat-chung", label: "Giám sát chung" },
          { key: "khu-tram-cho", label: "Khu trạm chờ" },
          { key: "khu-dong-goi", label: "Khu đóng gói" },
          { key: "kho-mat", label: "Kho mát" },
          { key: "cai-dat", label: "Cài đặt" },
          { key: "xuat-kho", label: "Xuất kho" },
        ],
      },
    ],
  },
  {
    key: "vung-knounmon",

    label: "Vùng Knounmon",
    children: [
      { key: "giam-sat-chung-knounmon", label: "Giám sát chung" },
      {
        key: "xuong1",
        label: "Xưởng 1",
        children: [
          { key: "giam-sat-chung", label: "Khu trạm chờ" },
          { key: "8", label: "Khu đóng gói" },
        ],
      },
      {
        key: "xuong2",
        label: "Xưởng 2",
        children: [
          { key: "giam-sat-chung", label: "Khu trạm chờ" },
          { key: "8", label: "Khu đóng gói" },
        ],
      },
    ],
  },
  {
    key: "vung-lao",
    label: "Vùng Lào",

    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
];
const onClick = (e) => {
  console.log("click", e);
};
const Menu1 = () => (
  <Menu
    onClick={onClick}
    
    style={{ width: 256, borderRadius: 5 ,}}
    mode="vertical"
    items={items}
    getPopupContainer={() => document.body}
  />
);
export default Menu1;
