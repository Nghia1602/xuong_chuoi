import React from "react";
import { Table, ConfigProvider, Empty } from "antd";
import "./TableDataTotal.css";

const DataStatistics = ({ tableData }) => {
  if (!tableData || !tableData.headers || !tableData.rows) {
    return (
      <div
        style={{
          width: "100%",
          height: "225px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Empty description="No data" />
      </div>
    );
  }

  const numberOfFields = tableData.headers.length;
  const getColorByName = (name) => {
    if (name.includes("đầu vào")) return "bg-[#FCD617]";
    if (name.includes("đạt")) return "bg-[#7DC241]";
    if (name.includes("lỗi")) return "bg-[#EB1010]";
    if (name.includes("Khối lượng")) return "bg-[#6A8FD8]";
    if (name.includes("Năng suất")) return "bg-[#5A9CCA]";
    return "bg-white"; // mặc định nếu không khớp tên
  };

  const dataTotal = tableData.rows.map((row) => {
    let totalValue = row.value.reduce((sum, v) => sum + v, 0);
if (row.name.toLowerCase().includes("khối lượng")){
   totalValue = Math.round(totalValue * 100) / 100; // làm tròn 2 chữ số  
}
    // Nếu là năng suất, chia cho số nông trường
    if (row.name.toLowerCase().includes("năng suất")) {
      totalValue = totalValue / numberOfFields;
      // Làm tròn 2 chữ số thập phân
      totalValue = Math.round(totalValue * 100) / 100;
    }

    return {
      name: row.name,
      value: totalValue,
      color: getColorByName(row.name),
    };
  });

  // Thêm row "Số nông trường"
  dataTotal.unshift({
    name: "Số nông trường",
    value: numberOfFields,
    color: "bg-[#FFFFFF]",
  });

  const columns = [
    {
      dataIndex: "name",
      key: "name",
      width: "75%",
      render: (text) => (
        <div
          className="truncate font-be-vietnam-pro text-sm"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {text}
        </div>
      ),
    },
    {
      dataIndex: "value",
      key: "value",
      width: "25%",
      render: (value) => (
        <div className="font-be-vietnam-pro text-sm">{value}</div>
      ),
    },
  ];

  const rowClassName = (record) => record.color;

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBorderRadius: 0,
          },
        },
      }}
    >
      <Table
        className="custom-tabletotal"
        dataSource={dataTotal}
        bordered
        columns={columns}
        pagination={false}
        rowClassName={rowClassName}
        rowKey="name"
        style={{ width: "100%", tableLayout: "auto", height: "100%" }}
        scroll={{ x: 250 }}
        showHeader={false}
      />
    </ConfigProvider>
  );
};

export default DataStatistics;
