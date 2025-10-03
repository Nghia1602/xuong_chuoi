import React from "react";
import { Table } from "antd";



const columns = [
  {
    title: "Module",
    dataIndex: "module",
    key: "module",
    fixed: "left",
    width: 120,
    render: (text) => <b className="font-medium">{text}</b>,
  },
  { title: "A456", dataIndex: "A456", key: "A456", align: "center" },
  { title: "A789", dataIndex: "A789", key: "A789", align: "center" },
  { title: "B456", dataIndex: "B456", key: "B456", align: "center" },
  { title: "B789", dataIndex: "B789", key: "B789", align: "center" },
  { title: "CL", dataIndex: "CL", key: "CL", align: "center" },
  { title: "CP", dataIndex: "CP", key: "CP", align: "center" },
  { title: "28CP", dataIndex: "CP28", key: "CP28", align: "center" },
  { title: "30CP", dataIndex: "CP30", key: "CP30", align: "center" },
  { title: "26CP", dataIndex: "CP26", key: "CP26", align: "center" },
  { title: "28CP", dataIndex: "CP28_2", key: "CP28_2", align: "center" },
  { title: "35CP", dataIndex: "CP35", key: "CP35", align: "center" },
  { title: "40CP", dataIndex: "CP40", key: "CP40", align: "center" },
  {
    title: "Kế hoạch",
    dataIndex: "keHoach",
    key: "keHoach",
    align: "center",
    width: 140,
    className: "text-yellow-400 font-medium",
  },
  {
    title: "Thùng thực tế",
    dataIndex: "thungThucTe",
    key: "thungThucTe",
    align: "center",
    width: 140,
    className: "text-blue-600 font-medium",
  },
  {
    title: "Thùng đạt chuẩn",
    dataIndex: "thungDatChuan",
    key: "thungDatChuan",
    align: "center",
    width: 140,
    className: "text-green-600 font-medium",
  },
  {
    title: "Thùng lỗi",
    dataIndex: "thungLoi",
    key: "thungLoi",
    align: "center",
    width: 140,
    className: "text-red-600 font-medium",
  },
];

// custom rowClassName để highlight dòng tổng
const Modules = ({ data }) => {
  // custom rowClassName để highlight dòng tổng
  const rowClassName = (record) => {
    if (record.key === "total") return "bg-blue-300 font-medium";
    return "";
  };

  return (
    <div className="space-y-8 w-[99.9%] p-2  ">
      <Table
        columns={columns}
        dataSource={data["table-module"]} // dùng prop truyền vào
        bordered
        pagination={false}
        expandable={{ defaultExpandAllRows: false }}
        rowClassName={rowClassName}
        scroll={{ x: 1000 }}
        size="small"
      />
    </div>
  );
};


export default Modules;
