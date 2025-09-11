import React from "react";
import { Table } from "antd";
import "./TableDataTotal.css";
const Data = [
  { name: "Số nông trường", value: 12, color: "bg-[#Ffff]" },
  { name: "Buồng đầu vào", value: 4110, color: "bg-[#FCD617]" },
  { name: "Buồng đạt", value: 3825, color: "bg-[#7DC241]" },
  { name: "Buồng lỗi", value: 258, color: "bg-[#EB1010]" },
  { name: "Khối lượng (tấn)", value: 13.347, color: "bg-[#6A8FD8]" },
  { name: "Năng suất (kg/buồng)", value: 32.86, color: "bg-[#5A9CCA]" },
];

// Định nghĩa cột
const columns = [
  {
    
    dataIndex: "name",
    key: "name",
    width: "75%",
    render: (text, record) => (
      <div className="truncate font-be-vietnam-pro text-sm" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {text}
      </div>
    ),
  },
  {
    
    dataIndex: "value",
    key: "value",
    width: "25%",
    render: (value) => (
      <div className="font-be-vietnam-pro text-sm">
        {value}
      </div>
    ),
  },
];

// Thêm màu cho từng row dựa vào record.color
const rowClassName = (record) => record.color;

const DataStatistics = () => {
  return (
    <Table
    className="custom-tabletotal"
      dataSource={Data}
      columns={columns}
      pagination={false}
    //   rowKey={(record) => record.name}
      rowClassName={rowClassName}
    //   size="small"
      style={{ width:"100%",tableLayout:"auto", height:"100%" }}
      scroll={{  x: 250  }}
    //   bordered={false}
      showHeader={false} 
    
    />
  );
};

export default DataStatistics;
